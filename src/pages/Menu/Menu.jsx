import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Ruta por definir
import MenuItem from '../../components/MenuSection/MenuItem';
import './Menu.css';
import BuildYourOwn from './BuildYourOwn';
import { usePlates } from '../../hooks/plate';
import { Divider } from '@mui/material';

const Menu = () => {
  const plates = usePlates();

  return (
    <div className="menu">
      <h2>NUESTRO MENÚ</h2>
      <Divider />
      <div className="menu-items">
        {plates.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <BuildYourOwn />
    </div>
  );
};

export default Menu;

