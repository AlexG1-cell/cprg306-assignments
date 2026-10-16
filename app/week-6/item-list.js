// Name: Alex Ghebremicael Assignment 6

"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  function buttonStyle(value) {
    return sortBy === value
      ? "rounded-md bg-teal-600 px-4 py-2 font-semibold text-white"
      : "rounded-md bg-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-300";
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-center gap-3">
        <span className="text-sm font-medium text-slate-600">Sort by:</span>
        <button onClick={() => setSortBy("name")} className={buttonStyle("name")}>
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={buttonStyle("category")}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={buttonStyle("grouped")}
        >
          Grouped
        </button>
      </div>

      {sortBy === "grouped" ? (
        <div className="rounded-lg bg-white p-4 shadow">
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category} className="mb-4 last:mb-0">
                <h2 className="text-lg font-semibold capitalize text-teal-700">
                  {category}
                </h2>
                <ul className="divide-y divide-slate-200">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-lg bg-white p-4 shadow">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
