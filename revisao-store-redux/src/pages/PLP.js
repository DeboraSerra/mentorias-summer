import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

class PLP extends React.Component {

  render() {
    const { products, loading, history } = this.props;
    console.log(products)
    return (
      <main className="main">
        <Header history={ history } />
        <Categories />
        {loading ? <p>Carregando...</p> : (
          <section className="PLP_main">
            {products.map((product) => (
              <ProductCard product={ product } key={ product.id } />
            ))}
          </section>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
})

export default connect(mapStateToProps)(PLP);
