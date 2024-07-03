import React, { useEffect } from 'react';
import './Order.css';
import Button from '@mui/material/Button';
import Amount from './Amount';
import PropTypes from 'prop-types';
import { calculatePrice } from '../../hooks/plate';

export default function OrderItem({ item, onRemoveItem, onUpdateQuantity }) {

  useEffect(() => {
    console.log(item)
  }, [])
  const { id, plate, quantity, specifications } = item;

  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="FoodItem">
      <img src={plate.image} alt={plate.name} className='image_fooditem'/>
      <div className="content">
        <p className='name_food'>{plate.name}</p>
        <Button
          variant="contained"
          className="remove-button"
          onClick={() => onRemoveItem(id)}
        >
          Eliminar
        </Button>
      </div>
      <div className='price_container'>
      <div className='price'>
        <p>Precio</p>
        <div>{`$${calculatePrice(plate, specifications)}`}</div>
      </div>

      <div className="price">
        <p>Cantidad</p>
        <Amount initialAmount={quantity} onAmountChange={handleQuantityChange} />
      </div>

      <div className="price">
        <p>Total</p>
        <div>{`$${calculatePrice(plate, specifications) * quantity}`}</div>
      </div>
      </div>
    </div>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};
