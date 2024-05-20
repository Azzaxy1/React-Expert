// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
} from "../redux/todos/action";

function TodoList() {
  const todos = useSelector((states) => states.todos); // TODO: Get todos from store;
  const dispatch = useDispatch();
  console.log(todos);

  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
    const id = `todo-${+new Date()}`;
    dispatch(
      addTodoActionCreator({
        id,
        text,
      })
    );
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
    dispatch(toggleTodoActionCreator(id));
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
    dispatch(deleteTodoActionCreator(id));
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
