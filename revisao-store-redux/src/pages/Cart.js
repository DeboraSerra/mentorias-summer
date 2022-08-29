import React from 'react';
import { connect } from 'react-redux';
import CartCard from '../components/CartCard';
import Header from '../components/Header';
import style from '../styles/Cart.module.css';

class Cart extends React.Component {

  render() {
    const { cart, history } = this.props;
    return (
      <section>
        <Header history={ history } />
        <section className={ style.main }>
          <h1>Carrinho de compras</h1>
           <section>
            {cart.map((product) => (
              <CartCard product={ product } key={ product.id } />
            ))}
           </section>
          <p className={ style.price }>{`Valor total: R$${cart.reduce((acc, { qnt, price }) => acc + (qnt * price), 0)}`}</p>
          <button className={ style.button } type="button" onClick={ () => history.push('/checkout') }>Ir para checkout</button>
        </section>
      </section>
    )
  }
}

const mapSatateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapSatateToProps)(Cart);
