import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm, SectionHeader } from "@/components";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Contact DTECALC - Support & Feedback",
  seoDescription: "Contact the DTECALC team about loan formulas, BMI calculations, token estimation, partnership requests, and bug reports.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />

      <div className="cv-container relative z-10">
        <SectionHeader
          eyebrow="Connect"
          title="Get in Touch"
          description="Have questions about our calculation formulas or wish to suggest a new utility? Our team of engineers and financial specialists is ready to listen."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Contact Form Section */}
          <section className="lg:col-span-7 cv-surface p-8">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white mb-2">
              Send a Message
            </h2>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
              Fill out the form below. For calculator bug reports, select the specific calculator to route your query directly to our domain experts.
            </p>
            <ContactForm />
          </section>

          {/* Contact Details & SLA Section */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            {/* Support Channels Card */}
            <article className="cv-surface p-6">
              <div className="h-10 w-10 rounded-lg bg-zinc-800/40 border border-zinc-700/50 flex items-center justify-center text-white mb-4">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Direct Communication</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Skip the form and email us directly for general, security, or advertising inquiries.
              </p>
              <dl className="space-y-3 font-sans text-sm">
                <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                  <dt className="text-zinc-500">General Support</dt>
                  <dd className="font-medium text-white hover:text-zinc-300 transition-colors">
                    <a href="mailto:support@dtecalc.com">support@dtecalc.com</a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-zinc-800/50 pb-2">
                  <dt className="text-zinc-500">Partnerships</dt>
                  <dd className="font-medium text-white hover:text-zinc-300 transition-colors">
                    <a href="mailto:partnerships@dtecalc.com">partnerships@dtecalc.com</a>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-500">Response Guarantee</dt>
                  <dd className="font-mono text-xs font-bold text-zinc-300">Within 24 Hours</dd>
                </div>
              </dl>
            </article>

            {/* Verification & Math Audit Card */}
            <article className="cv-surface p-6">
              <div className="h-10 w-10 rounded-lg bg-zinc-800/40 border border-zinc-700/50 flex items-center justify-center text-white mb-4">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Math & Formula Audit</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Accuracy is our absolute priority. If you believe a calculator results in an incorrect figure or employs a stale algorithm, please specify the formula notes. All submissions are cross-referenced against official financial codes and clinical guidelines before deployment.
              </p>
            </article>

            {/* Developer Integration Card */}
            <article className="cv-surface p-6">
              <div className="h-10 w-10 rounded-lg bg-zinc-800/40 border border-zinc-700/50 flex items-center justify-center text-white mb-4">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">AI & LLM Integration</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Are you building custom LLM agents that need accurate calculator math? 
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                DTECALC exposes machine-readable endpoints so AI systems can query exact formulas and input parameters.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/llms.txt"
                  className="cv-badge !no-underline hover:bg-zinc-700 hover:text-white transition"
                >
                  llms.txt
                </Link>
                <Link
                  href="/api/ai-context"
                  className="cv-badge !no-underline hover:bg-zinc-700 hover:text-white transition"
                >
                  AI API Context
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </main>
  );
}
