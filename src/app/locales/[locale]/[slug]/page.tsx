import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateStaticParams as generateCalculatorStaticParams } from "../../../[slug]/page";
import { CalculatorPageView } from "@/components/CalculatorPageView";
import { getCalculatorBySlugAndLocale } from "@/lib/content";
import { buildCalculatorMetadata } from "@/lib/seo";
import {
  generateLocaleStaticParams,
  validateLocale,
  type LocaleSlugPageProps,
} from "../_locale";

export async function generateStaticParams() {
  const locales = generateLocaleStaticParams();
  const calculators = await Promise.resolve(generateCalculatorStaticParams());

  return locales.flatMap(({ locale }) =>
    calculators.map(({ slug }) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: LocaleSlugPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = validateLocale(locale);
  const calculator = getCalculatorBySlugAndLocale(slug, validLocale);

  if (!calculator) {
    return {};
  }

  return buildCalculatorMetadata(calculator, validLocale);
}

export default async function LocaleCalculatorPage({
  params,
}: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  const validLocale = validateLocale(locale);
  const calculator = getCalculatorBySlugAndLocale(slug, validLocale);

  if (!calculator) {
    notFound();
  }

  return <CalculatorPageView calculator={calculator} locale={validLocale} />;
}
