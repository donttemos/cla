import type { ReactNode } from "react";
import { LocalizedLink as Link } from "./LocalizedLink";

export type CategoryCardProps = {
  name: string;
  description: string;
  href: string;
  calculatorCount?: number;
  icon?: ReactNode;
  featuredCalculators?: string[];
};

export function CategoryCard({
  name,
  description,
  href,
  calculatorCount,
  icon,
  featuredCalculators = [],
}: CategoryCardProps) {
  return (
    <article className="cv-surface group relative overflow-hidden p-6 hover:bg-zinc-50 transition-all duration-300">
      <Link aria-label={`Browse ${name} calculators`} className="absolute inset-0 z-10 rounded-[var(--radius)]" href={href} />

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-white font-mono text-sm font-bold text-zinc-950 shadow-sm transition-all group-hover:scale-110 group-hover:border-zinc-300">
          {icon ?? name.slice(0, 2).toUpperCase()}
        </div>
        <div className="pt-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-serif text-xl font-bold text-zinc-950 tracking-tight">{name}</h3>
            {typeof calculatorCount === "number" ? (
              <span className="cv-badge">
                {calculatorCount} Systems
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 font-sans">{description}</p>
        </div>
      </div>

      {featuredCalculators.length > 0 ? (
        <div className="mt-6 border-t border-zinc-200 pt-4">
          <ul className="flex flex-wrap gap-2" aria-label={`${name} examples`}>
            {featuredCalculators.slice(0, 3).map((calculator) => (
              <li key={calculator} className="rounded-sm border border-zinc-200 bg-white px-2 py-1 font-mono text-xs font-bold text-zinc-500 transition-colors group-hover:border-zinc-300 group-hover:text-zinc-700">
                {calculator}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
