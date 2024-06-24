import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Perfil from './components/Perfil/Perfil';
import LandingPage from './pages/LandingPage/LandingPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2565B'
    },
    secondary: {
      main: '#2F6A9F'
    }
  },
  typography: {
    fontFamily: [
      'Kulim Park'
    ]
  }
})

const App = () => {
  const [section, setSection] = useState('home');
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box className='page'>
        <Navbar setSection={setSection} />
        {section === 'home' && (
          <>
            <Section1 />
            <Section2 />
          </>
        )}
        {section === 'menu' && <Menu />}
        {section === 'nosotros' && <Nosotros />}
        {section === 'contacto' && <Contacto />}
        {section === 'iniciarSesion' && <LoginForm />}
        {section === 'registrarse' && <RegisterPage />}
        <Perfil />
        <Routes>
          <Route path="/" element={<LandingPage navigate={navigate}/>} />
          <Route path="/login" element={<LoginForm navigate={navigate} />}/>
          <Route path="/register" element={<RegisterPage navigate={navigate}/>}/>
          <Route path="/about" element={<Nosotros />}/>
          <Route path="/contact" element={<Contacto />}/>
          <Route path="/menu" element={<Menu />}/>
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;