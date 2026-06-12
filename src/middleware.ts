import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  getLocalePrefix,
  isSupportedLocale,
  matchLocaleFromAcceptLanguage,
} from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("admin_token")?.value;
  const isLoginPage = pathname.startsWith("/admin/login");
  const isAdminRoute = pathname.startsWith("/admin") && !isLoginPage;

  if (isAdminRoute && !token) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If they are on the login page but already have a token, redirect to admin
  if (isLoginPage && token) {
    const adminUrl = new URL("/admin", request.url);
    return NextResponse.redirect(adminUrl);
  }

  // Handle i18n locale routing
  if (!isBotRequest(request)) {
    // 1. Root path redirect based on user preference (if not default)
    if (pathname === "/") {
      const cookieLocale = request.cookies.get("app_language")?.value;
      const preferredLocale = isSupportedLocale(cookieLocale)
        ? cookieLocale
        : matchLocaleFromAcceptLanguage(request.headers.get("accept-language"));

      if (preferredLocale !== DEFAULT_LOCALE) {
        const localeUrl = request.nextUrl.clone();
        localeUrl.pathname = `${getLocalePrefix(preferredLocale)}/`;
        return NextResponse.redirect(localeUrl);
      }
    }

    // 2. Rewrite /[locale]/... to /locales/[locale]/... to prevent dynamic route conflicts
    const firstSegment = pathname.split("/")[1];
    if (firstSegment && isSupportedLocale(firstSegment) && firstSegment !== DEFAULT_LOCALE) {
      const rewrittenUrl = request.nextUrl.clone();
      rewrittenUrl.pathname = `/locales${pathname}`;
      return NextResponse.rewrite(rewrittenUrl);
    }
  }

  return NextResponse.next();
}

function isBotRequest(request: NextRequest): boolean {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";

  return /bot|crawler|spider|slurp|duckduckbot|baiduspider|yandex/.test(userAgent);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|llms.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
