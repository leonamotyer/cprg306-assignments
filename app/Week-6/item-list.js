'use client';

import { useState } from 'react';
import Item from './Item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 ${sortBy === 'name' ? 'bg-blue-600' : 'bg-blue-400'} rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-600' : 'bg-blue-400'} rounded`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 ${sortBy === 'group' ? 'bg-blue-600' : 'bg-blue-400'} rounded`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === 'group' ? (
        Object.keys(groupedItems)
          .sort()
          .map(category => (
            <div key={category}>
              <h2 className="text-xl font-bold capitalize mt-4">{category}</h2>
              <ul>
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(item => (
                    <Item key={item.id} {...item} />
                  ))}
              </ul>
            </div>
          ))
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}