import React from 'react';
import { connect } from 'react-redux';
import { MdArrowBackIos } from 'react-icons/md';

class Header extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <header>
        <MdArrowBackIos onClick={ () => history.goBack() } />
        <h1>Summer Rules!</h1>
        <lord-icon
          src="https://cdn.lordicon.com/slkvcfos.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{
            width:'250px',
            height: '250px'
          }}>
        </lord-icon>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(Header);
