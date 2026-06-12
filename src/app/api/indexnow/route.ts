import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/content";

const INDEXNOW_KEY = "8520e5e019f2438cb27103239e0817c1";
const INDEXNOW_ENDPOINT = "https://www.bing.com/indexnow";
const SUBMISSION_SECRET = "calcverse_secret_2026"; // In production, move this to an environment variable

/**
 * API route to submit URLs to IndexNow (Bing/Yandex)
 * Example usage: POST /api/indexnow?secret=calcverse_secret_2026 with body { urls: ["..."] }
 */
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    if (secret !== SUBMISSION_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }

    const payload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, submitted: urls.length });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "IndexNow submission failed", detail: errorText },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("IndexNow error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
