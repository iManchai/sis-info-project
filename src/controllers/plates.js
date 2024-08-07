import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getPlates() {
  const plateCollections = collection(db, 'plates');

  const plateDocs = await getDocs(plateCollections);
  const plates = plateDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))

  return plates
}

export async function getPlate(id) {
  const plateCollections = collection(db, 'plates');

  const plateDocs = await getDoc(doc(plateCollections, id));
  const plate = plateDocs.data()

  return plate
}

export async function createPlate({name, type, description, price, image} ) {
  const plateCollections = collection(db, 'plates');

  const plateDoc = await addDoc(plateCollections, {
    name,
    type,
    description,
    price,
    image
  });
  
  const id = plateDoc.id

  return id
}

export async function updatePlate(id, { name, type, description, price, image} ) {
  const plateCollections = collection(db, 'plates');

  await updateDoc(doc(plateCollections, id), {
    name,
    type,
    description,
    price,
    image
  });
}

export async function deletePlate(id) {
  const plateCollections = collection(db, 'plates');

  await deleteDoc(doc(plateCollections, id));
}