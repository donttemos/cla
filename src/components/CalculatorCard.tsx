import type { ReactNode } from "react";
import { LocalizedLink as Link } from "./LocalizedLink";

export type CalculatorCardProps = {
  title: string;
  description: string;
  href: string;
  category?: string;
  badge?: string;
  meta?: string;
  icon?: ReactNode;
};

export function CalculatorCard({
  title,
  description,
  href,
  category,
  badge,
  meta,
  icon,
}: CalculatorCardProps) {
  return (
    <article className="group cv-surface relative flex flex-col p-6 hover:bg-zinc-50 transition-all duration-300">
      <Link aria-label={`Open ${title}`} className="absolute inset-0 rounded-[var(--radius)] z-10" href={href} />    

      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white font-mono text-xs font-bold text-zinc-950 shadow-sm transition-all group-hover:scale-110 group-hover:border-zinc-300">
          {icon ?? title.slice(0, 2).toUpperCase()}
        </div>
        {badge ? (
          <span className="cv-badge">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="relative flex flex-1 flex-col">
        {category ? <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">{category}</p> : null}
        <h3 className="font-serif text-lg font-bold text-zinc-950 tracking-tight">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600 font-sans">{description}</p>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-200">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950 group-hover:text-zinc-600 transition-colors">Compute</span>        
          {meta ? (
            <span className="font-mono text-xs font-bold text-zinc-500">{meta}</span>
          ) : (
            <svg className="h-4 w-4 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:text-zinc-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          )}
        </div>
      </div>
    </article>
  );
}
