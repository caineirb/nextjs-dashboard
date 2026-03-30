import Link from 'next/link';

export default function GioGay() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
      <div className="flex w-full max-w-3xl flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/70 p-10 text-center shadow-xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Bayot</h1>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-sky-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-sky-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
