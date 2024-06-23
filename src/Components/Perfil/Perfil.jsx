import React from 'react';
import { Button, TextField, Avatar, Typography } from '@mui/material';
import './Perfil.css';

const Perfil = () => {
  return (
    <div className='container'>  
      <div className='User_profile_form'>
        <div className='Inputs-container'>
          <Typography className = 'userName' variant = 'h8'>Nombre</Typography>
          <TextField
          className='textName'
          id = 'name-input'
          label = ''
          variant='outlined'
          />

          <Typography className = 'LastName' variant = 'h8'>Apellido</Typography>
          <TextField
          className='textLastName'
          id = 'last-name-input'
          label = 'Last Name'
          variant='outlined'
          />

          
          <Typography className = 'Email' variant = 'h8'>Email</Typography>
          <TextField
          className='textEmail'
          id = 'email-input'
          label = 'Email'
          variant='outlined'
          />
      

          <Typography className = 'PhoneNumber' variant = 'h8'>Teléfono</Typography>
          <TextField
          className='textPhoneNumber'
          id = 'phone-number-input'
          label = 'Phone Number'
          variant='outlined'
          />


          <Typography className = 'Location' variant = 'h8'>Location</Typography>
          <TextField
          className='textLocation'
          id = 'location-input'
          label = 'Location'
          variant='outlined'
          />


          <Typography className = 'Likes' variant = 'h8'>Gustos y preferencias</Typography>
          <TextField
          className='textLikes'
          id = 'likes-input'
          label = 'Likes and preferences'
          variant='outlined'
          />
          
          <Button className='Button' variant='contained'>
            Actualizar Perfil
          </Button>
      </div>

      <div className='User-profile-info'>
        <Avatar
        className='ProfileAvatar'
        id = 'profile-avatar'
        label = 'Avatar'
        src = ''
        sx = {{width: 300, height: 300}}
        />
        <Typography className = 'userName' variant = 'h4'>Jane Doe</Typography>
        <Typography className = 'UserEmail' variant = 'h6'>JaneDoe@gmail.com</Typography>
        
      </div>
    </div>
  </div>
  );
};

export default Perfil;

