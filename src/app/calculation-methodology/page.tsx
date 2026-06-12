import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Calculation Methodology - DTECALC",
  seoDescription: "Understand how DTECALC ensures calculation accuracy, handles edge cases, and sources standard formulas.",
  path: "/calculation-methodology",
});

export default function MethodologyPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            Last Updated: June 12, 2026
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-4xl mx-auto">
            Calculation Methodology
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans font-light mt-4">
            How we calculate results, handle precision, and maintain reliable formulas.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      <section className="cv-container py-24">
        <div className="max-w-3xl mx-auto space-y-16 font-sans text-base leading-relaxed text-zinc-600">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">1. Standard Formulas</h2>
            <p>Our calculators utilize widely accepted industry-standard formulas. For example, financial calculators use standard amortization and compound interest formulas, while health calculators rely on recognized formulas such as the Mifflin-St Jeor equation for BMR.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">2. Precision and Rounding</h2>
            <p>Internally, all math is calculated with high floating-point precision to minimize rounding errors. Results displayed to the user are rounded only at the final step, typically to two decimal places for currency, or standard logical decimals for percentages.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">3. Edge Case Handling</h2>
            <p>We rigorously test our calculators against edge cases such as zero values, extreme limits, and invalid inputs. We strive to provide meaningful error messages and prevent misleading outputs.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">4. Continuous Testing</h2>
            <p>Our calculation engine is backed by automated tests that verify results against known inputs and expected outputs, ensuring continued reliability as the platform grows.</p>
          </div>

        </div>
      </section>
    </main>
  );
}