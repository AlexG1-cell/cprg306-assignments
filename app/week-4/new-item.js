// Name: Alex Ghebremicael Assignment 4

"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-6 shadow">
      <p className="text-sm font-medium text-slate-600">Quantity</p>
      <div className="flex items-center gap-4">
        <button
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
          onClick={increment}
          disabled={quantity === 20}
          className="h-9 w-9 rounded-full bg-teal-600 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          +
        </button>
      </div>
    </div>
  );
}
