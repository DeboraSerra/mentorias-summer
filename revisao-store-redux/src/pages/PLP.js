import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';

class PLP extends React.Component {

  render() {
    const { products, loading } = this.props;
    console.log({ loading, products })
    return (
      <main>
        <Categories />
        {!loading && products.length > 0 && (
          <section>
            {products.map(({ title, id }) => (
              <p key={ id }>{title}</p>
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
