
import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import { auth, db, facebookProvider, googleProvider } from '../firebase'
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "./../context/user";
 

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
      location: "",
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
        location: "",
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
      location: "",
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

//Change profile data
//export async function 
//lo que hace set es que cambia el documento con todas las propiedades.







export async function changeProfile(nombre, apellido, correo, telefono=auth.currentUser.phoneNumber, gustospersonales=auth.currentUser.userTastes){ 
  try{
  const userUID=auth.currentUser.uid
  const userCollection=collection(db, 'users');
  const userDocRef=doc(userCollection, userUID);
  await setDoc(userDocRef,{

    firstName:nombre,
    lastName:apellido,
    email:correo,
    telephone:telefono,
    userTastes:gustospersonales},
  {merge:true});
  
  await updateProfile(auth.currentUser,{
    displayName:nombre+" "+apellido, //modificar userrrr
  })

  await updateEmail(auth.currentUser, correo)




  return true} catch (e) {
    console.error(e)
    return false;
  }

}


// Log Out
export async function logOut() {
  await signOut(auth)
 }