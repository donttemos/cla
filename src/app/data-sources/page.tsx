import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Data Sources - DTECALC",
  seoDescription: "View the primary data sources, academic references, and standards used to build DTECALC tools.",
  path: "/data-sources",
});

export default function DataSourcesPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            Last Updated: June 12, 2026
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-4xl mx-auto">
            Data Sources & References
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans font-light mt-4">
            The foundation of our calculators relies on verified and recognized standards.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      <section className="cv-container py-24">
        <div className="max-w-3xl mx-auto space-y-16 font-sans text-base leading-relaxed text-zinc-600">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">Finance and Economics</h2>
            <p>Financial calculators are built upon core economic formulas published by standard accounting and banking bodies. We do not provide real-time API-driven stock or currency rates, ensuring our deterministic formulas serve as educational tools.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">Health and Fitness</h2>
            <p>Our health calculators reference formulas from organizations such as the World Health Organization (WHO) and the Centers for Disease Control and Prevention (CDC). These include the standard BMI calculation and body fat estimation models.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">AI and Technology</h2>
            <p>API pricing calculators reflect the documented pricing provided by providers like OpenAI, Anthropic, and other major LLM vendors as of their respective update dates. Always consult the official vendor documentation for up-to-the-minute enterprise pricing.</p>
          </div>

        </div>
      </section>
    </main>
  );
}