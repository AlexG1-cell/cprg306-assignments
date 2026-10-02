// Name: Alex Ghebremicael Assignment 4

import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-slate-100 px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-800">New Item</h1>
      <NewItem />
    </main>
  );
}
