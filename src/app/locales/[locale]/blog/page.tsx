import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components";
import { getAllCategoriesByLocale, getBlogPostsByLocale } from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { validateLocaleParam, type LocalePageProps } from "../_locale";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await validateLocaleParam(params);

  return buildPageMetadata({
    seoTitle: "SEO Blog - Calculator Guides and Formula Explainers",
    seoDescription:
      "Read DTECALC guides for calculators, formulas, pricing, finance, health, AI costs, and practical examples.",
    path: "/blog",
    locale,
  });
}

export default async function LocaleBlogPage({ params }: LocalePageProps) {
  const locale = await validateLocaleParam(params);
  const dictionary = getDictionary(locale);
  const categories = getAllCategoriesByLocale(locale);
  const posts = getBlogPostsByLocale(locale);
  const topicGroups = [
    { title: dictionary.pages.blog.financeGuides, slug: "finance" },
    { title: dictionary.pages.blog.healthGuides, slug: "health" },
    { title: dictionary.pages.blog.aiCostGuides, slug: "ai" },
    { title: dictionary.pages.blog.businessConversionGuides, slug: "business" },
    { title: dictionary.pages.blog.mathGuides, slug: "math" },
  ];

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow={dictionary.pages.blog.eyebrow}
        title={dictionary.pages.blog.title}
        description={dictionary.pages.blog.description}
      />
      <div className="grid gap-8">
        {topicGroups.map((group) => {
          const groupPosts = posts.filter((post) => post.categorySlug === group.slug);
          const category = categories.find((candidate) => candidate.slug === group.slug);

          return groupPosts.length > 0 ? (
            <section key={group.slug}>
              <SectionHeader
                eyebrow={category?.name}
                title={group.title}
                description={category?.description}
              />
              <div className="grid gap-4 md:grid-cols-2">
                {groupPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/${locale}/blog/${post.slug}`}
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
