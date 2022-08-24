import React, { Component } from 'react';

export default class FavoritesContainer extends Component {
  render() {

    const { favorites, didClickUnfavorite } = this.props;

    return (
      <div className='favorites-container'>
        <p> <strong>Favoritos</strong> (Toque duplo para desfavoritar) </p>
        { favorites.map(({id, task}) => ( <li key={id} id={ id } onDoubleClick={didClickUnfavorite}>{task}</li> )) }
      </div>
    )
  }
}
