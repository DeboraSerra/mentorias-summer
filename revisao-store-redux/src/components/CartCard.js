import React from 'react';
import { connect } from 'react-redux';
import { decreaseQnt, increaseQnt, removeFromCart } from '../redux/actions';
import style from '../styles/Cart.module.css';

class CartCard extends React.Component {
  render() {
    const { product, dispatch } = this.props;
    const { thumbnail, price, title, qnt } = product;
    return (
      <section className={ style.card }>
        <img src={ thumbnail } alt={ title } />
        <section className={ style.info_sect }>
          <h3>{title}</h3>
          <p>{`Preço unitário: R$${price}`}</p>
          <p>{`Preço total: R$${qnt * price}`}</p>
        </section>
          <section className={ style.qnt_sect }>
            <button type="button" onClick={ () => dispatch(increaseQnt(product, 1)) }>+</button>
            <p>{qnt}</p>
            <button type="button" onClick={ () => qnt === 1
              ? dispatch(removeFromCart(product))
              : dispatch(decreaseQnt(product, 1)) }>
                -
            </button>
          </section>
      </section>
    )
  }
}

export default connect()(CartCard);
