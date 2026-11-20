// Name: Alex Ghebremicael Assignment 9

"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // nobody is signed in, so I never render the list, even if the URL is typed in directly
  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-100 px-6 py-24 text-center">
        <p className="text-slate-700">
          Please sign in to view the shopping list.
        </p>
        <Link href="/week-9" className="font-semibold text-teal-700 hover:underline">
          Go to the login page
        </Link>
      </main>
    );
  }

  // I add the new item to the end of the list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // I clean up the item name so the meal API can use it
  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0] // drops the size, e.g. "milk, 4 L" becomes "milk"
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}️]/gu, "") // drops emojis
      .trim();

    setSelectedItemName(cleanName);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16">
      <h1 className="mb-6 text-center text-3xl font-semibold text-slate-800">
        Shopping List
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex w-full max-w-md flex-col items-center gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
