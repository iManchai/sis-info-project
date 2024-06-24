import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from '../firebase'
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

// Login with Credentials
export async function loginWithCredentials(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user
  } catch (e) {
    console.error(e);
    return null
  }
}

// Register with credentials
export async function registerWithCredentials(email, password) {
  try {
    console.log(email, password);
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (e) {
    console.error(e)
    return null
  }
}

  // Sign in with Google
export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider)
  const additionalInfo = getAdditionalUserInfo(result)

  console.log(result)
  console.log(additionalInfo)

    const usersCollection = collection(db, 'users')
    await setDoc(doc(usersCollection, result.user.uid), {
      firstName: additionalInfo.profile.givenName,
      lastName: additionalInfo.profile.familyName,
      email: result.user.email,
      picture: result.user.photoURL,
      telephone: result.user.phoneNumber,
      userTastes: ""
    })
    return result.user
  }

// Log Out
export async function logOut() {
  await signOut(auth)
 }