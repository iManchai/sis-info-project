import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import './Order.css';

export default function Amount({ initialAmount, onAmountChange }) {
  const [quantity, setQuantity] = useState(initialAmount);

  useEffect(() => {
    onAmountChange(quantity);
  }, [quantity, onAmountChange]);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 0));
  };

  return (
    <Box className="quantity-selector">
      <Button variant="outlined" onClick={() => handleQuantityChange(-1)}
      sx={{

        minWidth:"0.1rem",
        borderRadius:"150px",
      }}
      disabled = {quantity === 1}
      >-</Button>
      <Box className="quantity-display">{quantity}</Box>
      <Button variant="outlined" onClick={() => handleQuantityChange(1)} 
        sx={{

          minWidth:"0.1rem",
          borderRadius:"150px",
        }}
      >+</Button>
    </Box>
  );
}

Amount.propTypes = {
  initialAmount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
};
