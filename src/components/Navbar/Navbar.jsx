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
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { logOut } from '../../controllers/auth';
import { useNavigate } from 'react-router-dom';
import getUser from '../../controllers/users';
import { useTheme } from '@emotion/react';

const Navbar = () => {
  const user = useUser();
  const theme = useTheme()
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userData = await getUser(user.uid);
        setCurrentUser(userData);
      }
    };
    fetchUserData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [user]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Menú', onClick: () => navigate('/menu') },
    { text: 'Nosotros', onClick: () => navigate('/about') },
    { text: 'Contacto', onClick: () => navigate('/contact') },
  ];

  const showFullButtons = windowWidth > 1024;
  const showPartialButtons = windowWidth > 768;

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', color: '#f2565b' }} className="navbar">
        <Toolbar sx={{ minHeight: '56px' }} className="toolbar">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
            <img src={molokaiLogo} alt="Logo" className="logo" />
          </IconButton>
          {showFullButtons && (
            <div className="left-buttons">
              {menuItems.map((item, index) => (
                <Button key={index} color="inherit" onClick={item.onClick} className="nav-button">{item.text}</Button>
              ))}
            </div>
          )}
          <Typography variant="h6" component="div" className="flex-grow"></Typography>
          <div className="right-buttons">
            {user ? (
              <>
                {currentUser && currentUser.isAdmin && showFullButtons && <Button color="inherit" onClick={() => navigate('/admin')}>Admin</Button>}
                {showPartialButtons && (
                  <>
                    <IconButton color="inherit" onClick={() => navigate('/order')} className="order-button"><ShoppingCartIcon /></IconButton>
                    <Avatar src={user.photoURL} onClick={() => navigate('/profile')} />
                  </>
                )}
                <Button onClick={async () => await logOut()}>Log out</Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => navigate('/login')} className="nav-button login-button">Iniciar Sesión</Button>
                <Button color="inherit" onClick={() => navigate('/register')} className="nav-button register-button">Registrarse</Button>
              </>
            )}
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className='menu-icon'
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={item.onClick} className="drawer-item">
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            {user ? (
              <>
                {currentUser && currentUser.isAdmin && (
                  <ListItem button onClick={() => navigate('/admin')} className="drawer-item">
                    <ListItemText primary="Admin" />
                  </ListItem>
                )}
                <ListItem button onClick={() => navigate('/order')} className="drawer-item">
                  <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                  <ListItemText primary="Orden" />
                </ListItem>
                <ListItem button onClick={() => navigate('/profile')} className="drawer-item">
                  <ListItemIcon><Avatar src={user.photoURL} /></ListItemIcon>
                  <ListItemText primary="Perfil" />
                </ListItem>
                <ListItem button onClick={async () => await logOut()} className="drawer-item">
                  <ListItemText primary="Log out" />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem button onClick={() => navigate('/login')} className="drawer-item">
                  <ListItemText primary="Iniciar Sesión" />
                </ListItem>
                <ListItem button onClick={() => navigate('/register')} className="drawer-item">
                  <ListItemText primary="Registrarse" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
