import type { Metadata } from "next";
import TermsPage from "../../../terms/page";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "Terms of Service - DTECALC",
    seoDescription:
      "Review the DTECALC terms of service for the free online calculator platform operated by DONTTEMO Studio.",
    path: "/terms",
    locale,
  });
}

export default async function LocaleTermsPage({ params }: LocalePageProps) {
  await validateLocaleParam(params);

  return <TermsPage />;
}
