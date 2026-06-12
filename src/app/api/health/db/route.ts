import { NextResponse } from "next/server";
import { pingDatabase } from "@/lib/db/mysql";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await pingDatabase();
    return NextResponse.json({ data: { database: "ok" } });
  } catch {
    return NextResponse.json(
      {
        error: {
          code: "DATABASE_ERROR",
          message: "Database health check failed.",
        },
      },
      { status: 503 },
    );
  }
}
