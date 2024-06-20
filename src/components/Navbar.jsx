import React from 'react';
import logo from '../assets/molokaiLogo.png';

const Navbar = ({ setSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setSection('home')}>
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setSection('menu')}>Menú</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setSection('nosotros')}>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setSection('contacto')}>Contacto</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setSection('iniciarSesion')}>Iniciar sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setSection('registrarse')}>Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
