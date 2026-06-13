import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getBlogPostsByLocale } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { SectionHeader } from "@/components";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "SEO Blog - Calculator Guides and Formula Explainers",
  seoDescription: "Read DTECALC guides for calculators, formulas, pricing, finance, health, AI costs, and practical examples.",
  path: "/blog",
});

export default async function BlogPage() {
  const categories = await getAllCategories();
  const allPosts = await getBlogPostsByLocale(DEFAULT_LOCALE as Locale);
  const topicGroups = [
    { title: "Finance Guides", slug: "finance" },
    { title: "Health Guides", slug: "health" },
    { title: "AI Cost Guides", slug: "ai" },
    { title: "Business and Conversion Guides", slug: "business" },
    { title: "Math Guides", slug: "math" },
  ];

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow="Calculator blog"
        title="Calculator guides and explainers"
        description="Learn formulas, compare calculator types, and understand finance, health, math, and AI cost topics with practical examples."
      />
      <div className="grid gap-8">
        {topicGroups.map((group) => {
          const posts = allPosts.filter((post) => post.categorySlug === group.slug);
          const category = categories.find((candidate) => candidate.slug === group.slug);

          return posts.length > 0 ? (
            <section key={group.slug}>
              <SectionHeader
                eyebrow={category?.name}
                title={group.title}
                description={category?.description}
              />
              <div className="grid gap-4 md:grid-cols-2">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    prefetch={false}
                    className="cv-surface block p-5 transition hover:border-sky-300"
                  >
                    <h2 className="text-xl text-slate-950">{post.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null;
        })}
      </div>
    </main>
  );
}
