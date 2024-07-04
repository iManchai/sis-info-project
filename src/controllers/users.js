import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export default async function getUser(id) {
  const usersCollection = collection(db, 'users')
  const userDoc = await getDoc(doc(usersCollection, id))
  const user = userDoc.data()

  return user
}