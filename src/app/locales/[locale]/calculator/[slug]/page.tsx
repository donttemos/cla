import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import {
  generateStaticParams as generateCalculatorStaticParams,
} from "../../../../[slug]/page";
import { getCalculatorBySlug } from "@/lib/content";
import { buildCalculatorMetadata } from "@/lib/seo";
import {
  generateLocaleStaticParams,
  validateLocale,
  type LocaleSlugPageProps,
} from "../../_locale";

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
  const calculator = getCalculatorBySlug(slug);

  return calculator ? buildCalculatorMetadata(calculator, validLocale) : {};
}

export default async function LocaleCalculatorRedirectPage({
  params,
}: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  validateLocale(locale);

  permanentRedirect(`/${locale}/${slug}`);
}
