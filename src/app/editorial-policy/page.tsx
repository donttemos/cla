import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Editorial Policy - DTECALC",
  seoDescription: "Learn about the DTECALC editorial policy, our commitment to accuracy, and how we review our calculator content.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            Last Updated: June 12, 2026
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-4xl mx-auto">
            Editorial Policy
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans font-light mt-4">
            Our commitment to accuracy, transparency, and high-quality educational content.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      <section className="cv-container py-24">
        <div className="max-w-3xl mx-auto space-y-16 font-sans text-base leading-relaxed text-zinc-600">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">1. Core Principles</h2>
            <p>At DTECALC, we build tools designed to provide quick, reliable, and mathematically sound answers to everyday questions. Our editorial process is guided by accuracy, clarity, and user-centric design.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">2. Accuracy and Verification</h2>
            <p>Every calculator goes through a strict verification process:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Formulas are sourced from recognized mathematical, financial, or scientific standards.</li>
              <li>Calculations are tested against known edge cases and benchmark tools.</li>
              <li>Explanations are reviewed to ensure they correctly describe the underlying math.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">3. Independence and Objectivity</h2>
            <p>Our tools are designed to be completely objective. We do not bias our calculators to favor any specific financial product, health diet, or service. Our primary goal is to empower users to make their own informed decisions.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">4. Regular Updates</h2>
            <p>We actively monitor our tools for potential improvements. If tax brackets, standard formulas, or common practices change, we update our calculators and reflect these modifications in our version history.</p>
          </div>

        </div>
      </section>
    </main>
  );
}