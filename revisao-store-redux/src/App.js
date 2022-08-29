import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { addToCart } from  './redux/actions'
import { connect } from 'react-redux';
import './App.css';
import Cart from './pages/Cart';
import PDP from './pages/PDP';
import PLP from './pages/PLP';
import Checkout from './pages/Checkout';
import Header from './components/Header';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart.forEach((item) => dispatch(addToCart(item)));
    }
  }

  render() {
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
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(App);
