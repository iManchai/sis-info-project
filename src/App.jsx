import Contacto from './pages/ContactPage/Contacto';
import React from 'react';
import Menu from './pages/Menu/Menu';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CreateYourOwn from './pages/CreateYourOwn/CreateYourOwn';
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { useUser } from './context/user';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Perfil from './pages/ProfilePage/Perfil';
import Nosotros from './pages/AboutUsPage/Nosotros';
import getUser from './controllers/users';
import { useEffect, useState } from 'react';
import AdminPage from './pages/AdminPage/AdminPage';
import Navbar from './Components/Navbar/Navbar';
import Paypage from './pages/PayPage/Paypage';
import SeePlate from './pages/SeePlate/SeePlate';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2565B',
    },
    secondary: {
      main: '#2F6A9F',
    },
  },
  typography: {
    fontFamily: ['Kulim Park'],
  },
});

const App = () => {
  const navigate = useNavigate();
  const user = useUser()
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
  const location = useLocation();

  const hideNavbarRoutes = ['/login', '/register'];

  return (
    <ThemeProvider theme={theme}>
      <Box className="page">
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar setSection={() => {}} />}
        <Routes>
          {user ? <>
            <Route path="/profile" element={<Perfil />} />
            <Route path="/login" element={<Navigate replace to="/"/>} />
            <Route path="/register" element={<Navigate replace to="/"/>} />
            <Route path='/order' element={<Paypage navigate={navigate}/>}/>
            <Route path='/plate/:id' element={<SeePlate navigate={navigate} />} />
            {currentUser && currentUser.isAdmin && <Route path="/admin" element={<AdminPage />} />}
          </> :
          <>
            <Route path="/login" element={<LoginForm navigate={navigate}/>} />
            <Route path="/register" element={<RegisterPage navigate={navigate}/>} />
          </>
          }
          <Route path="/" element={<LandingPage navigate={navigate}/>} />
          <Route path="/about" element={<Nosotros />}/>
          <Route path="/contact" element={<Contacto />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/create-your-own" element={<CreateYourOwn />} />
          <Route path="*" element={<NotFoundPage/>} />

        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
