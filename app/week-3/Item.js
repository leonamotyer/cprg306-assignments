"use client";
import { useState } from 'react';

const itemStyle = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid #FFD700',
  },
  textGroup: {
    flex: 1,
    marginRight: '1rem',
  },
  name: {
    fontSize: '1.2rem',
    marginBottom: '0.3rem',
  },
  details: {
    display: 'flex',
    gap: '1rem',
    color: '#FFD700',
    opacity: 0.8,
  },
  quantityControls: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  button: {
    width: '32px',
    height: '32px',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #FFD700',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#FFD700',
  },
  quantityDisplay: {
    minWidth: '20px',
    textAlign: 'center',
  },
};

function QuantityControls({ initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantity = (action) => {
    if (action === '+') {
      if (quantity >= 20) {
        alert('Maximum quantity is 20');
      } else {
        setQuantity(q => q + 1);
      }
    } else if (action === '-') {
      if (quantity <= 0) {
        alert('Minimum quantity is 0');
      } else {
        setQuantity(q => q - 1);
      }
    } else {
      setQuantity(0);
    }
  };

  return (
    <div style={itemStyle.quantityControls}>
      <button 
        style={itemStyle.button}
        onClick={() => handleQuantity('-')}
        aria-label="Decrease quantity"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14" />
        </svg>
      </button>

      <span style={itemStyle.quantityDisplay}>{quantity}</span>

      <button 
        style={itemStyle.button}
        onClick={() => handleQuantity('+')}
        aria-label="Increase quantity"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <button 
        style={itemStyle.button}
        onClick={() => handleQuantity('clear')}
        aria-label="Clear quantity"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function Item({ name, category, initialQuantity }) {
  return (
    <li style={itemStyle.container}>
      <div style={itemStyle.textGroup}>
        <div style={itemStyle.name}>{name}</div>
        <div style={itemStyle.details}>
          <span>Category: {category}</span>
        </div>
      </div>
      <QuantityControls initialQuantity={initialQuantity} />
    </li>
  );
}