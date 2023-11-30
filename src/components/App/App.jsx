import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
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
  
      <Router>
        <Route exact path="/">
          <SelectPizza />
        </Route>
        <Route exact path="/customer-info">
          <CustomerInfo />
        </Route>
        <Route exact path="/checkout">
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
