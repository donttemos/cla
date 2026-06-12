import type { Metadata } from "next";
import ContactPage from "../../../contact/page";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "Contact DTECALC - Support & Feedback",
    seoDescription:
      "Contact the DTECALC team about loan formulas, BMI calculations, token estimation, partnership requests, and bug reports.",
    path: "/contact",
    locale,
  });
}

export default async function LocaleContactPage({ params }: LocalePageProps) {
  await validateLocaleParam(params);

  return <ContactPage />;
}
