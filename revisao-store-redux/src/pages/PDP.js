import React from 'react';
import { connect } from 'react-redux';
import Attributes from '../components/Attributes';
import Gallery from '../components/Gallery';
import { addToCart, fetchDetails } from '../redux/actions';

class PDP extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    }
  }
  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(fetchDetails(id));
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ quantity: +value });
  }

  handleClick = () => {
    const { quantity } = this.state;
    const { dispatch, product } = this.props;
    dispatch(addToCart({ ...product, qnt: quantity }));
  }

  render() {
    const { loading, product } = this.props;
    console.log({ product, loading });
    const { attributes, available_quantity: availableQnt, pictures, price,
      title, warranty, shipping } = product;
    const { quantity } = this.state;
    return (
      <main>
        {loading ? <p>Carregando...</p> : (
          <section>
            <section>
              <h2>{product.title}</h2>
              <p>{`Quantidade disponível: ${availableQnt}`}</p>
              <Gallery photos={ pictures } title={ title } />
              <p>{`Preço: R$${price}`}</p>
              {shipping.free_shipping && <p>Frete grátis</p>}
              <p>{warranty}</p>
            </section>
            <section>
              <input
                type="number"
                name="quantity"
                min="0"
                max={ availableQnt }
                value={ quantity }
                onChange={ this.handleChange }
              />
              <button type="button" onClick={ this.handleClick }>
                Adicionar ao carrinho
              </button>
            </section>
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
