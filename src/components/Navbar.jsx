import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import molokaiLogo from '../assets/molokaiLogo.png';
import './Navbar.css';

const Navbar = ({ setSection }) => {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setSection('home')}>
          <img src={molokaiLogo} alt="Logo" className="logo" />
        </IconButton>
        <div className="left-buttons">
          <Button color="inherit" onClick={() => setSection('menu')} className="nav-button">Menú</Button>
          <Button color="inherit" onClick={() => setSection('nosotros')} className="nav-button">Nosotros</Button>
          <Button color="inherit" onClick={() => setSection('contacto')} className="nav-button">Contacto</Button>
        </div>
        <Typography variant="h6" component="div" className="flex-grow">
          {}
        </Typography>
        <Button color="inherit" onClick={() => setSection('iniciarSesion')} className="nav-button login-button">Iniciar Sesión</Button>
        <Button color="inherit" onClick={() => setSection('registrarse')} className="nav-button register-button">Registrarse</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
