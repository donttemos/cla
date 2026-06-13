import type { MetadataRoute } from "next";
import {
  getAllCalculators,
  getAllCategories,
  SITE_URL,
  getBlogPostsByLocale,
} from "@/lib/content";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  addLocaleToPathname,
  type Locale,
} from "@/lib/i18n";
import { buildLanguageAlternates } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/calculators",
  "/contact",
  "/disclaimer",
  "/privacy-policy",
  "/terms",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const allPosts = await getBlogPostsByLocale(DEFAULT_LOCALE as Locale);
  const blogPostSlugs = new Set(allPosts.filter((post) => post.published).map((post) => post.slug));
  const categories = await getAllCategories();
  const calculators = await getAllCalculators();

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.flatMap((path) =>
      buildLocalizedEntries(path === "" ? "/" : path, {
        lastModified: now,
        changeFrequency: path === "" ? "daily" : "monthly",
        priority: path === "" ? 1 : 0.7,
      }),
    ),
    ...categories.flatMap((category) =>
      buildLocalizedEntries(`/category/${category.slug}`, {
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      }),
    ),
    ...calculators.flatMap((calculator) =>
      buildLocalizedEntries(`/${calculator.slug}`, {
        lastModified: now,
        changeFrequency: "weekly",
        priority: calculator.featured ? 0.9 : 0.75,
      }),
    ),
    ...Array.from(blogPostSlugs).flatMap((slug) =>
      buildLocalizedEntries(`/blog/${slug}`, {
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      }),
    ),
  ];

  return routes;
}

function buildLocalizedEntries(
  path: `/${string}`,
  metadata: Pick<
    MetadataRoute.Sitemap[number],
    "lastModified" | "changeFrequency" | "priority"
  >,
): MetadataRoute.Sitemap {
  return SUPPORTED_LOCALES.map((locale) => ({
    url: buildUrl(path, locale),
    ...metadata,
    alternates: {
      languages: buildLanguageAlternates(path),
    },
  }));
}

function buildUrl(path: `/${string}`, locale: Locale): string {
  return new URL(addLocaleToPathname(path, locale), SITE_URL).toString();
}
