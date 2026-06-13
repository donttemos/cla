import { NextResponse } from "next/server";
import { isPostgresConfigured, pingPostgres } from "@/lib/db/postgres";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isPostgresConfigured()) {
    return NextResponse.json(
      {
        error: {
          code: "DATABASE_NOT_CONFIGURED",
          message: "DATABASE_URL is not configured.",
        },
      },
      { status: 503 },
    );
  }

  try {
    await pingPostgres();
    return NextResponse.json({ data: { database: "ok", provider: "postgres" } });
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          code: "DATABASE_ERROR",
          message:
            error instanceof Error
              ? error.message
              : "PostgreSQL health check failed.",
        },
      },
      { status: 503 },
    );
  }
}
