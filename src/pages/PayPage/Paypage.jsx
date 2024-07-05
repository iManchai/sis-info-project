import React, { useState, useMemo, useContext, useEffect } from 'react';
import './Paypage.css';
import Navbar from '../../components/Navbar/Navbar';
import { Box } from '@mui/material';
import OrderItem from '../../components/Order/Order_item';
import Paybutton from '../../components/Paypalbutton';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';
import { ShoppingCartContext } from '../../context/shoppingCart';
import { calculatePrice } from '../../hooks/plate';

export default function Paypage() {
  const { state, dispatch } = useContext(ShoppingCartContext)
  const [items, setItems] = useState([])


  useEffect(() => {
    setItems(state.items)
  }, [state])

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const itemPrice = calculatePrice(item.plate, item.specifications);
      return sum + itemPrice * item.quantity;
    }, 0)
  }, [items])

  const delivery = subtotal * 0.03;
  const total = subtotal + delivery;

  return (
    <Box className="Box">
      <Navbar />
      <section className="pedido_section">
        <div className="pedido">
          <h1 className="pedi">PEDIDO</h1>
          <div className="divider" style={{ paddingRight: '5rem' }}></div>
          {items && items.map((item) => (
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
            <Paybutton totalAmount={total} items={items}/>
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
