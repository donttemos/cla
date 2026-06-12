import type { Metadata } from "next";
import { SectionHeader } from "@/components";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Privacy Policy - DTECALC",
  seoDescription: "Review the DTECALC privacy policy for the free online calculator platform operated by DONTTEMO Studio.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />

      <div className="cv-container relative z-10 max-w-4xl">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last Updated: June 1, 2026"
        />

        <article className="cv-surface p-8 sm:p-12 mt-12 leading-relaxed text-zinc-300">
          <p className="text-sm sm:text-base text-zinc-400 mb-8 leading-relaxed italic">
            DONTTEMO Studio (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates DTECALC and related calculator services (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our Service.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            1. Information We Collect
          </h2>
          
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-zinc-400 mt-6 mb-2">
            Information You Provide
          </h3>
          <p className="text-sm mb-4">
            We may collect information that you voluntarily provide, including:
          </p>
          <ul className="list-disc pl-5 text-sm mb-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Account credentials</li>
            <li>Messages sent through contact forms</li>
            <li>Other information you choose to provide</li>
          </ul>

          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-zinc-400 mt-6 mb-2">
            Google Sign-In Information
          </h3>
          <p className="text-sm mb-4">
            If you choose to sign in using Google, we may receive:
          </p>
          <ul className="list-disc pl-5 text-sm mb-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Profile picture</li>
          </ul>
          <p className="text-sm mb-6">
            We use this information solely for authentication and account management.
          </p>

          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-zinc-400 mt-6 mb-2">
            Automatically Collected Information
          </h3>
          <p className="text-sm mb-4">
            When you access the Service, we may automatically collect:
          </p>
          <ul className="list-disc pl-5 text-sm mb-6 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Referring pages</li>
            <li>Usage statistics</li>
            <li>Error logs and diagnostic data</li>
          </ul>

          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-zinc-400 mt-6 mb-2">
            Cookies and Similar Technologies
          </h3>
          <p className="text-sm mb-4">
            We use cookies and similar technologies for:
          </p>
          <ul className="list-disc pl-5 text-sm mb-6 space-y-1">
            <li>Authentication and security</li>
            <li>Remembering preferences</li>
            <li>Analytics and performance measurement</li>
            <li>Advertising and personalization</li>
          </ul>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            2. How We Use Information
          </h2>
          <p className="text-sm mb-4">
            We use collected information to:
          </p>
          <ul className="list-disc pl-5 text-sm mb-6 space-y-1">
            <li>Provide and maintain the Service</li>
            <li>Improve website performance and user experience</li>
            <li>Authenticate users</li>
            <li>Respond to support requests</li>
            <li>Prevent fraud and abuse</li>
            <li>Monitor website usage</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            3. Analytics and Advertising
          </h2>
          <p className="text-sm mb-4">
            We may use third-party services including:
          </p>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
            <li>Google Analytics</li>
            <li>Google AdSense</li>
            <li>Microsoft Clarity</li>
          </ul>
          <p className="text-sm mb-4">
            These providers may use cookies and similar technologies to collect information about your interactions with the Service.
          </p>
          <p className="text-sm mb-6 font-semibold text-white">
            We do not sell your personal information to third parties.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            4. User Content and Calculator Data
          </h2>
          <p className="text-sm mb-4">
            Most calculations are processed automatically. Depending on the specific calculator, information entered into calculation forms may be temporarily processed to provide results.
          </p>
          <p className="text-sm mb-6">
            We do not intentionally store calculation data longer than necessary to provide the requested functionality.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            5. Data Retention
          </h2>
          <p className="text-sm mb-4">
            We retain personal information only for as long as necessary to:
          </p>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
            <li>Provide the Service</li>
            <li>Meet legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce agreements</li>
          </ul>
          <p className="text-sm mb-6">
            When no longer required, information is deleted or anonymized.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            6. International Data Transfers
          </h2>
          <p className="text-sm mb-6">
            Our Service is available worldwide. Information may be processed in countries outside your jurisdiction. We take reasonable measures to ensure appropriate protection of personal information.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            7. Data Security
          </h2>
          <p className="text-sm mb-6">
            We implement reasonable technical and organizational safeguards to protect personal information. However, no method of transmission or storage is completely secure.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            8. Your Rights
          </h2>
          <p className="text-sm mb-4">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of information</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="text-sm mb-6">
            To exercise these rights, contact us using the information below.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            9. Children&apos;s Privacy
          </h2>
          <p className="text-sm mb-6">
            The Service is not intended for individuals under 16 years of age. We do not knowingly collect personal information from children.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            10. Account Deletion
          </h2>
          <p className="text-sm mb-6">
            Users may request account deletion by contacting us. Upon verification, we will delete or anonymize applicable personal information unless retention is required by law.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            11. Changes to This Policy
          </h2>
          <p className="text-sm mb-6">
            We may update this Privacy Policy from time to time. Changes become effective when posted on this page.
          </p>

          <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">
            12. Contact Us
          </h2>
          <p className="text-sm font-semibold text-white mb-2">
            DONTTEMO Studio
          </p>
          <p className="text-sm text-zinc-400">
            Email: <a href="mailto:support@donttemo.com" className="text-white hover:underline">support@donttemo.com</a>
          </p>
        </article>
      </div>
    </main>
  );
}
