import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

class PLP extends React.Component {

  render() {
    const { products, loading, history } = this.props;
    return (
      <main className="main">
        <Header history={ history } />
        <Categories />
        {loading ? <p>Carregando...</p> : (
          <section className="PLP_main">
            produtos
          </section>
        )}
      </main>
    )
  }
}

export default PLP;
