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



export default function Item({ name, category, initialQuantity }) {
  return (
    <li style={itemStyle.container}>
      <div style={itemStyle.textGroup}>
        <div style={itemStyle.name}>{name}</div>
        <div style={itemStyle.details}>
          <span>Category: {category}</span>
        </div>
      </div>

    </li>
  );

}

