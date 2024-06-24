import { Button } from '@mui/material';
import React from 'react';
import pokeCompartir from '../../assets/pokeCompartir.png'
import './Section3.css'

const Section3 = ({navigate}) => {
  return (
    <div className="section3">
        <div className='about_text_board'>
          <h1>NOSOTROS</h1>
          <p>En el vibrante corazón de Caracas, en el año 2020, nació Moloka’i Poke, un restaurante con una misión simple: democratizar el poke y llevar su frescura y sabor a todos los rincones de la ciudad.</p> 
          <p>Desde nuestros inicios, nos hemos dedicado a ofrecer poke bowls y poke burritos  elaborados con ingredientes frescos y de la más alta calidad.</p>
          <div className='know_more_button'> 
            <Button onClick={() => navigate('/about')} className='conoce-button'>Conócenos más</Button>
          </div>
        </div>
        <div className='image'>
          <img src={pokeCompartir} alt="pokeCompartir" />
        </div>
    </div>
  );
};

export default Section3;