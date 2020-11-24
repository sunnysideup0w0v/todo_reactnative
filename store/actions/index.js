export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const removeTodo = (todos) => {
  return {
    type: "REMOVE_TODO",
    payload: todos,
  };
};
