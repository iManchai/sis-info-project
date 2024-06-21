import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import IniciarSesion from './components/IniciarSesion';
import Registrarse from './components/Registrarse';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import LoginForm from './components/LoginForm/LoginForm'; // Importar LoginForm
import './App.css';

const App = () => {
  const [section, setSection] = useState('home');

  return (
    <div>
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
    </div>
  );
};

export default App;
