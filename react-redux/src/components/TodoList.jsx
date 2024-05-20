// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddTodo,
  asyncDeleteTodo,
  asyncReceiveTodos,
  asyncToggleTodo,
} from "../redux/todos/action";

function TodoList() {
  const todos = useSelector((states) => states.todos); // TODO: Get todos from store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTodos());
  }, [dispatch]);

  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
    dispatch(asyncAddTodo(text));
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
    dispatch(asyncToggleTodo(id));
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
    dispatch(asyncDeleteTodo(id));
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={onToggleTodo}
              deleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
