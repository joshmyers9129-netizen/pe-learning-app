import { NextRequest, NextResponse } from "next/server";

const EXPLAIN_PROMPT = `You are a PE concepts explainer for a CFA charterholder with strong public-markets intuition but limited private equity fluency. Explain concepts clearly and draw analogies to public markets where useful. Be concise — 2 to 3 short paragraphs. Do not fabricate citations, invent specific fund names, or make up performance figures. If you do not know something, say so plainly.`;

const GRADE_PROMPT = `You are grading a short-response answer to a private equity question for a CFA charterholder learner. The learner has strong public-markets knowledge but is building PE fluency. Assess whether their answer captures the key concepts, then give: 1) a one-sentence verdict (Strong / Partial / Needs work), 2) what they got right, 3) what was missing or imprecise. Be direct and specific — 3 to 5 sentences total. Do not fabricate specific figures.`;

export function GET() {
  return NextResponse.json({ available: !!process.env.OPENROUTER_API_KEY });
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI helper is not configured." },
      { status: 503 }
    );
  }

  let body: { prompt?: string; mode?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const userPrompt = body.prompt?.trim();
  if (!userPrompt) {
    return NextResponse.json({ error: "Missing prompt." }, { status: 400 });
  }

  const systemPrompt = body.mode === "grade" ? GRADE_PROMPT : EXPLAIN_PROMPT;

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
          model: "anthropic/claude-haiku-4-5",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 600,
          temperature: 0.4,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenRouter error:", response.status, err);
      return NextResponse.json(
        { error: "AI service returned an error. Try again later." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const text: string =
      data?.choices?.[0]?.message?.content?.trim() ?? "";

    if (!text) {
      return NextResponse.json(
        { error: "Empty response from AI. Try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ text });
  } catch (e) {
    console.error("AI route fetch error:", e);
    return NextResponse.json(
      { error: "Could not reach AI service. Check your connection." },
      { status: 502 }
    );
  }
}
