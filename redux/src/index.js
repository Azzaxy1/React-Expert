// import { createStore } from "./redux.js";
import { createStore } from "redux";

//* Action Creator
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

const addGoalActionCreator = ({ id, text }) => {
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text,
    },
  };
};

const deleteGoalActionCreator = (id) => {
  return {
    type: "DELETE_GOAL",
    payload: {
      id,
    },
  };
};

//! Root Reducer
const rootReducer = (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action),
  };
};

//* Reducer
const todosReducer = (todos = [], action = {}) => {
  if (action.type === "ADD_TODO") {
    return todos.concat(action.payload);
  }

  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }
  return todos;
};

const goalsReducer = (goals = [], action = {}) => {
  switch (action.type) {
    case "ADD_GOAL":
      return [...goals, action.payload];
    case "DELETE_GOAL":
      return goals.filter((goal) => goal.id !== action.payload.id);
    default:
      return goals;
  }
};

// consume
const store = createStore(rootReducer);
console.log("Store Dibuat", store.getState());

store.subscribe(() => {
  console.log("Data Berubah", store.getState());
});

// Mengubah state sesuai dengan action
store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: "Learn React",
  })
);
store.dispatch(
  addTodoActionCreator({
    id: 2,
    text: "Learn Redux",
  })
);
store.dispatch(
  addTodoActionCreator({
    id: 3,
    text: "Learn Redux",
  })
);

store.dispatch(
  addGoalActionCreator({
    id: 1,
    text: "Lulus S.KOM",
  })
);
store.dispatch(
  addGoalActionCreator({
    id: 2,
    text: "Front End Dev",
  })
);

store.dispatch(deleteTodoActionCreator(1));
store.dispatch(deleteGoalActionCreator(2));

store.dispatch(toggleTodoActionCreator(2));

//* 2. Mendapatkan state
store.getState();

//* 3. Men-subscribe perubahan state
const unsubscribe = store.subscribe(() => {
  console.log("State Changed", store.getState());
  console.log("UI should be re-rendered");
});

unsubscribe();

