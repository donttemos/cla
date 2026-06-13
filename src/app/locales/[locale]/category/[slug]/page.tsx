import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateStaticParams as generateCategoryStaticParams } from "../../../../category/[slug]/page";
import { CalculatorCard, SectionHeader } from "@/components";
import {
  getCalculatorsByCategorySlugAndLocale,
  getCategoryBySlugAndLocale,
} from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedCategoryMetadata } from "@/lib/seo";
import {
  generateLocaleStaticParams,
  validateLocale,
  type LocaleSlugPageProps,
} from "../../_locale";

export async function generateStaticParams() {
  const locales = generateLocaleStaticParams();
  const categories = await Promise.resolve(generateCategoryStaticParams());

  return locales.flatMap(({ locale }) =>
    categories.map(({ slug }) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: LocaleSlugPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = validateLocale(locale);
  const category = await getCategoryBySlugAndLocale(slug, validLocale);

  return category ? buildLocalizedCategoryMetadata(category, validLocale) : {};
}

export default async function LocaleCategoryPage({
  params,
}: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  const validLocale = validateLocale(locale);
  const dictionary = getDictionary(validLocale);
  const category = await getCategoryBySlugAndLocale(slug, validLocale);

  if (!category) {
    notFound();
  }

  const calculators = await getCalculatorsByCategorySlugAndLocale(category.slug, validLocale);

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow={dictionary.pages.category.eyebrow}
        title={`${category.name} ${dictionary.pages.category.titleSuffix}`}
        description={category.description}
      />
      <div className="cv-grid">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.slug}
            title={calculator.name}
            description={calculator.description}
            href={`/${validLocale}/${calculator.slug}`}
            badge={calculator.featured ? dictionary.pages.category.popularBadge : undefined}
          />
        ))}
      </div>
    </main>
  );
}
