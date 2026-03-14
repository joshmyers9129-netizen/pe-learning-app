import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a PE concepts explainer for a CFA charterholder with strong public-markets intuition but limited private equity fluency. Explain concepts clearly and draw analogies to public markets where useful. Be concise — 2 to 3 short paragraphs. Do not fabricate citations, invent specific fund names, or make up performance figures. If you do not know something, say so plainly.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI helper is not configured." },
      { status: 503 }
    );
  }

  let body: { prompt?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const userPrompt = body.prompt?.trim();
  if (!userPrompt) {
    return NextResponse.json({ error: "Missing prompt." }, { status: 400 });
  }

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
          model: "meta-llama/llama-3.2-3b-instruct:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 400,
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
