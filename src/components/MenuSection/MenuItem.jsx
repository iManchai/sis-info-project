import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <h3>{item.name}</h3>
      <p>{item.type}</p>
      <p>${item.price.toFixed(2)}</p>
      <button className="view-button">Ver plato</button>
    </div>
  );
};

export default MenuItem;
