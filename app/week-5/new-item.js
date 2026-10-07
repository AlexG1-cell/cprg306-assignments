// Name: Alex Ghebremicael Assignment 5

"use client";

import { useState } from "react";

const categories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, quantity, category };

    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-5 rounded-lg bg-white p-6 shadow"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-slate-600">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          placeholder="e.g., milk, 2 L"
          className="rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-medium text-slate-600">Quantity</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="h-9 w-9 rounded-full bg-teal-600 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            -
          </button>
          <span className="w-8 text-center text-xl font-semibold text-slate-800">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="h-9 w-9 rounded-full bg-teal-600 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="category"
          className="text-sm font-medium text-slate-600"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"
        >
          {categories.map((c) => (
            <option key={c} value={c.toLowerCase()}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-md bg-teal-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-teal-700"
      >
        Add Item
      </button>
    </form>
  );
}
