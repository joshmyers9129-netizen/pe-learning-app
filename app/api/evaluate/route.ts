import { NextRequest, NextResponse } from "next/server";

const EVAL_PROMPT = `You are a rigorous PE learning evaluator. Score the user's answer against the question and model answer.

Scoring rubric (1–5):
5 = Correct, complete, uses PE-specific reasoning, decision-useful framing, clear and professional
4 = Mostly correct, minor gaps or imprecise language
3 = Partially correct, missing at least one key concept
2 = Vague, incomplete, or mostly incorrect
1 = Blank, too short (under 10 words), or fundamentally wrong

Return ONLY valid JSON with this exact structure and no other text:
{"score":number,"verdict":"short string","strengths":["...","..."],"gaps":["...","..."],"improvedAnswer":"concise model revision","confidence":"low"|"medium"|"high"}

Rules:
- If userAnswer is blank or under 10 words, return score 1, verdict "Please provide a substantive answer.", empty strengths, gaps explaining what is missing, improvedAnswer from the model answer, confidence "low"
- strengths and gaps: 2–3 items max, one short sentence each
- improvedAnswer: 2–4 sentences max, tighter than the model answer if possible
- confidence: low if score ≤ 2, medium if score 3–4, high if score 5
- No commentary outside the JSON object`;

export interface EvalRequest {
  lessonId: string;
  questionId: string;
  prompt: string;
  modelAnswer: string;
  userAnswer: string;
}

export interface EvalResult {
  score: number;
  verdict: string;
  strengths: string[];
  gaps: string[];
  improvedAnswer: string;
  confidence: "low" | "medium" | "high";
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Evaluation is not configured." },
      { status: 503 }
    );
  }

  let body: EvalRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { prompt, modelAnswer, userAnswer } = body;
  if (!prompt || !modelAnswer || userAnswer === undefined) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const userContent =
    `Question: ${prompt}\n\nModel answer: ${modelAnswer}\n\nUser answer: ${userAnswer.trim() || "(blank)"}`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://pe-learning-app.local",
          "X-Title": "PE Learning App",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [
            { role: "system", content: EVAL_PROMPT },
            { role: "user", content: userContent },
          ],
          max_tokens: 500,
          temperature: 0.1,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenRouter eval error:", response.status, err);
      return NextResponse.json(
        { error: `OpenRouter ${response.status}: ${err.slice(0, 200)}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const text: string = data?.choices?.[0]?.message?.content?.trim() ?? "";

    if (!text) {
      return NextResponse.json(
        { error: "Empty response from AI. Try again." },
        { status: 502 }
      );
    }

    let result: EvalResult;
    try {
      result = JSON.parse(text);
    } catch {
      // Try to extract JSON from the response in case there's surrounding text
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) {
        console.error("Could not parse eval JSON:", text);
        return NextResponse.json(
          { error: "Could not parse evaluation response." },
          { status: 502 }
        );
      }
      result = JSON.parse(match[0]);
    }

    return NextResponse.json(result);
  } catch (e) {
    console.error("Eval route fetch error:", e);
    return NextResponse.json(
      { error: "Could not reach AI service. Check your connection." },
      { status: 502 }
    );
  }
}
