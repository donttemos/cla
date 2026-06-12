import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "About DTECALC - Free Online Calculators",
  seoDescription: "Learn about DTECALC, a fast, easy, and free online calculator library from DONTTEMO Studio.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="cv-container py-12 sm:py-16">
      <article className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
          DONTTEMO Studio
        </p>
        <h1 className="text-4xl text-white sm:text-5xl">About DTECALC</h1>

        <div className="mt-7 space-y-5 text-lg leading-8 text-zinc-200">
          <p>
            Welcome to DTECALC - your go-to place for fast, easy, and free
            online calculators. Whether you&apos;re figuring out a loan,
            converting units, checking your BMI, or doing math homework,
            we&apos;ve got you covered.
          </p>

          <p>
            We&apos;re building a growing library of calculators - and our goal
            is to have 500+ tools available for everyone, all in one place. No
            downloads, no complicated setup, just open your browser and start
            calculating.
          </p>

          <p>
            Every calculator comes with a simple explanation so you know exactly
            what the numbers mean. We want our tools to be useful, easy to use,
            and actually helpful - not confusing.
          </p>

          <section
            aria-labelledby="why-dtecalc"
            className="space-y-4 rounded-lg border border-amber-300/30 bg-amber-100 p-6 text-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
          >
            <h2 id="why-dtecalc" className="text-2xl text-zinc-950">
              Why you&apos;ll like DTECALC:
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-base leading-7">
              <li>Free and easy - no software or signup needed</li>
              <li>Fast and mobile-friendly, works on any device</li>
              <li>Clear results with short explanations</li>
              <li>Hundreds of calculators, more added regularly</li>
              <li>Built with love by DONTTEMO Studio</li>
            </ul>
          </section>

          <p>
            We made DTECALC because we believe everyone should have access to
            handy, reliable calculators online. Whether you&apos;re a student, a
            professional, or just curious, we&apos;re here to make your life a
            little easier.
          </p>

          <p>Thanks for stopping by - happy calculating!</p>
        </div>
      </article>
    </main>
  );
}
