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
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      input: value,
    })
  }

  setCategory = ({ target: { id } }) => {
    this.setState({
      category: id,
    }, this.handleClickCategory);

  }

  handleClickSearch = (e) => {
  }

  handleClickCategory = () => {
  }

  render() {
    const { loading, categories } = this.props;
    const { input } = this.state;
    return (
      <section className={ style.category_sect }>
        <form onSubmit={ this.handleClickSearch }>
          <input
            type="text"
            name="input"
            onChange={ this.handleChange }
            value={ input }
            placeholder="Digite um termo para sua pesquisa"
          />
          <button type="submit" onSubmit={ this.handleClickSearch }>Buscar</button>
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

export default Categories;
