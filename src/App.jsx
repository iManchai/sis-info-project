import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Menu from './Components/Menu.jsx';
import Nosotros from './Components/Nosotros.jsx';
import Contacto from './Components/Contacto.jsx';
import Registrarse from './Components/Registrarse.jsx';
import Section1 from './Components/Section1.jsx';
import Section2 from './Components/Section2.jsx';
import Section3 from './Components/Section3.jsx';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import Footer from './Components/Footer/Footer.jsx';
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
          <Section3 />
        </>
      )}
      {section === 'menu' && <Menu />}
      {section === 'nosotros' && <Nosotros />}
      {section === 'contacto' && <Contacto />}
      {section === 'iniciarSesion' && <LoginForm />}
      {section === 'registrarse' && <Registrarse />}
      <Footer setSection={setSection}/>
    </div>
  );
};

export default App;
