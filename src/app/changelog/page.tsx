import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getAllCalculators } from "@/lib/content";
import { LocalizedLink as Link } from "@/components";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Changelog - DTECALC",
  seoDescription: "View the recent updates, new calculators, and improvements made to the DTECALC platform.",
  path: "/changelog",
});

export default async function ChangelogPage() {
  const allCalculators = await getAllCalculators();
  const calculators = allCalculators.filter(c => c.versionHistory && c.versionHistory.length > 0);
  
  return (
    <main className="overflow-hidden">
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            Platform Updates
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-4xl mx-auto">
            Changelog
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans font-light mt-4">
            Stay up to date with new features, bug fixes, and calculation engine updates.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      <section className="cv-container py-24">
        <div className="max-w-3xl mx-auto space-y-16 font-sans text-base leading-relaxed text-zinc-600">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">Platform Updates</h2>
            <div className="mt-8 border-l-2 border-zinc-200 pl-6 space-y-12">
              
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-zinc-900 ring-4 ring-white"></div>
                <h3 className="font-semibold text-zinc-950">E-E-A-T & Trust Enhancements</h3>
                <time className="text-sm text-zinc-500">June 12, 2026</time>
                <p className="mt-3">Added Editorial Policy, Calculation Methodology, and Data Sources pages. Enhanced calculator detail pages with version history and verified reviewer data to boost platform transparency.</p>
              </div>

            </div>
          </div>
          
          <hr className="border-zinc-200" />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">Calculator Updates</h2>
            <p>Below are recent updates to specific tools across the platform:</p>
            
            <div className="space-y-6 mt-8">
              {calculators.slice(0, 5).map(calc => (
                <div key={calc.slug} className="rounded-lg border border-zinc-200 p-6">
                  <Link href={`/${calc.slug}`} className="text-lg font-semibold text-zinc-950 hover:text-sky-600 transition">
                    {calc.name}
                  </Link>
                  <div className="mt-4 space-y-3">
                    {calc.versionHistory?.map(history => (
                      <div key={history.version} className="text-sm">
                        <span className="font-medium text-zinc-800">v{history.version} ({history.date}):</span> {history.changes}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </section>
    </main>
  );
}