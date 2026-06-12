import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCalculators, getCalculatorBySlug, SITE_URL } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

type CalculatorSubPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllCalculators().map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({
  params,
}: CalculatorSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) return {};

  return buildPageMetadata({
    seoTitle: `How to use the ${calculator.name} - Complete Guide`,
    seoDescription: `Read our comprehensive guide on using the ${calculator.name}. Learn how it works, what inputs are required, and how to interpret the results.`,
    path: `/${calculator.slug}/guide`,
  });
}

export default async function CalculatorGuidePage({ params }: CalculatorSubPageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) notFound();

  return (
    <main className="cv-container py-12">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href={`/${calculator.slug}`}>{calculator.name}</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-900">Guide</span>
      </nav>

      <SectionHeader
        eyebrow="Guide"
        title={`How to use the ${calculator.name}`}
        description={`A complete walkthrough for the ${calculator.name}.`}
      />

      <article className="mt-12 max-w-3xl space-y-8">
        <section className="cv-surface p-8">
          <h2 className="text-2xl font-serif text-slate-950 mb-4">Overview</h2>
          <p className="text-base leading-8 text-slate-600">{calculator.whatIs}</p>
        </section>

        <section className="cv-surface p-8">
          <h2 className="text-2xl font-serif text-slate-950 mb-4">Step-by-Step Instructions</h2>
          <ol className="list-decimal space-y-4 pl-5 text-base leading-8 text-slate-600">
            {calculator.howToSteps.map((step) => (
              <li key={step} className="pl-2">{step}</li>
            ))}
          </ol>
        </section>

        <div className="pt-8">
          <Link href={`/${calculator.slug}`} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
            Open the {calculator.name}
          </Link>
        </div>
      </article>
    </main>
  );
}