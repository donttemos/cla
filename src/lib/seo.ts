import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  addLocaleToPathname,
  type Locale,
} from "@/lib/i18n";
import type { Calculator, Category, SeoFields } from "@/types/content";

export interface PageSeoInput extends SeoFields {
  readonly path: `/${string}`;
  readonly locale?: Locale;
  readonly type?: "website" | "article";
  readonly imagePath?: `/${string}`;
}

export interface WebApplicationJsonLd {
  readonly "@context": "https://schema.org";
  readonly "@type": "WebApplication";
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly applicationCategory: "UtilitiesApplication";
  readonly operatingSystem: "Any";
  readonly offers: {
    readonly "@type": "Offer";
    readonly price: "0";
    readonly priceCurrency: "USD";
  };
}

export function absoluteUrl(path: `/${string}`): string {
  return new URL(path, SITE_URL).toString();
}

export function buildLocalizedPath(path: `/${string}`, locale: Locale): `/${string}` {
  return addLocaleToPathname(path, locale) as `/${string}`;
}

export function buildLanguageAlternates(path: `/${string}`): Record<string, string> {
  return {
    "x-default": absoluteUrl(buildLocalizedPath(path, DEFAULT_LOCALE)),
    ...Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [
        locale,
        absoluteUrl(buildLocalizedPath(path, locale)),
      ]),
    ),
  };
}

export function buildPageMetadata(input: PageSeoInput): Metadata {
  const locale = input.locale ?? DEFAULT_LOCALE;
  const localizedPath = buildLocalizedPath(input.path, locale);
  const canonical = absoluteUrl(localizedPath);
  const title = input.seoTitle;
  const description = input.seoDescription;
  const images = input.imagePath ? [absoluteUrl(input.imagePath)] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(input.path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: input.type ?? "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export function buildCategoryMetadata(category: Category): Metadata {
  return buildPageMetadata({
    seoTitle: category.seoTitle,
    seoDescription: category.seoDescription,
    path: `/category/${category.slug}`,
  });
}

export function buildLocalizedCategoryMetadata(category: Category, locale: Locale): Metadata {
  return buildPageMetadata({
    seoTitle: category.seoTitle,
    seoDescription: category.seoDescription,
    path: `/category/${category.slug}`,
    locale,
  });
}

export function buildCalculatorMetadata(calculator: Calculator, locale = DEFAULT_LOCALE): Metadata {
  return buildPageMetadata({
    seoTitle: calculator.seoTitle,
    seoDescription: calculator.seoDescription,
    path: `/${calculator.slug}`,
    locale,
  });
}

export function buildCalculatorJsonLd(calculator: Calculator): WebApplicationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calculator.name,
    url: absoluteUrl(`/${calculator.slug}`),
    description: calculator.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}
