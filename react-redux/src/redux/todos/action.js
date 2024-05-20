import mockAPI from "../../data/mockAPI";

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

// menetapkan nilai state todos dengan nilai yang didapatkan dari API
const receiveTodosActionCreator = (todos) => {
  return {
    type: "RECEIVE_TODOS",
    payload: {
      todos,
    },
  };
};

//* Menangani proses asynchronous
const asyncAddTodo = (text) => {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
};

const asyncDeleteTodo = (id) => {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
};

const asyncToggle = (id) => {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleTodoActionCreator(id));
  };
};

const asyncReceiveTodos = () => {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  };
};

export {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  receiveTodosActionCreator,
  asyncDeleteTodo,
  asyncToggle,
  asyncAddTodo,
  asyncReceiveTodos,
};
