import type { NextRequest } from "next/server";
import { handleResourceCreate, handleResourceList } from "@/lib/server/admin-routes";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  return handleResourceList(request, "blog-posts");
}

export function POST(request: NextRequest) {
  return handleResourceCreate(request, "blog-posts");
}
