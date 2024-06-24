
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import LoginForm from './pages/LoginForm/LoginForm';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Navigate, Route, Routes, redirect, useNavigate } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Perfil from './components/Perfil/Perfil';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { useUser } from './context/user';

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
  
  const navigate = useNavigate()
  const user = useUser()

  return (
    <div>
      <LoginForm></LoginForm>
      <Nosotros></Nosotros>
    </div>


    <ThemeProvider theme={theme}>
      <Box className='page'>
        <Routes>
          {user ? 
          <>
            <Route path="/profile" element={<Perfil />}/>
            <Route path="/register" element={<Navigate replace to="/"/>}/>
            <Route path="/login" element={<Navigate replace to="/"/>}/>
          </> : 
          <>
            <Route path="/login" element={<LoginForm navigate={navigate}/>}/>
            <Route path="/register" element={<RegisterPage navigate={navigate}/>}/>
          </>
          }
          <Route path="/" element={<LandingPage navigate={navigate}/>} />
          <Route path="/about" element={<Nosotros />}/>
          <Route path="/contact" element={<Contacto />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>

  );
};

export default App;