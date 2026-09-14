import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        This project collects the weekly assignments for CPRG 306. Each
        week&apos;s work lives in its own folder under{" "}
        <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
          app/
        </code>
        .
      </p>
      <Link
        href="/week-2"
        className="rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Week 2 Assignment
      </Link>
    </main>
  );
}
