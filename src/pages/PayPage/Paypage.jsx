import React, { useState, useMemo } from 'react';
import './Paypage.css';
import Navbar from '../../components/Navbar/Navbar';
import { Box } from '@mui/material';
import OrderItem from '../../components/Order/Order_item';
import Paybutton from '../../components/Paypalbutton';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';
// Datos de prueba
const mockOrderItems = [
  {
    id: 1,
    name: 'Molove',
    description: 'POKE BURRITO',
    price: 15,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Salmon',
    description: 'Sushi Roll',
    price: 12,
    quantity: 10,
  },
  {
    id: 3,
    name: 'Salmon ',
    description: 'Sushi Roll',
    price: 12,
    quantity: 10,
  }
];

export default function Paypage({ initialOrderItems = mockOrderItems }) {
  const [orderItems, setOrderItems] = useState(initialOrderItems);

  const handleRemoveItem = (itemId) => {
    setOrderItems(orderItems.filter(item => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setOrderItems(orderItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = useMemo(() => {
    return orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [orderItems]);

  const delivery = 50;
  const total = subtotal + delivery;

  return (
    <Box className="Box">
      <Navbar />
      <section className="pedido_section">
        <div className="pedido">
          <h1 className="pedi">PEDIDO</h1>
          <div className="divider" style={{ paddingRight: '5rem' }}></div>
          {orderItems && orderItems.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </div>
        <div className="resume">
          <div className="square">
            <h2>RESUMEN DE PEDIDO</h2>
            <div className="total">
              <p>SUBTOTAL:</p> <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="total">
              <p>DELIVERY:</p> <div>${delivery.toFixed(2)}</div>
            </div>
            <div className="divider"></div>
            <div className="total">
              <p>TOTAL:</p> <div>${total.toFixed(2)}</div>
            </div>
            <Paybutton />
          </div>
        </div>
      </section>

      <Footer className="Footer" />
    </Box>
  );
}

Paypage.propTypes = {
  initialOrderItems: PropTypes.array,
};
