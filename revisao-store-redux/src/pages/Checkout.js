import React from 'react';
import Header from '../components/Header';

class Checkout extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <section>
        <Header history={ history } />
        <h1>Checkout</h1>
      </section>
    )
  }
}

export default Checkout;
