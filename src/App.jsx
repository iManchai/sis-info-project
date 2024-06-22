import { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Registrarse from './components/Registrarse';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import LoginForm from './pages/LoginForm/LoginForm';
import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';

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

  return (
    <ThemeProvider theme={theme}>
      <Box>
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
        {section === 'registrarse' && <Registrarse />}
        
        <Routes>
          <>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterPage />}/>
          </>
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
