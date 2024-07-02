import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, db, facebookProvider, googleProvider } from '../firebase'
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";

// Login with Credentials
export async function loginWithCredentials(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user
  } catch (e) {
    console.error(e);
    return {error: e.message }
  }
}

// Register with credentials
export async function registerWithCredentials(email, password, name) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    const usersCollection = collection(db, 'users')
    await setDoc(doc(usersCollection, user.uid), {
      id: user.uid,
      firstName: name,
      lastName: "", 
      email: user.email,
      picture: "",
      telephone: "",
      userTastes: "",
      isAdmin: false
    })

    return user
  } catch (e) {
    console.error(e)
    return null
  }
}

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const additionalInfo = getAdditionalUserInfo(result)
  
    const usersCollection = collection(db, 'users')

    if (additionalInfo.isNewUser === true) {
      await setDoc(doc(usersCollection, result.user.uid), {
        firstName: additionalInfo.profile.given_name,
        lastName: additionalInfo.profile.family_name,
        email: result.user.email,
        picture: result.user.photoURL,
        telephone: result.user.phoneNumber,
        userTastes: "",
        isAdmin: false
      })
    } else {
      await updateDoc(doc(usersCollection, result.user.uid), {
        firstName: additionalInfo.profile.given_name,
        lastName: additionalInfo.profile.family_name,
        email: result.user.email,
        picture: result.user.photoURL,
        telephone: result.user.phoneNumber,
      })
    }
  
    return result.user
  } catch (e) {
    console.error(e)
    return null
  }}

// Sign in with Facebook
export async function signInWithFacebook() {
  const result = await signInWithPopup(auth, facebookProvider)
  const additionalInfo = getAdditionalUserInfo(result)

  const usersCollection = collection(db, 'users')
  if (additionalInfo.isNewUser === true) {
    await setDoc(doc(usersCollection, result.user.uid), {
      firstName: additionalInfo.profile.first_name,
      lastName: additionalInfo.profile.last_name,
      email: result.user.email,
      picture: result.user.photoURL,
      telephone: result.user.phoneNumber,
      userTastes: "",
      isAdmin: false
    })
  } else {
    await updateDoc(doc(usersCollection, result.user.uid), {
      firstName: additionalInfo.profile.first_name,
      lastName: additionalInfo.profile.last_name,
      email: result.user.email,
      picture: result.user.photoURL,
      telephone: result.user.phoneNumber,
    })
  }

  return result.user
}

// Log Out
export async function logOut() {
  await signOut(auth)
 }