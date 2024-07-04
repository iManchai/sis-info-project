import { Button } from '@mui/material';
import Mysv from "../assets/pay_paypal.svg";
import React, { useContext, useRef, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import PropTypes from 'prop-types';
import { ShoppingCartContext } from '../context/shoppingCart';
import { createOrder } from '../controllers/orders';
import { doc } from 'firebase/firestore';
import { useUser } from '../context/user';

export default function Paybutton({ totalAmount, items }) {
  const [checkout, setCheckout] = useState(false);
  const user = useUser()

  const totalAmountRef = useRef(totalAmount)

  return (
    <>
      {checkout ? (
        <PayPalButtons
          key={totalAmount}
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalAmountRef.current // Usar la prop totalAmount
                },
              }],
            });
          }}
          onApprove={async (data, actions) => {
            return actions.order.capture().then(async details => {
              alert('Transaction completed by ' + details.payer.name.given_name);
              await createOrder({
                date: details.create_time,
                user: doc(db, 'users', user.uid),
                items: items.map((item) => {
                  return {
                    plate: doc(db, 'plates', item.plate.id),
                    quantity: item.quantity,
                    specifications: item.specifications
                }}),
                totalPrice: totalAmountRef.current,
              })
              localStorage.clear()
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