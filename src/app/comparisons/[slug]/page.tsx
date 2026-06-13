import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllComparisons, getComparisonBySlug } from "@/lib/seo-centers";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const all = await getAllComparisons();
  return all.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = await getComparisonBySlug(slug);
  if (!comparison) return {};

  return buildPageMetadata({
    seoTitle: comparison.seoTitle,
    seoDescription: comparison.seoDescription,
    path: `/comparisons/${comparison.slug}`,
  });
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const comparison = await getComparisonBySlug(slug);

  if (!comparison) notFound();

  // For the two parts being compared, normally we'd parse the title "A vs B"
  const [partA, partB] = comparison.title.split(" vs ");

  return (
    <main className="cv-container py-12">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href="/comparisons">Comparisons</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-900">{comparison.title}</span>
      </nav>

      <SectionHeader
        eyebrow="Comparison"
        title={comparison.title}
        description={comparison.description}
      />

      <article className="mt-12 max-w-4xl space-y-12">
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="border-b border-r border-slate-200 p-4 font-semibold w-1/3">Key Aspect</th>
                <th className="border-b border-r border-slate-200 p-4 font-semibold w-1/3">{partA || "Concept A"}</th>
                <th className="border-b border-slate-200 p-4 font-semibold w-1/3">{partB || "Concept B"}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.differences.map((diff, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                  <td className="border-r border-slate-200 p-4 font-medium text-slate-900">{diff.aspect}</td>
                  <td className="border-r border-slate-200 p-4 leading-relaxed">{diff.a}</td>
                  <td className="p-4 leading-relaxed">{diff.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="cv-surface p-8 bg-slate-50/50">
          <h2 className="text-2xl font-serif text-slate-950 mb-4">Conclusion & Takeaway</h2>
          <p className="text-base leading-8 text-slate-700">{comparison.conclusion}</p>
        </section>

        {comparison.relatedCalculators.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-slate-950 mb-6">Related Tools</h3>
            <div className="flex flex-wrap gap-4">
              {comparison.relatedCalculators.map(calcSlug => (
                <Link key={calcSlug} href={`/${calcSlug}`} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50">
                  Try the {calcSlug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}