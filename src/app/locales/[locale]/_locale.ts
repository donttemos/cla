import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  isSupportedLocale,
  type Locale,
} from "@/lib/i18n";

export type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export type LocaleSlugPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateLocaleStaticParams() {
  return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map(
    (locale) => ({ locale }),
  );
}

export function validateLocale(locale: string): Locale {
  if (!isSupportedLocale(locale) || locale === DEFAULT_LOCALE) {
    notFound();
  }

  return locale;
}

export async function validateLocaleParam(params: LocalePageProps["params"]): Promise<Locale> {
  const { locale } = await params;

  return validateLocale(locale);
}
