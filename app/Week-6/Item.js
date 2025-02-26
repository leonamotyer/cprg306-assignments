export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">
      <div className="flex justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <div className="text-sm">
            Buy {quantity} in <span className="capitalize">{category}</span>
          </div>
        </div>
      </div>
    </li>
  );
}