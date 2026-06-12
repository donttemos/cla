import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/content";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteDescription =
  "Calculate loans, taxes, BMI, age, dates, percentages and more with free online calculators from DTECALC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteDescription,
  applicationName: SITE_NAME,
  keywords: ["calculator", "online calculator", "loan calculator", "tax calculator", "BMI calculator", "age calculator", "date calculator", "percentage calculator", "free calculator", "DTECALC"],
  icons: {
    icon: "/dtecalc.png",
    apple: "/dtecalc.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: siteDescription,
  };

  return (
    <html lang="en" className="notranslate" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8323934943624774"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-zinc-950 selection:bg-zinc-950 selection:text-white min-h-screen flex flex-col`}>
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_top_left,rgba(39,39,42,0.04),transparent_32rem)]"></div>
        <SiteHeader />
        <div className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
