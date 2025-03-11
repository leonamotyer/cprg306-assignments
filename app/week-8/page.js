"use client";
import { useState } from 'react';
import items from './items.json';
import ItemList from './item-list'; 
import MealIdea from './meal-ideas';

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemClick = (itemName) => {
    const cleanedName = itemName.split(',')[0].trim().replace(/[^a-zA-Z ]/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <div style={style.container}>
      <div style={style.contentWrapper}>
        <h1 style={style.heading}>Shopping List</h1>
        
        <div style={style.pageLayout}>
          {/* Updated Shopping List Side */}
          <div style={style.itemsContainer}>
            <h2 style={style.subheading}>Shopping Items</h2>
            <ItemList 
              items={items} 
              onSelect={handleItemClick} 
            />
          </div>
          
          {/* Meal Ideas Side remains the same */}
          <div style={style.mealContainer}>
            <h2 style={style.subheading}>Meal Ideas</h2>
            {selectedItemName ? (
              <MealIdea ingredient={selectedItemName} />
            ) : (
              <p style={style.placeholderText}>Select an item to see meal ideas</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem 1rem',
    backgroundImage: 'url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  contentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    padding: '2rem',
    width: '100%',
    maxWidth: '1200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    border: '2px solid #FFD700',
  },
  pageLayout: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#FFD700',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  },
  subheading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#FFD700',
    textAlign: 'center',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flex: '1',
    minWidth: '300px',
  },
  mealContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '300px',
  },
  clickableItem: {
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      transform: 'scale(1.02)',
    }
  },
  instructionText: {
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  placeholderText: {
    color: '#FFD700',
    textAlign: 'center',
    fontStyle: 'italic',
  }
};