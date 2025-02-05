// Creating the functional component named Item
import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center border-b border-gray-700 p-4 bg-black text-white">
            <div className="text-lg font-bold text-yellow-400">{name}</div>
            <div className="flex space-x-4">
                <span className="text-gray-400">Qty: {quantity}</span>
                <span className="text-gray-500 italic">Category: {category}</span>
            </div>
        </li>
    );
};

export default Item;
