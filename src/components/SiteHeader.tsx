"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, getDictionary, stripLocaleFromPathname } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocalizedLink as Link } from "./LocalizedLink";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteHeaderProps = {
  navItems?: NavItem[];
};

export function SiteHeader({
  navItems,
}: SiteHeaderProps) {
  const pathname = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = stripLocaleFromPathname(pathname);
  const currentLocale = locale || DEFAULT_LOCALE;
  const dictionary = getDictionary(currentLocale);

  const defaultNavItems: NavItem[] = [
    { label: dictionary.home.allCalculators, href: "/calculators" },
    { label: dictionary.pages.category.eyebrow, href: "/category/finance" },
    { label: "Blog", href: "/blog" },
  ];
  
  const items = navItems || defaultNavItems;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">
      <div className="cv-container flex h-16 items-center justify-between gap-2 sm:gap-6">
        <Link className="flex shrink-0 items-center gap-2 sm:gap-3 font-bold text-zinc-950 transition-transform active:scale-95" href="/" aria-label="DTECALC home">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image src="/dtecalc.png" alt="DTECALC Logo" width={32} height={32} className="object-cover" />
          </div>
          <span className="text-base sm:text-lg font-medium tracking-tighter" translate="no">DTECALC</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex rounded-full border border-zinc-200 bg-zinc-50/80 p-1">
          {items.map((item) => (
            <Link
              key={item.href}
              className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-500 transition-all hover:text-zinc-950 hover:bg-zinc-200/50 active:bg-zinc-200"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            className="hidden sm:inline-flex cv-button-primary !rounded-full !px-4 !py-1.5 sm:!px-5 sm:!py-2 text-xs sm:text-sm"
            href="/calculators"
          >
            {dictionary.nav.calculators}
          </Link>
          <div className="w-[100px] sm:w-auto">
            <LanguageSwitcher currentLocale={currentLocale} className="w-full" />
          </div>
          <button
            className="md:hidden flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 transition-colors border border-zinc-200"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav
          id="mobile-primary-navigation"
          aria-label="Mobile primary navigation"
          className="border-t border-zinc-200 bg-white shadow-sm md:hidden"
        >
          <div className="cv-container flex flex-col gap-2 py-3">
            {items.map((item) => (
              <Link
                key={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 active:bg-zinc-200"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
