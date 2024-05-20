import { ActionType } from "./action";

const todosReducer = (todos = [], action = {}) => {
  if (action.type === ActionType.ADD_TODO) {
    return todos.concat(action.payload);
  }

  if (action.type === ActionType.DELETE_TODO) {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === ActionType.TOGGLE_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }

  if (action.type === ActionType.RECEIVE_TODOS) {
    return action.payload.todos;
  }

  return todos;
};

export { todosReducer };
