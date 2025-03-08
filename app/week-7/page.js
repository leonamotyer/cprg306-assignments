"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen p-8 bg-slate-950">
      <h1 className="text-4xl font-bold mb-8 text-white">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}