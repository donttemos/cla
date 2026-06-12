import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Disclaimer - DTECALC",
  seoDescription: "Review the DTECALC disclaimer for the free online calculator platform operated by DONTTEMO Studio.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <main className="overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            Last Updated: June 1, 2026
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-4xl mx-auto">
            Disclaimer
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans font-light mt-4">
            The information, calculators, and tools provided by DONTTEMO Studio through the DTECALC website (the &quot;Service&quot;) are for general informational and educational purposes only.
          </p>
          <p className="max-w-2xl text-base text-zinc-500 mt-4">
            While we strive to provide accurate and reliable tools, all utilities and outputs are provided &quot;as is&quot; and without warranties of any kind.
          </p>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Content Section */}
      <section className="cv-container py-24">
        <div className="max-w-3xl mx-auto space-y-16 font-sans text-base leading-relaxed text-zinc-600">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">1. Accuracy of Calculations</h2>
            <p>The calculators are designed to provide estimates, conversions, and general guidance. Results may not be exact and should not be relied upon as a substitute for professional advice. Users are responsible for independently verifying all results before making decisions based on them.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">2. No Professional Advice</h2>
            <p>The Service does not provide professional, financial, medical, legal, or any other advisory services. Any calculations, conversions, or AI-generated suggestions are for informational purposes only. Users should consult qualified professionals for decisions requiring expertise.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">3. AI-Generated Content</h2>
            <p>Some tools utilize AI-powered models to generate text, explanations, or suggestions. These outputs may be incomplete, inaccurate, or inappropriate for specific use cases. Reliance on AI-generated content is solely at your own risk.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">4. External Links</h2>
            <p>The Service may include links to third-party websites. We do not review, endorse, or guarantee the accuracy or reliability of external content. Your interactions with third-party sites are at your own risk.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">5. Limitation of Liability</h2>
            <p className="uppercase text-zinc-800">DONTTEMO STUDIO SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM OR RELATED TO THE USE OF THE SERVICE. THIS INCLUDES, BUT IS NOT LIMITED TO, ERRORS IN CALCULATIONS, LOST DATA, OR RELIANCE ON INFORMATION PROVIDED BY OUR TOOLS.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">6. User Responsibility</h2>
            <p>Users agree to use calculators and tools responsibly. Any actions, decisions, or consequences resulting from the use of the Service are the sole responsibility of the user.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">7. Changes to Disclaimer</h2>
            <p>We may update this Disclaimer at any time without prior notice. Continued use of the Service constitutes acceptance of any updates.</p>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-200">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">8. Contact Information</h2>
            <p>For questions or concerns regarding this Disclaimer, please contact:</p>
            <p className="font-bold text-zinc-900 mt-4">DONTTEMO Studio</p>
            <ul className="space-y-2 mt-2">
              <li>Email: <a href="mailto:support@donttemo.com" className="text-zinc-950 hover:underline underline-offset-4 decoration-zinc-400 transition-colors">support@donttemo.com</a></li>
              <li>Website: <a href="https://dtecalc.com" target="_blank" rel="noopener noreferrer" className="text-zinc-950 hover:underline underline-offset-4 decoration-zinc-400 transition-colors">https://dtecalc.com</a></li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
