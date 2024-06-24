import React from 'react';
import pokeBowlImage from '../../assets/pokeBowls.png';
import pokeBurritoImage from '../../assets/pokeBurritos.png';
import entradasImage from '../../assets/pokeEntradas.png';

const Section2 = ({ navigate }) => {
  return (
    <div className="section2">
      <h2>QUÉ OFRECEMOS</h2>
      <div className="cards">
        <div className="card">
          <img src={pokeBowlImage} alt="Poke Bowls" />
          <h3>POKE BOWLS</h3>
          <p>Buscas una comida fresca, deliciosa y nutritiva? No busques más!</p>
        </div>
        <div className="card">
          <img src={pokeBurritoImage} alt="Poke Burritos" />
          <h3>POKE BURRITOS</h3>
          <p>¿Cansado de los mismos burritos de siempre? Prueba nuestros Poke Burritos!</p>
        </div>
        <div className="card">
          <img src={entradasImage} alt="Entradas" />
          <h3>ENTRADAS</h3>
          <p>Antes de comer nuestros Poke Bowls y Poke Burritos, prueba nuestras entradas.</p>
        </div>
      </div>
      <button className="menu-button" onClick={() => navigate('/menu')}>DESCUBRE NUESTRO MENÚ</button>
    </div>
  );
};

export default Section2;
