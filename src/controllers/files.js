import { ref } from "firebase/database";
import { uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export async function uploadImage(data) {
  const result = await uploadBytes(ref(storage, "imagen"), data)

  return result.metadata.fullPath
}