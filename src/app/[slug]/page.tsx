import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorPageView } from "@/components/CalculatorPageView";
import { getAllCalculators, getCalculatorBySlug, SITE_URL } from "@/lib/content";
import { buildCalculatorMetadata, buildCalculatorJsonLd } from "@/lib/seo";

type CalculatorPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllCalculators().map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({
  params,
}: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return {};
  }

  const metadata = buildCalculatorMetadata(calculator);
  const canonicalUrl = `${SITE_URL}/${calculator.slug}`;

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalUrl,
    },
    openGraph: {
      ...metadata.openGraph,
      url: canonicalUrl,
    },
  };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  const jsonLd = buildCalculatorJsonLd(calculator);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorPageView calculator={calculator} />
    </>
  );
}
