import React, { useState, useContext, createContext } from "react";
import TodoProvider, { TodoContext } from "./ContextProvider";

const TodoForm = (props) => {
  const { todo, setTodo, addTodo } = useContext(TodoContext);

  return (
    <>
      {props.title}
      <input
        type="text"
        value={todo}
        placeholder="Add your todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

function TodoList(props) {
  console.log(props);
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
    </ul>
  );
}

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}
const TodoApp = () => {
  return (
    <TodoProvider>
      <h2>Todo Application</h2>
      <TodoList />
      <TodoForm />
    </TodoProvider>
  );
};

export default TodoApp;
