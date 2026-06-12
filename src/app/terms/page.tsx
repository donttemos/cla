import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Terms of Service - DTECALC",
  seoDescription: "Review the DTECALC terms of service for the free online calculator platform operated by DONTTEMO Studio.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            Last Updated: June 1, 2026
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-4xl mx-auto">
            Terms of Service
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans font-light mt-4">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of DTECALC and related services operated by DONTTEMO Studio (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p className="max-w-2xl text-base text-zinc-500 mt-4">
            By accessing or using the Service, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Content Section */}
      <section className="cv-container py-24">
        <div className="max-w-3xl mx-auto space-y-16 font-sans text-base leading-relaxed text-zinc-600">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">1. Eligibility</h2>
            <p>You must be at least 16 years old or the age of majority in your jurisdiction to use the Service.</p>
            <p>By using the Service, you represent that you meet these requirements.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">2. Use of the Service</h2>
            <p>You may use the Service for lawful personal or business purposes.</p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Violate applicable laws or regulations</li>
              <li>Interfere with the operation of the Service</li>
              <li>Attempt unauthorized access to systems or accounts</li>
              <li>Distribute malware or harmful code</li>
              <li>Abuse, scrape, or overload the Service</li>
              <li>Use the Service for fraudulent activities</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">3. Accounts</h2>
            <p>Certain features may require account registration.</p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Maintaining account security</li>
              <li>Protecting login credentials</li>
              <li>Activities occurring under your account</li>
            </ul>
            <p>You must notify us promptly of any unauthorized account use.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">4. Intellectual Property</h2>
            <p>All content, software, branding, logos, designs, and materials provided through the Service are owned by DONTTEMO Studio or its licensors.</p>
            <p>No ownership rights are transferred to users.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">5. Calculator Results</h2>
            <p>The calculators and tools provided by the Service are for informational and educational purposes only.</p>
            <p>While we strive for accuracy, we do not guarantee that calculations, estimates, or generated results are error-free, complete, or suitable for any particular purpose.</p>
            <p>Users are responsible for independently verifying results before relying upon them.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">6. User Content</h2>
            <p>If you submit content through the Service, you retain ownership of that content.</p>
            <p>You grant us a limited, non-exclusive license to process, store, and display such content solely for the operation of the Service.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">7. Third-Party Services</h2>
            <p>The Service may contain links to or integrations with third-party services.</p>
            <p>We are not responsible for the content, policies, or practices of third-party websites or services.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">8. Disclaimer of Warranties</h2>
            <p className="uppercase text-zinc-800">THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.</p>
            <p className="uppercase text-zinc-800">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">9. Limitation of Liability</h2>
            <p className="uppercase text-zinc-800">TO THE MAXIMUM EXTENT PERMITTED BY LAW, DONTTEMO STUDIO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO THE USE OF THE SERVICE.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">10. Suspension and Termination</h2>
            <p>We may suspend or terminate access to the Service at any time if:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>You violate these Terms</li>
              <li>Your activities create security risks</li>
              <li>Required by law</li>
              <li>Necessary to protect the Service or users</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Hong Kong SAR, China.</p>
            <p>Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Hong Kong SAR, China.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">12. Changes to These Terms</h2>
            <p>We may modify these Terms at any time.</p>
            <p>Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.</p>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-200">
            <h2 className="text-2xl font-serif text-zinc-950 tracking-tight">13. Contact Information</h2>
            <p className="font-bold text-zinc-900">DONTTEMO Studio</p>
            <p>Email: <a href="mailto:support@donttemo.com" className="text-zinc-950 hover:underline underline-offset-4 decoration-zinc-400 transition-colors">support@donttemo.com</a></p>
          </div>

        </div>
      </section>
    </main>
  );
}
