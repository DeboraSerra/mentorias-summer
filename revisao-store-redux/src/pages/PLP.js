import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

class PLP extends React.Component {

  render() {
    const { products, loading } = this.props;
    console.log({ loading, products })
    return (
      <main className="main">
        <Categories />
        {loading ? <p>Carregando...</p> : (
          <section className="PLP_main">
            {products.map((product) => (
              <ProductCard key={ product.id } product={product} />
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
