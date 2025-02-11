"use client";
import { useState } from 'react';

// Global category array
const categories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState(categories[0].toLowerCase()); // Default to first category

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);
    alert(`Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory(categories[0].toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-black/70 p-8 rounded-lg shadow-lg border border-yellow-500/30">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-yellow-500">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 bg-gray-800 text-yellow-500 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Quantity Field */}
      <div className="space-y-2">
        <label htmlFor="quantity" className="block text-sm font-medium text-yellow-500">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="99"
          required
          className="w-full p-2 bg-gray-800 text-yellow-500 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Category Field */}
      <div className="space-y-2">
        <label htmlFor="category" className="block text-sm font-medium text-yellow-500">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-gray-800 text-yellow-500 border border-yellow-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Add Item
      </button>
    </form>
  );
}