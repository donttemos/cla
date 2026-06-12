import type { Metadata } from "next";
import AboutPage from "../../../about/page";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "About DTECALC - Free Online Calculators",
    seoDescription:
      "Learn about DTECALC, a fast, easy, and free online calculator library from DONTTEMO Studio.",
    path: "/about",
    locale,
  });
}

export default async function LocaleAboutPage({ params }: LocalePageProps) {
  await validateLocaleParam(params);

  return <AboutPage />;
}
