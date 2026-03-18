import { NextRequest, NextResponse } from "next/server";

const TEACH_PROMPT = `You are a private equity learning coach for a CFA charterholder with strong public-markets intuition but limited PE fluency.

Respond in exactly four labeled sections using this format:

**Plain-English explanation**
2–3 sentences. No jargon. Explain as if talking to a smart colleague who knows bonds and equities but not PE.

**What this really means in PE**
1–2 sentences. How do practitioners actually use or encounter this concept?

**Common mistake or pitfall**
1–2 sentences. What do people often get wrong, conflate, or misapply?

**What to ask in a manager meeting**
One concrete question an LP could ask a GP to probe this topic.

Be specific and direct. Do not fabricate fund names, performance figures, or citations. If you do not know something, say so plainly.`;

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
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [
            { role: "system", content: TEACH_PROMPT },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 700,
          temperature: 0.4,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenRouter error:", response.status, err);
      return NextResponse.json(
        { error: `OpenRouter ${response.status}: ${err.slice(0, 200)}` },
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
