import { LocalizedLink as Link } from "./LocalizedLink";

export type PopularSearch = {
  label: string;
  href: string;
};

export type CalculatorSearchProps = {
  action?: string;
  placeholder?: string;
  popularSearches?: PopularSearch[];
};

export function CalculatorSearch({
  action = "/calculators",
  placeholder = "Search directory (e.g., mortgage, bmi, ai cost)",
  popularSearches = [],
}: CalculatorSearchProps) {
  return (
    <div className="w-full">
      <form action={action} className="relative flex items-center" role="search">
        <label className="sr-only" htmlFor="calculator-search">
          Search calculators
        </label>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
          </svg>
        </div>
        <input
          id="calculator-search"
          name="q"
          type="search"
          autoComplete="off"
          placeholder={placeholder}
          className="h-14 w-full rounded-full border border-zinc-800 bg-zinc-900/50 pl-12 pr-32 text-sm font-medium text-white shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-0 backdrop-blur-md"
        />
        <div className="absolute right-1.5 inset-y-1.5">
          <button
            type="submit"
            className="h-full px-6 rounded-full bg-white text-xs font-bold uppercase tracking-widest text-black hover:bg-zinc-200 transition-colors"
          >
            Find
          </button>
        </div>
      </form>

      {popularSearches.length > 0 ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {popularSearches.map((item) => (
            <Link
              key={item.href}
              className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-600 transition-colors hover:text-white hover:bg-zinc-800/50 px-3 py-1 rounded-full border border-transparent hover:border-zinc-800"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
