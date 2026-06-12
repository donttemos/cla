"use client";

import { useEffect } from "react";
import { isRtlLocale, type Locale } from "@/lib/i18n";

export type LocaleDocumentSyncProps = {
  locale: Locale;
};

export function LocaleDocumentSync({ locale }: LocaleDocumentSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtlLocale(locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
