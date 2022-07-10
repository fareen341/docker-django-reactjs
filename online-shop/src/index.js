import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from "./Features/counter";
import getProduct from './Features/getProduct';
import userReducer from './Features/user';
import getusersReducer from './Features/getusers';
import userLoggedInReducer from './Features/userLoggedIn';

const store = configureStore({
  reducer:{           //reducer is function which takes in some states
    // user:userReducer,
    // theme: themeReducer,
    counter: counterReducer,
    getProduct: getProduct,
    user: userReducer,
    getusers: getusersReducer,
    userLoggedIn: userLoggedInReducer
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
