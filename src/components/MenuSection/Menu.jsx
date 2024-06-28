import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

const mockMenuItems = [
  {
    id: 1,
    name: 'Mololove',
    type: 'Poke Bowl',
    price: 16.00,
    image: 'https://example.com/poke-bowl.jpg'
  },
  {
    id: 2,
    name: 'Mololove',
    type: 'Poke Burrito',
    price: 16.00,
    image: 'https://example.com/poke-burrito.jpg'
  },
  {
    id: 3,
    name: 'Wakame',
    type: 'Entrada',
    price: 6.00,
    image: 'https://example.com/wakame.jpg'
  }
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Simulando la obtención de datos de Firestore
    setMenuItems(mockMenuItems);
  }, []);

  return (
    <div className="menu">
      <h2>Nuestro Menú</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
