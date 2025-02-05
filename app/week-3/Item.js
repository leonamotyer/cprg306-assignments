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
const Item = ({ name, quantity, category }) => {
    return (
        <li style={style.itemStyle}>
            <div className="text-lg font-bold text-yellow-400">{name}</div>
            <div className="flex space-x-4">
                <span className="text-gray-400">Qty: {quantity}</span>
                <span className="text-gray-500 italic">Category: {category}</span>
            </div>
        </li>
    );
};

