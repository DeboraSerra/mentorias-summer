import React from 'react';
import { connect } from 'react-redux';
import { MdArrowBackIos } from 'react-icons/md';
import style from '../styles/Header.module.css';

class Header extends React.Component {
  render() {
    const { history, cart } = this.props;
    const amount = cart.reduce((acc, { qnt }) => acc + qnt, 0);
    return (
      <header className={ style.header }>
        <MdArrowBackIos className={ style.back_icon } onClick={ () => history.goBack() } />
        <h1 onClick={ () => history.push('/') }>Summer Rules!</h1>
        <section className={ style.cart } onClick={ () => history.push('/shopping-cart') }>
          <p>{amount}</p>
          <lord-icon
            src="https://cdn.lordicon.com/slkvcfos.json"
            trigger="hover"
            colors="primary:white,secondary:black"
            style={{
              width:'60px',
              height: '60px'
            }}>
          </lord-icon>
        </section>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(Header);
