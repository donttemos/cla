import Link from "next/link";

export default function NotFound() {
  return (
    <main className="cv-container py-12">
      <p className="text-sm font-bold uppercase tracking-wide text-sky-800">
        404
      </p>
      <h1 className="mt-3 text-4xl text-slate-950">Page not found</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        The DTECALC page you are looking for is not available yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-sky-900"
      >
        Back to homepage
      </Link>
    </main>
  );
}
