import type { MetadataRoute } from "next";
import {
  getAllCalculators,
  getAllCategories,
  SITE_URL,
  blogPosts,
} from "@/lib/content";
import {
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogPostSlugs = new Set(blogPosts.filter((post) => post.published).map((post) => post.slug));
  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.flatMap((path) =>
      buildLocalizedEntries(path === "" ? "/" : path, {
        lastModified: now,
        changeFrequency: path === "" ? "daily" : "monthly",
        priority: path === "" ? 1 : 0.7,
      }),
    ),
    ...getAllCategories().flatMap((category) =>
      buildLocalizedEntries(`/category/${category.slug}`, {
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      }),
    ),
    ...getAllCalculators().flatMap((calculator) =>
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
