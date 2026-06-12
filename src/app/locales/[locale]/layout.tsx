import type { ReactNode } from "react";
import { LocaleDocumentSync } from "@/components";
import {
  generateLocaleStaticParams,
  validateLocaleParam,
  type LocalePageProps,
} from "./_locale";

type LocaleLayoutProps = LocalePageProps & {
  children: ReactNode;
};

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = await validateLocaleParam(params);

  return (
    <>
      <LocaleDocumentSync locale={locale} />
      {children}
    </>
  );
}
