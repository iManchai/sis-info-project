import "./LoginForm.css";
import Mysvg from "../../assets/Logo.svg";
import IconButton from "@mui/material/IconButton";
import Back from "../../assets/Vector.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, Typography } from "@mui/material"
import LogginButtons from "../../components/LoginButtons";
import { useState } from "react";
import { loginWithCredentials } from "../../controllers/auth";

export default function LoginForm({ navigate }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function getCustomErrorMessage(errorCode) {
    // Step 2: Use a switch statement or an object mapping for known error codes
    switch (errorCode) {
      case 'Firebase: Error (auth/invalid-email).':
        return 'Correo ingresado no valido';
      case 'Firebase: Error (auth/user-disabled).':
        return 'El usuario ha sido desabilitado. Contacte asistencia tecnica';
      case 'Firebase: Error (auth/user-not-found).':
        return 'Ningun usuario encontrado con este correo';
      case 'Firebase: Error (auth/wrong-password).':
        return 'Contraseña incorrecta. Intentar de nuevo';
      case 'Firebase: Error (auth/invalid-credential).':
        return 'Credenciales invalidas. Intentar de nuevo';
      case 'Firebase: Error (auth/missing-password).':
        return 'Contraseña faltante. Intentar de nuevo';
      // Add more cases as needed
      default:
        // Step 3: Return a default message if the error code is not matched
        return 'Un error inesperado ha ocurrido. Intentar de nuevo';
    }
  }

  async function handleSubmit() {
    try {
      const result = await loginWithCredentials(email, password)
      if (result.error) {
        setIsError(true)
        setErrorMessage(getCustomErrorMessage(result.error))
      } else {
        setIsError(false);
        setErrorMessage('')
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage('Error al iniciar sesión')
    }
  }


  return (
    <div className="container">
      <aside className="Image">
        <img src={Mysvg} alt="" />
      </aside>

      <aside className="Form">
        <div className="Inicio_sesion">
          <IconButton onClick={() => navigate('/')}>
            <img src={Back} alt="" />
          </IconButton>
          <h1>Iniciar sesion</h1>
        </div>

        <div className="Inputs">
          <TextField
            className="extendedField"
            id="outlined-email"
            label="Email"
            type="email"
            autoComplete="current-email"
            onChange={(e) => {
              setEmail(e.target.value)
              setIsError(false)
            }}
            value={email}
            error={isError}
            helperText={isError ? errorMessage : ''}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            className="extendedField"
            onChange={(e) => {
              setPassword(e.target.value)
              setIsError(false)
            }}
            value={password}
            error={isError}
          />

          <Button className="Button" variant="contained"
            onClick={handleSubmit}
          >
            <h2>Iniciar sesión</h2>
          </Button>

          <Typography sx={{
            color: 'black',
            fontSize: '1rem',
            textAlign: 'center',
            marginTop: '0.5rem'
          }}>
          {"Aun no tienes cuenta?" + " "}
          <Link href="/register">Haz click aqui para registrase</Link>
          </Typography>
         
        

          <div className="divider"></div>

          
          <LogginButtons></LogginButtons>      

        </div>


        
      </aside>
      
    </div>
  );
};


