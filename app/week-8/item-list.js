'use client';
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onSelect }) {
  const [sortBy, setSortBy] = useState('name');

  // Create sorted copy of items
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  // Group sorted items
  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {/* ... button section remains the same ... */}

      {sortBy === 'group' ? (
        Object.keys(groupedItems)
          .sort()
          .map(category => (
            <div key={category}>
              <h2 className="text-xl font-bold capitalize mt-4">{category}</h2>
              <ul>
                {groupedItems[category].map(item => (
                  <Item 
                    key={item.id} 
                    {...item} 
                    onSelect={() => onSelect(item.name)}
                  />
                ))}
              </ul>
            </div>
          ))
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item 
              key={item.id} 
              {...item} 
              onSelect={() => onSelect(item.name)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}