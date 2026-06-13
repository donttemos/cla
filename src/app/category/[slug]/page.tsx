import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorCard, SectionHeader, LocalizedLink as Link } from "@/components";
import { CategorySeoContent } from "@/components/CategorySeoContent";
import {
  getAllCategories,
  getCalculatorsByCategorySlug,
  getCategoryBySlug,
  SITE_URL,
  getBlogPostsByLocale,
} from "@/lib/content";
import { buildCategoryMetadata } from "@/lib/seo";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  return category ? buildCategoryMetadata(category) : {};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const calculators = await getCalculatorsByCategorySlug(category.slug);
  const relatedGuides = (await getBlogPostsByLocale(DEFAULT_LOCALE as Locale)).filter((post) => post.categorySlug === category.slug && post.published).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Calculators`,
    description: category.description,
    url: `${SITE_URL}/category/${category.slug}`,
  };

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow="Category"
        title={`${category.name} Calculators`}
        description={category.description}
      />
      <div className="cv-grid mt-12">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.slug}
            title={calculator.name}
            description={calculator.description}
            href={`/${calculator.slug}`}
            badge={calculator.featured ? "Popular" : undefined}
          />
        ))}
      </div>

      <CategorySeoContent slug={category.slug} name={category.name} />

      {relatedGuides.length > 0 && (
        <section className="mt-16 border-t border-zinc-200 pt-16">
          <SectionHeader
            eyebrow="Learn More"
            title={`Related ${category.name} Guides`}
            description={`Deepen your understanding with our expert articles on ${category.name.toLowerCase()} topics.`}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {relatedGuides.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="cv-surface group block p-8 transition-all hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-zinc-950 group-hover:text-sky-700 transition-colors mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-sky-600">
                  Read Guide &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
