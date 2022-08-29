import React from 'react';
import { connect } from 'react-redux';
import { decreaseQnt, increaseQnt, removeFromCart } from '../redux/actions';

class CartCard extends React.Component {
  render() {
    const { product, dispatch } = this.props;
    const { thumbnail, price, title, qnt } = product;
    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <p>{`Preço unitário: R$${price}`}</p>
        <section>
          <button type="button" onClick={ () => dispatch(increaseQnt(product, 1)) }>+</button>
          <p>{qnt}</p>
          <button type="button" onClick={ () => qnt === 1
            ? dispatch(removeFromCart(product))
            : dispatch(decreaseQnt(product, 1)) }>
              -
          </button>
        </section>
        <p>{`Preço total: R$${qnt * price}`}</p>
      </section>
    )
  }
}

export default connect()(CartCard);
