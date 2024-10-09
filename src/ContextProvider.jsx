import React, { useState, createContext } from "react";
export const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
