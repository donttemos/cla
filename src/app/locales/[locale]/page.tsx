import type { Metadata } from "next";
import { HomePageView } from "@/components/HomePageView";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "./_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "DTECALC - 500+ Free Online Calculators",
    seoDescription:
      "Calculate loans, taxes, BMI, age, dates, percentages and more with free online calculators from DTECALC.",
    path: "/",
    locale,
  });
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const locale = await validateLocaleParam(params);

  return <HomePageView locale={locale} />;
}
