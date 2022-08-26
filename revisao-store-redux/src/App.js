import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import PDP from './pages/PDP';
import PLP from './pages/PLP';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ PLP } />
        <Route path="/shopping-cart" component={ Cart } />
        <Route path="/product-details/:id" component={ PDP } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </div>
  );
}

export default App;
