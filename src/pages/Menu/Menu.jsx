import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Ruta por definir
import MenuItem from '../../Components/MenuSection/MenuItem';
import './Menu.css';
import BuildYourOwn from './BuildYourOwn';

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
    // Datos de prueba
    setMenuItems(mockMenuItems);
  }, []);

  return (
    <div className="menu">
      <h2>NUESTRO MENÚ</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <BuildYourOwn />
    </div>
  );
};

export default Menu;

