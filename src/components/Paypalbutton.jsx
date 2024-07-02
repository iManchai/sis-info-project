import { Button } from '@mui/material';
import Mysv from "../assets/pay_paypal.svg";
import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import PropTypes from 'prop-types';

export default function Paybutton({ totalAmount }) {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {checkout ? (
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalAmount.toFixed(2) // Usar la prop totalAmount
                },
              }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(details => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }}
        />
      ) : (
        <Button
          onClick={() => setCheckout(true)}
          startIcon={<img src={Mysv} alt="PayPal Icon" />}
          sx={{
            backgroundColor: '#ffbe15',
            color: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            height: '3rem',
            letterSpacing: '0.2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            padding: '0 10%',
            marginBottom: '2rem',
            '&:hover': {
              backgroundColor: '#ffbe15',
            },
          }}
        >
         
        </Button>
      )}
    </>
  );
}

Paybutton.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};