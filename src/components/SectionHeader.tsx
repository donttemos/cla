import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-l-2 border-zinc-950 pl-6">
      <div className="max-w-3xl">
        {eyebrow ? (
          <div className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="font-serif text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 font-sans text-base leading-relaxed text-zinc-600">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
