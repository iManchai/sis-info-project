import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ShoppingCartContext, cartReducer } from '../context/shoppingCart';

const initialState = { items: [] }; // Default initial state

export const ShoppingCartProvider = ({ children }) => {
  // Function to load the state from localStorage
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('shoppingCart');
      if (serializedState === null) {
        return initialState; // No stored state, return default
      }
      return JSON.parse(serializedState); // Parse and return stored state
    } catch (err) {
      return initialState; // In case of error, return default state
    }
  };

  const [state, dispatch] = useReducer(cartReducer, loadState()); // Initialize state with loaded data

  // Persist state changes to localStorage
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('shoppingCart', serializedState);
    } catch (err) {
      console.error(err)
    }
  }, [state]); // Run this effect on state change

  console.log(state)

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};