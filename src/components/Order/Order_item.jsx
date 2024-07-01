import React from 'react';
import IMG from '../../assets/Imagen.png';
import './Order.css';
import Button from '@mui/material/Button';
import Amount from './Amount';
import PropTypes from 'prop-types';

export default function OrderItem({ item, onRemoveItem, onUpdateQuantity }) {
  const { id, name, description, price, quantity } = item;

  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="FoodItem">
      <img src={IMG} alt={name} className='image_fooditem'/>
      <div className="content">
        <p className='name_food'>{name}</p>
        <p className='description'>{description}</p>
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
        <div>{`$${price}`}</div>
      </div>

      <div className="price">
        <p>Cantidad</p>
        <Amount initialAmount={quantity} onAmountChange={handleQuantityChange} />
      </div>

      <div className="price">
        <p>Total</p>
        <div>{`$${price * quantity}`}</div>
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
