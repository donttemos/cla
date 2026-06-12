import type { Metadata } from "next";
import DisclaimerPage from "../../../disclaimer/page";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "Disclaimer - DTECALC",
    seoDescription:
      "Review the DTECALC disclaimer for the free online calculator platform operated by DONTTEMO Studio.",
    path: "/disclaimer",
    locale,
  });
}

export default async function LocaleDisclaimerPage({
  params,
}: LocalePageProps) {
  await validateLocaleParam(params);

  return <DisclaimerPage />;
}
