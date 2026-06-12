import type { NextRequest } from "next/server";
import {
  handleResourceDelete,
  handleResourceGet,
  handleResourceUpdate,
} from "@/lib/server/admin-routes";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return handleResourceGet(request, "blog-posts", id);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return handleResourceUpdate(request, "blog-posts", id);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return handleResourceUpdate(request, "blog-posts", id);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return handleResourceDelete(request, "blog-posts", id);
}
