import type { Metadata } from "next";
import { CalculatorCard, CalculatorSearch, SectionHeader } from "@/components";
import {
  getAllCalculatorsByLocale,
  getCategoryBySlugAndLocale,
  getFeaturedCalculatorsByLocale,
} from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "All Calculators - Free Online Calculator Library",
    seoDescription:
      "Browse every free online calculator available on DTECALC, including finance, health, math, conversion, business, date, and AI cost tools.",
    path: "/calculators",
    locale,
  });
}

export default async function LocaleCalculatorsPage({
  params,
}: LocalePageProps) {
  const locale = await validateLocaleParam(params);
  const dictionary = getDictionary(locale);
  const calculators = getAllCalculatorsByLocale(locale);
  const popularSearches = getFeaturedCalculatorsByLocale(locale, 5).map((calculator) => ({
    label: calculator.name,
    href: `/${locale}/${calculator.slug}`,
  }));

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow={dictionary.pages.calculators.eyebrow}
        title={dictionary.pages.calculators.title}
        description={dictionary.pages.calculators.description}
      />
      <div className="mb-8 max-w-3xl">
        <CalculatorSearch action={`/${locale}/calculators`} popularSearches={popularSearches} />
      </div>
      <div className="cv-grid">
        {calculators.map((calculator) => {
          const category = getCategoryBySlugAndLocale(calculator.categorySlug, locale);
          return (
            <CalculatorCard
              key={calculator.slug}
              title={calculator.name}
              description={calculator.description}
              href={`/${locale}/${calculator.slug}`}
              category={category?.name}
              badge={calculator.featured ? dictionary.pages.calculators.popularBadge : undefined}
            />
          );
        })}
      </div>
    </main>
  );
}
