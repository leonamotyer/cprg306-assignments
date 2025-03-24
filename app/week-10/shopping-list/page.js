'use client';

import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingList() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  // Load items from Firestore
  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };

  // Add a new item to Firestore
  const handleAddItem = async () => {
    if (newItemName.trim() === "") return;

    const newItem = { name: newItemName, createdAt: new Date() };
    const newItemId = await addItem(user.uid, newItem);

    setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
    setNewItemName("");
  };

  // Load items when the component mounts
  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <div style={style.container}>
      <h1 style={style.heading}>Shopping List</h1>
      <div style={style.listContainer}>
        <ul style={style.list}>
          {items.map((item) => (
            <li key={item.id} style={style.listItem}>
              {item.name}
            </li>
          ))}
        </ul>
        <div style={style.addItemContainer}>
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add a new item"
            style={style.input}
          />
          <button onClick={handleAddItem} style={style.addButton}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2rem",
    backgroundImage: "url(https://cdn.wallpapersafari.com/63/84/mJg9fA.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
    color: "#FFD700",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#FFD700",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  },
  listContainer: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    border: "2px solid #FFD700",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "1rem",
  },
  listItem: {
    padding: "0.75rem",
    borderBottom: "1px solid #FFD700",
    color: "#FFD700",
    fontSize: "1.2rem",
  },
  addItemContainer: {
    display: "flex",
    marginTop: "1rem",
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    marginRight: "0.5rem",
    border: "1px solid #FFD700",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#FFD700",
  },
  addButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.2s",
  },
};