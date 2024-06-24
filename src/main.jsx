import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './Provider/UserProvider.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </UserProvider>
  </React.StrictMode>
);
