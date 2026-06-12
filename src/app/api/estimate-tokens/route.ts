import { NextResponse } from "next/server";

const API_URL = "https://free.suyu.io/v1/chat/completions";
// In production, this should be an environment variable. 
// Using the provided free key temporarily.
const API_KEY = process.env.SUYU_API_KEY || "sk-t6r9VpHYEUCtfg7eWYMopfkJBnzvGwmDG6HSYEBoNlowfKB4U7";

export async function POST(request: Request) {
  try {
    const { text, model = "gpt-4o" } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: "user", content: text }],
        max_tokens: 1, // We only care about prompt_tokens, so we minimize output cost/time
      }),
    });

    if (!response.ok) {
       const errorData = await response.text();
       return NextResponse.json({ error: "API call failed", details: errorData }, { status: response.status });
    }

    const data = await response.json();
    const promptTokens = data.usage?.prompt_tokens || 0;

    return NextResponse.json({ tokens: promptTokens });
  } catch (error) {
    console.error("Token estimation error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
