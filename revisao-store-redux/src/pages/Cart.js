import React from 'react';
import { connect } from 'react-redux';
import CartCard from '../components/CartCard';
import Header from '../components/Header';
import style from '../styles/Cart.module.css';

class Cart extends React.Component {

  render() {
    const { history, cart } = this.props;
    const price = cart.reduce((acc, { qnt, price }) => acc + (qnt * price), 0);
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
          <p className={ style.price }>{`Valor total: R$${price}`}</p>
          <button className={ style.button } type="button" onClick={ () => history.push('/checkout') }>Ir para checkout</button>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(Cart);
