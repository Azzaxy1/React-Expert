const addTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete: false,
    },
  };
};

const deleteTodoActionCreator = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

const toggleTodoActionCreator = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};

export {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
};
