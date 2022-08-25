import React from 'react';
import TodoContainer from './components/TodoContainer';
import FavoritesContainer from './components/FavoritesContainer';
import './App.css';
import {
  addTodo,
  FAVE,
  getTodos,
  removeTodo,
  TODO,
} from './services/localStorage';

class App extends React.Component {
  state = {
    task: '',
    todos: [],
    favorites: [],
  };

  componentDidMount() {
    const todos = getTodos(TODO);
    const favorites = getTodos(FAVE);
    this.setState({
      todos,
      favorites,
    });
  }

  clearInput = () => {
    this.setState({
      task: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, todos } = this.state;
    const id = todos.length;
    addTodo(TODO, { id, task });
    const newList = getTodos(TODO);
    this.setState({
      todos: newList,
    });
    this.clearInput();
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      task: value,
    });
  };

  didClickFavorite = ({ target }) => {
    const { checked } = target;
    const { todos } = this.state;
    const task = todos.find((todo) => todo.id === Number(target.id));
    if (checked) {
      addTodo(FAVE, task);
    } else {
      removeTodo(task.id);
    }
    this.setState({
      favorites: getTodos(FAVE),
    });
  };

  didClickUnfavorite = ({ target }) => {
    // const { favorites } = this.state;
    // const listFavorites = favorites.filter((item) => item.id !== +target.id);
    removeTodo(+target.id);
    this.setState({
      favorites: getTodos(FAVE),
    });
  };

  render() {
    const { task, todos, favorites } = this.state;
    return (
      <div>
        <form className="forms" onSubmit={this.handleSubmit}>
          <input
            className="task-input"
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
            favorites={favorites}
            didClickFavorite={this.didClickFavorite}
          />
          <FavoritesContainer
            favorites={favorites}
            didClickUnfavorite={this.didClickUnfavorite}
          />
        </main>
      </div>
    );
  }
}

export default App;
