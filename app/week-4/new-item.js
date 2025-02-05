"use client";
import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity(prev => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  return (
    <form className="space-y-4 text-yellow-500">
      {/* Item Name */}
      <div>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-800/80 border border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity <= 1}
          className="p-2 w-10 h-10 flex items-center justify-center bg-gray-800/80 rounded-lg border border-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-500/10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        </button>

        <span className="text-2xl font-bold w-12 text-center">{quantity}</span>

        <button
          type="button"
          onClick={increment}
          disabled={quantity >= 20}
          className="p-2 w-10 h-10 flex items-center justify-center bg-gray-800/80 rounded-lg border border-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-500/10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      </div>

      {/* Category Select */}
      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-800/80 border border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-yellow-500/80 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all"
      >
        Add Item
      </button>
    </form>
  );
}