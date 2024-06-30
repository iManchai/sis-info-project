import React from 'react';
import Navbar from './Navbar/Navbar';
import { useTheme } from "@emotion/react";
import {Box,Divider,Typography} from "@mui/material";
import Footer from './Footer/Footer';

const Contacto = () => {

const theme = useTheme()

return (
  <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '64px',
        padding: '3rem',
        flexGrow: 1,

      }}>
        <Typography variant="h2" sx={{
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          margin: 0,
          textTransform: 'uppercase',
          textAlign: 'center',
          
          [theme.breakpoints.up('lg')]: {
          textAlign: 'left'
          }
        }}>
          Contáctanos
        </Typography>
        <Divider/>

        <Box sx={{
          display:'flex',
          flexDirection:'Row',
          marginTop: '3rem',
          flexBasis: '100%',
          flexDirection: 'Column'
          
  

        }}>
          <Typography variant="h6" sx={{
          fontWeight: 'bold',
          margin: 0,
          textAlign: 'center',
          [theme.breakpoints.up('lg')]: {
          textAlign: 'left',
          gap:'2rem',
          }

        }}>
          Hola, te damos la bienvenida a Moloka'i. En qué podemos ayudarte?
          </Typography>
          <Typography sx={{
            fontSize: '1rem',
            marginTop: '1rem',

          }}>Nos encanta recibir de nuestros clientes todas sus dudas, comentarios y observaciones, que siempre son bien recibidos. Nos ayudan a
          asegurarnos que cada experiencia que tengas en Moloka'i se la mejor de las posibles. También puedes dejar siempre que quieras tus comentarios
          en nuestra página de Instagram.
          </Typography>
          <Typography variant="h6" sx={{
          fontWeight: 'bold',
          marginTop: '5rem',
          textAlign: 'center',
          [theme.breakpoints.up('lg')]: {
          textAlign: 'left',
          gap:'2rem',
          }

        }}>
          Envíanos un mensaje
          </Typography>
          <Typography sx={{
            fontSize: '1rem',
            marginTop: '1rem',
            color: 'gray'

          }}>Nos puedes enviar un mensaje de correo electrónico a la dirección molokaipoke@gmail.com; haremos todo los posible 
          para contestarte cuanto antes. Así mismo, puede llenar el siguiente formulario y le intentaremos responder en la brevedad 
          de lo posible!
          </Typography>
        




        </Box>
      </Box>
      <Footer/>
  </Box> 

);



}

export default Contacto;
