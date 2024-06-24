import { Box, Button, Link, Typography } from "@mui/material"
import FormTextField from "./FormTextField"
import { useState } from "react"
import { registerWithCredentials, signInWithFacebook } from "../controllers/auth"

export default function RegisterFormField() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  function checkNameValid(name) {
    return /^[a-zA-Z\s]*$/.test(name)
  }

  function checkEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function checkPasswordValid(password) {
    if ((password.length < 7) || (!/[A-Z]/.test(password)) || (/\s/.test(password))) {
      return false;
    }

    // If all checks pass, return true
    return true;
  }

  async function handleSubmit() {
    if (!checkNameValid(name)) {
      setIsNameValid(false)
    }

    if (!checkEmailValid(email)) {
      setIsEmailValid(false)
    }

    if (!checkPasswordValid(password)) {
      setIsPasswordValid(false)
    }

    if (checkNameValid(name) && checkEmailValid(email) && checkPasswordValid(password)) {
      await registerWithCredentials(email, password, name)
    }
  }

  return (
    <Box>
      <Box sx={{
        marginTop: '1.5rem',
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
        <FormTextField 
        title="Nombre" 
        type="text" 
        required={true} 
        value={name} 
        setValue={setName} 
        helperText="Nombre invalido. Ejemplo: John"
        isValid={isNameValid}
        setIsValid={setIsNameValid}
        />

        <FormTextField 
        title="Correo" 
        type="text" 
        required={true} 
        value={email} 
        setValue={setEmail} 
        helperText="Correo invalido. Ejemplo: johndoe@gmail.com"
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        />

        <FormTextField 
        title="Contraseña" 
        type="password" 
        required={true} 
        value={password} 
        setValue={setPassword} 
        helperText="Contraseña incorrecta. Debe contener al menos 7 caracteres, 1 letra mayuscula y no espacios en blanco." 
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
        />
      </Box>

      <Button 
      variant="contained" 
      sx={{
        marginTop: '16px',
        marginBottom: '0.5rem',
        width: '100%',
        fontSize: '1.25rem',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
        height: '4rem',
        borderRadius: '12px',
      }}
      onClick={handleSubmit}
      >
        Registrarse
      </Button>

      <Typography>
        {"Ya tienes cuenta?" + " "}
        <Link href="/login">Haz click aqui para iniciar sesión</Link>
      </Typography>

    </Box>
  )
}