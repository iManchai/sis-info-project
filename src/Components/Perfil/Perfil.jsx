import React from 'react';
import { Button, TextField, Avatar, Typography, Container, Box } from '@mui/material';
import './Perfil.css';

const Perfil = () => {
  return (
    <div className='ContainerGeneral'> 
      <div className='profileHeader'>
        <h2>PERFIL</h2>
        <hr />
      </div>
      <div className='Linea'></div>
        <div className='User-profile-info'>
          <Avatar
          className='ProfileAvatar'
          id = 'profile-avatar'
          label = 'Avatar'
          src = ''
          sx = {{width: 300, height: 300}}
          />
        <br />
          <Typography className = 'userName' variant = 'h6'><b>Jane Doe</b></Typography>
          <Typography className = 'UserEmail' variant = 'h6'>janedoe@gmail.com</Typography>
        </div>
          
          
        <div className='Inputs-container'>
          <Box className = 'all-Content-Inside'>
            <Box className = 'Cortos'>
              <Box className='textNameContainer'>
                <Typography className = 'Name'>Nombre</Typography> 
                      
                <TextField
                className='textName'
                id = 'name-input'
                label = ''
                variant='outlined'
                />
              </Box>

              <Box className='textLastNameContainer'>
                <Typography className = 'LastName'>Apellido</Typography>
                <TextField
                className='textLastName'
                id = 'last-name-input'
                label = ''
                variant='outlined'
                />
              </Box>

              <Box className='textEmailContainer'>
                <Typography className = 'Email' variant = 'h8'>Correo electrónico</Typography>
                <br />
                <TextField
                className='textEmail'
                id = 'email-input'
                label = ''
                variant='outlined'
                />
              </Box>
              <Box className='textPhoneNumberContainer'>
                <Typography className = 'PhoneNumber' variant = 'h8'>Número de teléfono</Typography>
                <br />
                <TextField
                className='textPhoneNumber'
                id = 'phone-number-input'
                label = ''
                variant='outlined'
                />
              </Box>
            </Box>
            <Box className='LocationContainer'>
              <Typography className = 'Location' variant = 'h8'>Ubicación</Typography>
              <br />
              <TextField
              className='textLocation'
              id = 'location-input'
              label = ''
              variant='outlined'
              />
            </Box>


            <Box className='LikesContainer'>
              <Typography className = 'Likes' variant = 'h8'>Descripción de gustos</Typography>
              <br />
              <TextField
              className='textLikes'
              id = 'likes-input'
              label = ''
              variant='outlined'
              />
            </Box>
            <br />
            
            <Box className='ActualizarPerfilButton'>
              <Button className='Button' variant='contained'>
                Actualizar Perfil
              </Button>
            </Box>
          </Box>

        </div>
      </div>
  );
};

export default Perfil;

