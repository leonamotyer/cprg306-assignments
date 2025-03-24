import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// Get items for a specific user
export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");
  const querySnapshot = await getDocs(itemsRef);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

// Add an item for a specific user
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}