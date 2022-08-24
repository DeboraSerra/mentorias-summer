import React, { Component } from 'react';

export default class TodoContainer extends Component {
  render() {

    const { todos, didClickFavorite, favorites } = this.props;
    return (
      <div className='todo-container'>
        <p> <strong>Tarefas</strong> (Toque duplo para favoritar) </p>
        <ul>
          { todos.map(({ task, id }) => (
            <label htmlFor={ id } key={id}>
              <li>
                {task}
                <input
                  id={ id }
                  onChange={didClickFavorite}
                  type="checkbox"
                  name="fave"
                  checked={ favorites.some((todo) => todo.id === id) }
                />
              </li>
            </label>
          )) }
        </ul>
      </div>
    )
  }
}
