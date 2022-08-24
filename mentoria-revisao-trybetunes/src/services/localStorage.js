// buscar listas favoritos e todos
// adicionar todos
// adicionar favoritas
// remover favoritas

export const FAVE = 'favoritas';
export const TODO = 'tasks';

export const getTodos = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const addTodo = (key, todo) => {
  const listTodo = getTodos(key);
  const newList = [...listTodo, todo];
  localStorage.setItem(key, JSON.stringify(newList));
}

export const removeTodo = (id) => {
  const favorites = getTodos(FAVE);
  const newList = favorites.filter((item) => item.id !== id)
  localStorage.setItem(FAVE, JSON.stringify(newList));
}
