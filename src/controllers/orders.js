import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { nanoid } from "nanoid";

export async function createOrder({ date, user, items, totalPrice }) {
  // Logic to create an order
  const orderCollections = collection(db, 'orders')

  const orderDoc = await addDoc(orderCollections, {
    id: nanoid(),
    date,
    user,
    items,
    totalPrice,
  })

  return orderDoc.id
}