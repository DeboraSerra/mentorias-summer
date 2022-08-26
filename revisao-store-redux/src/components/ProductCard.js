import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions';
import style from '../styles/ProductCard.module.css';

class ProductCard extends React.Component {
  handleClick = () => {
    const { product, dispatch } = this.props;
    dispatch(addToCart({ ...product, qnt: 1 }));
  }
  render() {
    const { product: {title, id, price, shipping: { free_shipping: freeShipping }, thumbnail} } = this.props;
    return (
      <section className={ style.card }>
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <section className={ style.price_sect }>
          <p>{`R$${price}`}</p>
          {freeShipping && <p>Frete Grátis</p>}
        </section>
        <section className={ style.btn_sect }>
          <Link className={ style.dets_link } to={ `/product-details/${id}` }>Mais detalhes</Link>
          <button type="button">Adicionar ao carrinho</button>
        </section>
      </section>
    )
  }
}

export default connect()(ProductCard);
