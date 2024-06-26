import { ActionType } from "./todos/action";

const todoDeletionCheck = (store) => {
  return (next) => (action) => {
    if (action.type === ActionType.DELETE_TODO) {
      const { todos } = store.getState();
      const todosToBeDeleted = todos.find(
        (todo) => todo.id === action.payload.id
      );

      if (!todosToBeDeleted.completed) {
        alert("Tidak bisa menghapus to-do yang belum selesai");
        return;
      }
    }
    return next(action);
  };
};

const thunk = (store) => {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }

    return next(action);
  };
};

export { todoDeletionCheck, thunk };
