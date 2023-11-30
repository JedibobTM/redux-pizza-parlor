import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Checkout from '../Checkout/Checkout';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import AdminPage from '../Admin/AdminPage';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is gucci.</p>
  
      <Router>
        <Route path="/select-pizza">
          <SelectPizza />
        </Route>
        <Route path="/customer-info">
          <CustomerInfo />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
