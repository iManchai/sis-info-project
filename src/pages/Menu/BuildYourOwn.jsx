import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuildYourOwn.css';
import pokeImage1 from '../../assets/CreateYourOwn1.png';
import pokeImage2 from '../../assets/CreateYourOwn2.png';

const BuildYourOwn = () => {
  const navigate = useNavigate();

  return (
    <div className="build-your-own">
      <h2>CONSTRUYE TU PROPIO BOWL O BURRITO</h2>
      <div className="build-content">
        <div className="build-text">
          <p>
            No encuentras tu combinación perfecta en nuestro menú? ¡No hay problema!
            En nuestro restaurante, te damos la libertad de crear tu propio Poke Bowl o Poke Burrito a tu gusto.
            Elige la base de arroz, tus proteínas favoritas, tus verduras frescas, tus toppings crujientes y tu salsa irresistible.
          </p>
          <button className="build-button" onClick={() => navigate('/create-your-own')}>CONSTRUIR PLATO</button>
        </div>
        <div className="build-images">
          <img src={pokeImage1} alt="Poke Bowl" />
          <img src={pokeImage2} alt="Poke Burrito" />
        </div>
      </div>
    </div>
  );
};

export default BuildYourOwn;
