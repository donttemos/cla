import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { SITE_NAME } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `Admin Panel - ${SITE_NAME} Management Workspace`,
  seoDescription: "Functional Calcverse admin workspace for calculator, blog, and category management.",
  path: "/admin",
});

export default function AdminPage() {
  return (
    <main className="overflow-hidden bg-zinc-50/30 min-h-screen">
      <section className="border-b border-zinc-100 bg-white py-16 sm:py-20">
        <div className="cv-container">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded bg-zinc-100 px-2 py-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
              Live Workspace
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-zinc-950 sm:text-6xl">
              Admin Panel
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-500">
              Manage your calculator library, categories, and blog posts. All changes are persisted to the database and reflected across the site.
            </p>
          </div>
        </div>
      </section>

      <section className="cv-container py-14">
        <AdminDashboard />
      </section>
    </main>
  );
}
