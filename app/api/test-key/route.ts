import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json({ error: "OPENROUTER_API_KEY not set" });
  }

  const info = {
    keyPrefix: apiKey.slice(0, 12),
    keySuffix: apiKey.slice(-4),
    keyLength: apiKey.length,
    hasWhitespace: apiKey !== apiKey.trim() || /\s/.test(apiKey),
  };

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [{ role: "user", content: "Say hello" }],
          max_tokens: 10,
        }),
      }
    );

    const body = await response.text();
    return NextResponse.json({
      ...info,
      status: response.status,
      response: body.slice(0, 500),
    });
  } catch (e) {
    return NextResponse.json({
      ...info,
      error: String(e),
    });
  }
}
