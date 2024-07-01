import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Box, Divider, Typography, TextField, FormGroup, Button } from "@mui/material"
import { useTheme } from '@emotion/react';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Contacto = () => {

const theme = useTheme()

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [feedback, setFeedback] = useState("");

const form = document.querySelector('form');

form.addEventListener('keypress', function (event) {
  if (KeyboardEvent.code === 13 && feedback ) {
    event.preventDefault();
    form.submit();
  }
});

const handleSubmit = (e) => {
  e.preventDefault()

  const commentsCollection = collection(db,'feedback')
  addDoc(commentsCollection, {name: nombre, email: email, feedback: feedback})
  alert("added...")

  setNombre("")
  setEmail("")
  setFeedback("")
}

return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
      }}> 
        <Navbar/>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column', 
          padding: '3rem',
          marginTop: '64px',
          flexGrow: 1, 
        }}> 
          <Typography variant='h2' sx={{
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0', 

          [theme.breakpoints.up('lg')]: {
            textAlign: 'left'
          }
          
          }}>
          Contacto
          </Typography>
          <Divider/>

          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '2rem'
          }}> 
            <Typography variant='h4' sx={{ 
              color: 'black',
              textAlign: 'left',
              fontWeight: 'bold'
            }}>
              Hola, te damos la bienvenida a Moloka’i®. ¿En qué podemos ayudarte?
            </Typography> 
            <Typography sx={{ 
              color: 'black',
              fontSize: '1.5rem'
            }}>
              Nos encanta recibir de nuestros clientes todas sus dudas, comentarios y observaciones, que siempre son bien recibidos. Nos ayudan a asegurarnos de que cada experiencia que tengas en Moloka’i sea la mejor de las posibles. También puedes dejar siempre que quieras tus comentarios en nuestra página de Instagram.
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '2rem', 
          }}>
            <Typography variant='h4' sx={{ 
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'left'

            }}> 
              Envíanos un mensaje
            </Typography>
            <Typography sx={{ 
              color: 'grey',
              fontSize: '1rem'
            }}> 
              Nos puedes enviar un mensaje de correo electrónico a la dirección <a href='molokaipoke@gmail.com'>molokaipoke@gmail.com</a> Haremos todo lo posible para contestarte cuanto antes. Así mismo, puede llenar el siguiente formulario y le intentaremos responder en la brevedad de lo posible!
            </Typography>
          </Box>
          <form onSubmit ={(e) => handleSubmit(e)} >
            <Box sx={{  
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              marginTop: '3rem',
              justifyContent: 'center'
              }}> 
              <TextField
                required 
                fullWidth
                label = 'Nombre' 
                id = 'nombre'
                name='nombre' 
                variant = 'outlined'
                onChange={(e) => 
                  setNombre(e.target.value)}
              /> 
              <TextField
                required
                fullWidth
                label = 'Correo electrónico'
                id='email'
                name='email'
                variant='outlined'
                value={email}
                onChange={(e)=>
                  setEmail(e.target.value)}
              /> 
            </Box>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              height: '217px',
              marginTop: '3rem',
              marginBottom: '3rem'
              }}>
              <TextField 
                required
                fullWidth
                label = 'Mensaje'
                id = 'feedback'
                name='feedback'
                variant='outlined'
                multiline
                rows={10}
                value={feedback}
                onChange={(e)=>
                  setFeedback(e.target.value)}
              /> 
            </Box>
          </form>
        </Box>
      <Footer/>
    </Box>
  );
};

export default Contacto;
