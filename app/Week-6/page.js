import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-slate-950">
      <h1 className="text-4xl font-bold mb-8 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}