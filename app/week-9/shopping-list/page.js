"use client";
import { useState } from 'react';
import items from './items.json';
import ItemList from './item-list'; 
import MealIdea from './meal-ideas';

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");
  const [sortBy, setSortBy] = useState("name"); 
  
  const handleItemClick = (itemName) => {
    const cleanedName = itemName.split(',')[0].trim().replace(/[^a-zA-Z ]/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <div style={style.container}>
      <div style={style.contentWrapper}>
        <h1 style={style.heading}>Shopping List</h1>
        
        <div style={style.pageLayout}>
          {/* Shopping List Side */}
          <div style={style.itemsContainer}>
            <h2 style={style.subheading}>Shopping Items</h2>
            
            {/* Sort buttons */}
            <div style={style.sortButtons}>
              <button 
                style={{
                  ...style.sortButton,
                  backgroundColor: sortBy === "name" ? "#FFD700" : "transparent",
                  color: sortBy === "name" ? "black" : "#FFD700"
                }} 
                onClick={() => setSortBy("name")}
              >
                Sort by Name
              </button>
              <button 
                style={{
                  ...style.sortButton,
                  backgroundColor: sortBy === "category" ? "#FFD700" : "transparent",
                  color: sortBy === "category" ? "black" : "#FFD700"
                }} 
                onClick={() => setSortBy("category")}
              >
                Sort by Category
              </button>
            </div>

            <ItemList 
              items={items} 
              onSelect={handleItemClick}
              sortBy={sortBy} // Pass the sort parameter to ItemList
            />
          </div>

          {/* Meal Ideas Side */}
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
  sortButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  sortButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #FFD700',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
  },
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
