import React from 'react';
import { connect } from 'react-redux';
import CartCard from '../components/CartCard';
import Header from '../components/Header';

class Cart extends React.Component {

  render() {
    const { cart, history } = this.props;
    return (
      <section>
        <Header history={ history } />
        <h1>Carrinho de compras</h1>
        {cart.map((product) => (
          <CartCard product={ product } key={ product.id } />
        ))}
        <p>{`Valor total: R$${cart.reduce((acc, { qnt, price }) => acc + (qnt * price), 0)}`}</p>
        <button type="button" onClick={ () => history.push('/checkout') }>Ir para checkout</button>
      </section>
    )
  }
}

const mapSatateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapSatateToProps)(Cart);
