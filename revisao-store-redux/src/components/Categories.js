import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../redux/actions';
import style from '../styles/Categories.module.css';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      category: '',
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      input: value,
    })
  }

  setCategory = ({ target: { id } }) => {
    this.setState({
      category: id,
    }, this.handleClick2);

  }

  handleClick = (e) => {
    e.preventDefault();
    const { input, category } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchProducts(category, input));
  }

  handleClick2 = () => {
    const { input, category } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchProducts(category, input));
  }

  render() {
    const { loading, categories } = this.props;
    const { input } = this.state;
    return (
      <section className={ style.category_sect }>
        <form onSubmit={ this.handleClick }>
          <input
            type="text"
            name="input"
            onChange={ this.handleChange }
            value={ input }
            placeholder="Digite um termo para sua pesquisa"
          />
          <button type="submit" onSubmit={ this.handleClick }>Buscar</button>
        </form>
        { loading ? <p>Carregando</p> : (
        <section className={ style.btn_sect }>
          {categories.map(({ id, name }) => (
            <button type="button" key={ id } id={ id } onClick={ this.setCategory }>
              {name}
            </button>
          ))}
        </section>
      )}
      <p>Resultados da pesquisa</p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
})

export default connect(mapStateToProps)(Categories);
