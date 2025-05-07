import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/authContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './Context/cartContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="730650746908-a0ripe40nkkia2eqrpbod3ntfvkl0qc7.apps.googleusercontent.com">
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

