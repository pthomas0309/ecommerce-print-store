import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const cart = (state = { cartItems: [], totalPrice: 0  }, action) => {

  // switch statement manipulates state based
  // on action.type value
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price
      };
  
    // executes if no action type is defined
    default:
      return state;
  }
}

const reduxStore = createStore(
  combineReducers({
    cart
  }),
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
