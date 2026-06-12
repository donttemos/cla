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
    seoTitle: `${calculator.name} FAQ - Frequently Asked Questions`,
    seoDescription: `Find answers to common questions about the ${calculator.name}. Learn how to troubleshoot inputs and understand edge cases.`,
    path: `/${calculator.slug}/faq`,
  });
}

export default async function CalculatorFaqPage({ params }: CalculatorSubPageProps) {
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
        <span className="text-slate-900">FAQ</span>
      </nav>

      <SectionHeader
        eyebrow="FAQ"
        title={`${calculator.name} Questions Answered`}
        description="Troubleshooting and common inquiries."
      />

      <article className="mt-12 max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {calculator.faq.map((item) => (
            <div key={item.question} className="cv-surface p-6">
              <h3 className="text-lg font-semibold text-slate-950 mb-3">{item.question}</h3>
              <p className="text-base leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="pt-12 flex justify-center">
          <Link href={`/${calculator.slug}`} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
            Return to Calculator
          </Link>
        </div>
      </article>
    </main>
  );
}