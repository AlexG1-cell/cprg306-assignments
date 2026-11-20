// Name: Alex Ghebremicael Assignment 9

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex cursor-pointer items-center justify-between border-b border-slate-200 py-2 hover:bg-teal-50"
    >
      <span className="text-slate-800">{name}</span>
      <span className="text-sm text-teal-600">
        {quantity} &middot; {category}
      </span>
    </li>
  );
}
