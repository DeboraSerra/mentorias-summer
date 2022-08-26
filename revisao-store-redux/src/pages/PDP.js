import React from 'react';
import { connect } from 'react-redux';
import Attributes from '../components/Attributes';
import Gallery from '../components/Gallery';
import { fetchDetails } from '../redux/actions';

class PDP extends React.Component {
  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(fetchDetails(id));
  }
  render() {
    const { loading, product } = this.props;
    console.log({ product, loading });
    const { attributes, available_quantity: availableQnt, pictures, price,
      title, warranty, shipping } = product;
    return (
      <main>
        {loading ? <p>Carregando...</p> : (
          <section>
            <h2>{product.title}</h2>
            <p>{`Quantidade disponível: ${availableQnt}`}</p>
            <Gallery photos={ pictures } title={ title } />
            <p>{`Preço: R$${price}`}</p>
            {shipping.free_shipping && <p>Frete grátis</p>}
            <p>{warranty}</p>
            <Attributes attributes={ attributes } />
          </section>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.details.details,
  loading: state.details.loading,
})

export default connect(mapStateToProps)(PDP);
