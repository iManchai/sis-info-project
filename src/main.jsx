import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import UserProvider from './Provider/UserProvider.jsx';
import { ShoppingCartProvider } from './Provider/ShoppingCartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <UserProvider>  
        <PayPalScriptProvider
          options={{
            "clientId": "AQtiepL_BIPJBzvsnsFmyOv3iwdFs3AukIJzwi2LTe_s-UWrklqr2yldQOQG2P9yvztdmkKAnQEIXA4O"
          }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PayPalScriptProvider>
      </UserProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);