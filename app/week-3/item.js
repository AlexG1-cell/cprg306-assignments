// Name: Alex Ghebremicael Assignment 3

export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between border-b border-slate-200 py-2">
      <span className="text-slate-800">{name}</span>
      <span className="text-sm text-teal-600">
        {quantity} &middot; {category}
      </span>
    </li>
  );
}
