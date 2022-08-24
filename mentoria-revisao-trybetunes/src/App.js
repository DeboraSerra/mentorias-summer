import React from 'react';
import TodoContainer from './components/TodoContainer';
import FavoritesContainer from './components/FavoritesContainer';
import './App.css';

class App extends React.Component {
  state = {
    task: '',
    todos: [],
    favorites: []
  }

  clearInput = () => {}

  handleSubmit = (e) => {}

  handleChange = ({ target: { value } }) => {}

  removeItem = (array, id) => {}

  didClickFavorite = ({ target }) => {}

  didClickUnfavorite = ({ target }) => {}

  render() {
    const { task, todos, favorites } = this.state;
    return (
      <div>
        <form className="forms" onSubmit={this.handleSubmit}>
          <input className="task-input"
            type="text"
            placeholder="Adicionar tarefa..."
            value={task}
            onChange={this.handleChange}
          />
          <button type="submit">Adicionar</button>
        </form>

        <main className="main-container">
          <TodoContainer
            todos={todos}
            favorites={ favorites }
            didClickFavorite={this.didClickFavorite}
          />
          <FavoritesContainer
            favorites={favorites}
            didClickUnfavorite={this.didClickUnfavorite}
          />
        </main>
      </div>
    )
  }
}

export default App;
