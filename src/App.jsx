import React from 'react';
import Menu from './pages/Menu/Menu';
import Contacto from './components/Contacto';
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
import Navbar from './components/Navbar/Navbar';
import Paypage from './pages/PayPage/Paypage';

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
  const location = useLocation();
  const user = useUser();

  const hideNavbarRoutes = ['/login', '/register'];

  return (
    <ThemeProvider theme={theme}>
      <Box className="page">
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar setSection={() => {}} />}
        <Routes>

          {user ? (
            <>
              <Route path="/profile" element={<Perfil />} />
              <Route path="/login" element={<Navigate replace to="/" />} />
              <Route path="/register" element={<Navigate replace to="/" />} />
              <Route path='/order' element={<Paypage navigate={navigate}/>}/>

            </>
          ) : (
            <>
              <Route path="/login" element={<LoginForm navigate={navigate} />} />
              <Route path="/register" element={<RegisterPage navigate={navigate} />} />
            </>
          )}
          <Route path="/" element={<LandingPage navigate={navigate} />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/create-your-own" element={<CreateYourOwn />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
