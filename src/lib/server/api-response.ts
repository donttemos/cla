import { NextResponse } from "next/server";

export type ApiErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "DATABASE_ERROR"
  | "FORBIDDEN"
  | "INVALID_ID"
  | "METHOD_NOT_ALLOWED"
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "VALIDATION_ERROR";

export type ApiErrorBody = {
  error: {
    code: ApiErrorCode;
    message: string;
    details?: unknown;
  };
};

export type ApiFailure = {
  ok: false;
  status: number;
  error: ApiErrorBody["error"];
};

export type ApiSuccess<T> = {
  ok: true;
  status: number;
  data: T;
};

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export function ok<T>(data: T, status = 200): ApiSuccess<T> {
  return { ok: true, status, data };
}

export function fail(
  status: number,
  code: ApiErrorCode,
  message: string,
  details?: unknown,
): ApiFailure {
  return {
    ok: false,
    status,
    error: details === undefined ? { code, message } : { code, message, details },
  };
}

export function jsonResult<T>(result: ApiResult<T>): NextResponse {
  if (result.ok) {
    return NextResponse.json({ data: result.data }, { status: result.status });
  }

  return NextResponse.json({ error: result.error }, { status: result.status });
}
