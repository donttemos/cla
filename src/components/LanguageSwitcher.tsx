"use client";

import { useEffect, useId, useMemo, useState, type ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLocaleLabel,
  getLocalizedPathname,
  isRtlLocale,
  type Locale,
} from "@/lib/i18n";

export type LanguageSwitcherProps = {
  currentLocale?: Locale;
  currentPathname?: string;
  className?: string;
};

export function LanguageSwitcher({
  currentLocale,
  currentPathname,
  className = "",
}: LanguageSwitcherProps) {
  const id = useId();
  const pathname = usePathname();
  const router = useRouter();
  const initialLocale = currentLocale ?? DEFAULT_LOCALE;
  const [selectedLocale, setSelectedLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    setSelectedLocale(initialLocale);
  }, [initialLocale]);

  const localeOptions = useMemo<Array<{ locale: Locale; label: string }>>(
    () =>
      SUPPORTED_LOCALES.map((locale: Locale) => ({
        locale,
        label: getLocaleLabel(locale),
      })),
    [],
  );

  function updateDocumentLocale(locale: Locale) {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtlLocale(locale) ? "rtl" : "ltr";
  }

  function handleLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    const sourcePathname = currentPathname ?? pathname ?? "/";

    setSelectedLocale(nextLocale);
    localStorage.setItem("app_language", nextLocale);
    document.cookie = `app_language=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    updateDocumentLocale(nextLocale);
    router.push(getLocalizedPathname(sourcePathname, nextLocale));
  }

  return (
    <div className={`inline-flex min-w-0 max-w-full items-center ${className}`}>
      <label className="sr-only" htmlFor={id}>
        Select language
      </label>
      <select
        id={id}
        aria-label="Select language"
        className="min-w-0 max-w-full rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm outline-none transition hover:border-zinc-300 hover:bg-zinc-50 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
        value={selectedLocale}
        onChange={handleLocaleChange}
      >
        {localeOptions.map(({ locale, label }) => (
          <option key={locale} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
