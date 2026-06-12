import type { Metadata } from "next";
import PrivacyPolicyPage from "../../../privacy-policy/page";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "Privacy Policy - DTECALC",
    seoDescription:
      "Review the DTECALC privacy policy for the free online calculator platform operated by DONTTEMO Studio.",
    path: "/privacy-policy",
    locale,
  });
}

export default async function LocalePrivacyPolicyPage({
  params,
}: LocalePageProps) {
  await validateLocaleParam(params);

  return <PrivacyPolicyPage />;
}
