import { Box, Button } from "@mui/material";
import ProfileFormField from "../ProfileFormField/ProfileFormField";
import { useTheme } from "@emotion/react";
import { changeProfile } from "../../controllers/auth";
import { useContext, useState } from "react";
import { auth,db, facebookProvider, googleProvider  } from "../../firebase";
import ProfileSection from "../ProfileSection/ProfileSection";
import { UserContext, useUser } from "../../context/user";
import { useEffect } from "react";
import { addDoc, collection, doc, getDoc, or, setDoc, updateDoc } from "firebase/firestore";

//cambiar perfil

export default function ProfileForm() {

  const theme = useTheme()

  const [name, setNameProf]=useState('')
  const [surname, setSurnameProf]=useState('')
  const [email, setEmailProf]=useState('')
  const [telefono, setTelefonoProf]=useState('')
  const [gustospersonales, setTastesProf]=useState('')

  
  const [isNameValidProf, setIsNameValidProf]=useState(true)
  const [isSurnameValidProf, setIsSurnameValidProf]=useState(true)
  const [isEmailValidProf, setIsEmailValidProf]=useState(true)
  const[isPhoneNumberValidProf, setIsPhoneNumberValidProf]=useState(true)
  const[isTastesValidProf, setIsTastesValidProf]=useState(true)

  function checkNameValidProf(name) {
    return /^[a-zA-Z\s]*$/.test(name)
  }

  function checkSurnameValidProf(surname) {
    return /^[a-zA-Z\s]*$/.test(surname)
  }


  function checkEmailValidProf(email) {
  return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)
  }

  function checkTastesValidProf(gustospersonales){
    if (/^(atún|salmon|tofu|pulpo|camarón|proteína)[\s,]+(arroz|quinoa|vegetales)[\s,]+(pepino|zanahoria|cebolla|edamame|wakame)[\s,]*(semillas de sesamo)?[\s,]*(poke bowl|poke burrito)$/i.test(gustospersonales)){
    return true;
  }else{
    return false; 
    }}


  function checkPhoneValidProf(phoneNumber){
  return phoneNumber.length>=7;
  }



  async function handleSubmitProf(name, surname, email, telefono, gustospersonales) {
    if (!checkNameValidProf(name)) {
      setIsNameValidProf(false)
    }

    if (!checkSurnameValidProf(surname)){
      setIsSurnameValidProf(false)
    }

    if (!checkEmailValidProf(email)) {
      setIsEmailValidProf(false)
    }

    if (checkNameValidProf(name) && checkSurnameValidProf(surname) && checkEmailValidProf(email)) {
      await changeProfile(name, surname, email, telefono, gustospersonales)
    }
  }

  function ProfileSectionMod(nombre, apellido, email, telefono) {

    const user = useUser()
  
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center',
  
        [theme.breakpoints.up('md')]: {
          flexBasis: '30%',
        }
      }}>
          <Avatar sx={{
  
            height: '200px',
            width: '200px',
          }}
          src={user.photoURL}
          />
  
          <Typography fontSize={"1.25rem"}>{nombre}</Typography> 
          <Typography fontSize={"1.25rem"}>{apellido}</Typography>
          <Typography fontSize={"1.25rem"}>{email}</Typography> 
          <Typography fontSize={"1.25rem"}>{telefono}</Typography>
      </Box>
    );
  }


   async function fetchUser(){
    const user=useUser()
    const[currentUser, setCurrentUser]=useState(null)
  
    useEffect(()=>{
      const fetchUserData=async()=>{
        if(user){
          const userData=await getUser(user.uid)
          setCurrentUser(userData)
        }
      }
      fetchUserData()
    },[user])
    return currentUser
  }



  return (
    <Box sx={{
      width: '100%',
      display: 'flex',  
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField label="Nombre" 
      type="text"
      required={true}
      value={name}
      setValue={setNameProf}
      helperText='Nombre invalido. Ejemplo: John'
      isValid={isNameValidProf}
      setIsValidProf={setIsNameValidProf}
      />


      </Box>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField label="Apellido" 
      type="text"
      required={true}
      value={surname}
      setValue={setSurnameProf}
      helperText='Apellido invalido. Ejemplo: Gonzalez.'
      isValid={isSurnameValidProf}
      setIsValidProf={setIsSurnameValidProf}
      />


      </Box>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField 
      label="Correo electronico" 
      type="email"
      required={true}
      value={email}
      setValue={setEmailProf}
      helperText='Correo invalido, Ejemplo: janedoe@gmail.com.'
      isValid={isEmailValidProf}
      setIsValidProf={setIsEmailValidProf}
      REQUIRED
      />


      </Box>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField 
      label="Telefono" 
      type="text"
      required={true}
      value={telefono}
      setValue={setTelefonoProf}
      helperText="Telefono invalido. Ejemplo: 02172222."
      isValid={isPhoneNumberValidProf}
      setIsValidProf={setIsPhoneNumberValidProf}
      />
      </Box>
      <Box sx={{
        flexBasis: '100%',
      }}>
      <ProfileFormField 
      label="Ubicacion" 
      type="text"/>
      </Box>
      <Box sx={{
        flexBasis: '100%',
      }}>
      <ProfileFormField label="Gustos personales" 
      type="text" 
      multiline={true} 
      maxRows={4}
      value={gustospersonales}
      setValue={setTastesProf}
      helperText="Introduce un gusto personal valido. Ejemplo: Poke Bowl o Poke Burrito."
      isValid={isTastesValidProf}
      setIsValidProf={setIsTastesValidProf}
      /> 
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',

        [theme.breakpoints.up('md')]: {
          justifyContent: 'flex-end',
        
        }
      }}>
      <Button sx={{
        alignItems: 'center',
        padding: '0.8rem 5rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#30AF4C',

        '&:hover': {
          backgroundColor: '#30AF4C',
        }
      }}
      onClick={async()=>{
        const uid=auth.currentUser.uid;
        const userUID=auth.currentUser.uid
        const userCollection=collection(db, 'users');
        const userDocRef=doc(userCollection, userUID);
        await handleSubmitProf(name, surname, email, telefono, gustospersonales); 
        console.log(auth.currentUser)
        const currentUsername=auth.currentUser.displayName[0]
        const currentUsersurname=auth.currentUser.displayName[1]
        await ProfileSection()
      } 
      }>
        Guardar
      </Button>
      </Box>
    </Box>
  );
}