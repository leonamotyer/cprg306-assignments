'use client';
import Item from './item';

export default function ItemList({ items, onSelect, sortBy }) {
  // Sort items first
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  // Group items based on sort type
  const groupedItems = sortedItems.reduce((acc, item) => {
    let groupKey;
    
    if (sortBy === 'name') {
      groupKey = item.name[0].toUpperCase();
    } else {
      groupKey = item.category;
    }

    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});

  // Sort group headers alphabetically
  const sortedGroups = Object.keys(groupedItems).sort();

  // Define dynamic header styles
  const getHeaderStyle = () => ({
    backgroundColor: '#FFD700',
    color: 'black',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    margin: '1rem 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: sortBy === 'category' ? 'capitalize' : 'none'
  });

  return (
    <div>
      {sortedGroups.map(group => (
        <div key={group}>
          <h2 style={getHeaderStyle()}>
            {sortBy === 'name' ? `${group}` : group.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <ul>
            {groupedItems[group].map(item => (
              <Item
                key={item.id}
                {...item}
                onSelect={() => onSelect(item.name)}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}