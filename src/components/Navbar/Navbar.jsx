import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import molokaiLogo from '../../assets/molokaiLogo.png';
import './Navbar.css';
import { useUser } from '../../context/user';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Box } from '@mui/material';
import { logOut } from '../../controllers/auth';
import { useNavigate } from 'react-router-dom';
import getUser from '../../controllers/users';

const Navbar = () => {

  const user = useUser()
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userData = await getUser(user.uid)
        setCurrentUser(userData)
      }
    }
    fetchUserData()
  }, [user])


  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', color: '#f2565b' }} className="navbar">
      <Toolbar sx={{ minHeight: '56px' }} className="toolbar">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
          <img src={molokaiLogo} alt="Logo" className="logo" />
        </IconButton>
        <div className="left-buttons">
          <Button color="inherit" onClick={() => navigate('/menu')} className="nav-button">Menú</Button>
          <Button color="inherit" onClick={() => navigate('/about')} className="nav-button">Nosotros</Button>
          <Button color="inherit" onClick={() => navigate('/contact')} className="nav-button">Contacto</Button>
        </div>
        {user ? 
        <>
        <Typography variant="h6" component="div" className="flex-grow"></Typography>
        <Box sx={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        
        }}>
        {currentUser && currentUser.isAdmin && <Button color="inherit" onClick={() => navigate('/admin')}>Admin</Button>}
        <IconButton color="inherit" onClick={() => navigate('/order')} className="order-button"><ShoppingCartIcon /></IconButton>
        <Avatar src={user.photoURL} onClick={() => navigate('/profile')} />
        <Button onClick={async () => await logOut()}>Log out</Button>
        </Box>
        </> :
        <>
        <Typography variant="h6" component="div" className="flex-grow"></Typography>
        <Button color="inherit" onClick={() => navigate('/login')} className="nav-button login-button">Iniciar Sesión</Button>
        <Button color="inherit" onClick={() => navigate('/register')} className="nav-button register-button">Registrarse</Button>
        </>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
