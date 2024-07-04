import React, { createContext, useContext, useReducer } from 'react';

// Define the context
export const ShoppingCartContext = createContext(null);

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Logic to add an item to the cart
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      // Logic to remove an item from the cart
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    // Add more cases as needed
    default:
      return state;
  }
};