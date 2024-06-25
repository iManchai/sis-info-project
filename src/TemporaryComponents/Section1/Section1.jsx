import React from 'react';
import pokeImage from '../../assets/pokeImage1.png';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="section1">
      <div className="text-container">
        <h1>THIS IS HOW WE POKÉ</h1>
        <p>Somos Poke Moloka'i, tu mejor opción gastronómica de Poke en Caracas</p>
      </div>
      <div className="image-container">
        <img src={pokeImage} alt="Poke" className="poke-image" />
      </div>
    </div>
  );
};

export default Section1;
