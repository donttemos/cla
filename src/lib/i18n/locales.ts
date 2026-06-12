export const SUPPORTED_LOCALES = [
  "en",
  "es",
  "pt-BR",
  "id",
  "zh-CN",
  "zh-TW",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export type LocaleMetadata = {
  label: string;
  nativeLabel: string;
  rtl: boolean;
};

export const LOCALE_METADATA: Record<Locale, LocaleMetadata> = {
  en: { label: "English", nativeLabel: "English", rtl: false },
  es: { label: "Spanish", nativeLabel: "Spanish", rtl: false },
  "pt-BR": {
    label: "Portuguese (Brazil)",
    nativeLabel: "Portuguese (Brazil)",
    rtl: false,
  },
  id: { label: "Indonesian", nativeLabel: "Bahasa Indonesia", rtl: false },
  "zh-CN": {
    label: "Chinese (Simplified)",
    nativeLabel: "简体中文",
    rtl: false,
  },
  "zh-TW": {
    label: "Chinese (Traditional)",
    nativeLabel: "繁體中文",
    rtl: false,
  },
};

const PREFIXED_LOCALES = SUPPORTED_LOCALES.filter(
  (locale) => locale !== DEFAULT_LOCALE,
);

const LOCALE_LOOKUP = Object.fromEntries(
  SUPPORTED_LOCALES.flatMap((locale) => [
    [locale.toLowerCase(), locale],
    [locale.replace("-", "_").toLowerCase(), locale],
  ]),
) as Record<string, Locale>;

const LANGUAGE_FALLBACKS: Record<string, Locale> = {
  en: "en",
  es: "es",
  pt: "pt-BR",
  id: "id",
  zh: "zh-CN",
};

export function isSupportedLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    SUPPORTED_LOCALES.includes(value as Locale)
  );
}

export function normalizeLocale(value: string | null | undefined): Locale {
  return resolveSupportedLocale(value) ?? DEFAULT_LOCALE;
}

function resolveSupportedLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const normalized = value.trim().replace(/_/g, "-").toLowerCase();

  if (!normalized) {
    return null;
  }

  const exactLocale = LOCALE_LOOKUP[normalized];

  if (exactLocale) {
    return exactLocale;
  }

  const parts = normalized.split("-");
  const language = parts[0];

  if (!language) {
    return null;
  }

  if (language === "zh") {
    const regionOrScript = parts.slice(1).join("-");

    return regionOrScript.includes("tw") ||
      regionOrScript.includes("hk") ||
      regionOrScript.includes("mo") ||
      regionOrScript.includes("hant")
      ? "zh-TW"
      : "zh-CN";
  }

  return LANGUAGE_FALLBACKS[language] ?? null;
}

export function getLocalePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export function getLocaleLabel(locale: Locale): string {
  return LOCALE_METADATA[locale].nativeLabel;
}

export function isRtlLocale(locale: Locale): boolean {
  return LOCALE_METADATA[locale].rtl;
}

export type StrippedLocalePathname = {
  locale: Locale | null;
  pathname: string;
};

export function stripLocaleFromPathname(
  pathname: string,
): StrippedLocalePathname {
  const normalizedPathname = ensureLeadingSlash(pathname);
  const firstSegment = normalizedPathname.split("/")[1] ?? "";
  const locale = PREFIXED_LOCALES.find((candidate) => candidate === firstSegment);

  if (!locale) {
    return { locale: null, pathname: normalizedPathname };
  }

  const strippedPathname = normalizedPathname.slice(locale.length + 1);

  return {
    locale,
    pathname: ensureLeadingSlash(strippedPathname),
  };
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  const stripped = stripLocaleFromPathname(pathname).pathname;
  const prefix = getLocalePrefix(locale);

  if (!prefix) {
    return stripped;
  }

  return stripped === "/" ? prefix : `${prefix}${stripped}`;
}

export function getLocalizedPathname(
  pathname: string,
  locale: Locale,
): string {
  return addLocaleToPathname(pathname, locale);
}

export function matchLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
): Locale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const requestedLocales = acceptLanguage
    .split(",")
    .map((entry, index) => parseAcceptLanguageEntry(entry, index))
    .filter((entry): entry is AcceptLanguageEntry => entry !== null)
    .sort((left, right) => right.quality - left.quality || left.index - right.index);

  for (const requestedLocale of requestedLocales) {
    const locale = resolveSupportedLocale(requestedLocale.tag);

    if (locale) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

type AcceptLanguageEntry = {
  tag: string;
  quality: number;
  index: number;
};

function parseAcceptLanguageEntry(
  value: string,
  index: number,
): AcceptLanguageEntry | null {
  const [rawTag, ...parameters] = value.trim().split(";");
  const tag = rawTag?.trim();

  if (!tag || tag === "*") {
    return null;
  }

  const qualityParameter = parameters.find((parameter) =>
    parameter.trim().startsWith("q="),
  );
  const quality = qualityParameter
    ? Number.parseFloat(qualityParameter.trim().slice(2))
    : 1;

  if (!Number.isFinite(quality) || quality <= 0) {
    return null;
  }

  return { tag, quality, index };
}

function ensureLeadingSlash(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
