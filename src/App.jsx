import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';

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
      <Box className='page'>
        <Navbar setSection={setSection} />
        {section === 'home' && (
          <>
            <Section1 />
            <Section2 />
          </>
        )}
        
        <Routes>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/about" element={<Nosotros />}/>
          <Route path="/contact" element={<Contacto />}/>
          <Route path="/menu" element={<Menu />}/>
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
