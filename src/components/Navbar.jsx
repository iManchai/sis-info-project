import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import molokaiLogo from '../assets/molokaiLogo.png';

const Navbar = ({ setSection }) => {
  return (
    <AppBar position="fixed"  sx={{ backgroundColor: '#ffffff', color: '#f2565b' }}>
      <Toolbar sx={{ minHeight: '56px' }}> {}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setSection('home')}>
          <img src={molokaiLogo} alt="Logo" style={{ height: '40px', width: 'auto' }} /> {}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#f2565b' }}>
          {}
        </Typography>

        <div className='Menu_NavBar'>
        <Button color="inherit" onClick={() => setSection('menu')} sx={{ color: '#f2565b' }}>Menú</Button>
        <Button color="inherit" onClick={() => setSection('nosotros')} sx={{ color: '#f2565b' }}>Nosotros</Button>
        <Button color="inherit" onClick={() => setSection('contacto')} sx={{ color: '#f2565b' }}>Contacto</Button>
        </div>
        
        <div className='Register_Login'>
        <Button color="inherit" onClick={() => setSection('iniciarSesion')} sx={{ color: '#f2565b' }}>Iniciar Sesión</Button>
        <Button color="inherit" onClick={() => setSection('registrarse')} sx={{ color: '#f2565b' }}>Registrarse</Button>
        </div>


      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
