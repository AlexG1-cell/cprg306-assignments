// Name: Alex Ghebremicael Assignment 3

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link
        href="/week-2"
        className="rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Week 2 Assignment
      </Link>
      <Link
        href="/week-3"
        className="rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Week 3 Assignment
      </Link>
    </main>
  );
}
