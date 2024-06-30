import { ref } from "firebase/database";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { nanoid } from "nanoid";

export async function uploadImage(data) {
  try {
    const result = await uploadBytes(ref(storage, `images/${nanoid()}`), data);
    return result.metadata.fullPath;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export async function getImageUrl(path) {
  try {
    const url = await getDownloadURL(ref(storage, path));
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    throw error; // Rethrow or handle as needed
  }
}