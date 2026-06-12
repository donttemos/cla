"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, forwardRef } from "react";
import { addLocaleToPathname, stripLocaleFromPathname, DEFAULT_LOCALE } from "@/lib/i18n";

export const LocalizedLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof NextLink>>(
  ({ href, ...props }, ref) => {
    const pathname = usePathname() || "/";
    const { locale } = stripLocaleFromPathname(pathname);
    const currentLocale = locale || DEFAULT_LOCALE;

    const localizedHref =
      typeof href === "string" && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:")
        ? addLocaleToPathname(href, currentLocale)
        : href;

    return <NextLink ref={ref} href={localizedHref} {...props} />;
  }
);
LocalizedLink.displayName = "LocalizedLink";
