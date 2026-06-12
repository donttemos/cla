"use client";

import type { NavItem } from "./SiteHeader";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, getDictionary, stripLocaleFromPathname } from "@/lib/i18n";
import { LocalizedLink as Link } from "./LocalizedLink";

export type FooterGroup = {
  title: string;
  links: NavItem[];
};

export type SiteFooterProps = {
  groups?: FooterGroup[];
};

export function SiteFooter({
  groups,
}: SiteFooterProps) {
  const pathname = usePathname() || "/";
  const { locale } = stripLocaleFromPathname(pathname);
  const currentLocale = locale || DEFAULT_LOCALE;
  const dictionary = getDictionary(currentLocale);

  const defaultGroups: FooterGroup[] = [
    {
      title: dictionary.footer.calculators,
      links: [
        { label: "All Calculators", href: "/calculators" },
        { label: "Finance", href: "/category/finance" },
        { label: "Health", href: "/category/health" },
        { label: "AI", href: "/category/ai" },
      ],
    },
    {
      title: dictionary.footer.resources,
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Comparisons", href: "/comparisons" },
        { label: "Formulas", href: "/formulas" },
        { label: "Examples", href: "/examples" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: "Editorial Policy", href: "/editorial-policy" },
        { label: "Methodology", href: "/calculation-methodology" },
        { label: "Data Sources", href: "/data-sources" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: dictionary.footer.privacy, href: "/privacy-policy" },
        { label: dictionary.footer.terms, href: "/terms" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  const activeGroups = groups || defaultGroups;

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 mt-auto relative overflow-hidden">
      {/* Optional fluid/wave effect background for footer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="cv-container py-16 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.5fr]">
          <div>
            <Link className="flex items-center gap-3 font-bold text-zinc-950 mb-6" href="/" aria-label="DTECALC home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden bg-white border border-zinc-200 shadow-sm">
                <Image src="/dtecalc.png" alt="DTECALC Logo" width={40} height={40} className="object-cover" />
              </div>
              <span>
                <span className="block text-lg font-serif">DTECALC</span>
                <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500">Computational Primitives</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500 font-sans">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {activeGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-950 mb-4">{group.title}</h2>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link className="block py-2 text-sm text-zinc-500 transition-colors hover:text-zinc-950" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between font-mono">
          <p>COPYRIGHT © {new Date().getFullYear()} DTECALC. {dictionary.footer.copyright.toUpperCase()}</p>
          <p>SYSTEM STATUS: <span className="text-green-600">ONLINE</span></p>
        </div>
      </div>
    </footer>
  );
}
