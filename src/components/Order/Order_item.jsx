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
      <img src={IMG} alt={name} />
      <div className="content">
        <p className='name_food'>{name}</p>
        <p className='description'>{description}</p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2F699F',
            color: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '25px',
            height: '4rem',
            padding: '0.7rem',
            letterSpacing: '0.3rem',
            fontSize: '1.2rem',
            fontWeight: '800',
          }}
          onClick={() => onRemoveItem(id)}
        >
          Eliminar
        </Button>
      </div>

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
