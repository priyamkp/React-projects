// import { useState } from "react";
// function TodoApp() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const addTodo = () => {
//     setTodos([...todos, todo]);
//     setTodo("");
//   };
//   return (
//     <>
//       <input
//         type="text"
//         value={todo}
//         placeholder="Add your todo"
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button type="submit" onClick={addTodo}>
//         Add Todo
//       </button>
//       <ul>
//         {todos.length > 0 &&
//           todos.map((todo, index) => {
//             return <TodoList key={index}>{todo}</TodoList>
//           })}
//       </ul>
//     </>
//   );
// }
// function TodoList({ todo}) {
//         return <li>{todo}</li>
        
// }
// export default TodoApp;
import React, { useState, useContext, createContext } from "react";


const TodoContext = createContext();

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, todo, setTodo }}>
     
       
        <TodoList>Testing</TodoList>
        <TodoForm title={"TodoForm"}
        itemTodo={addTodo}
        />
      
    </TodoContext.Provider>
  );
}
const TodoForm = (props)=>{
    const {todo, setTodo, addTodo} = useContext(TodoContext)
    return (
        <>
        {props.title}
     <input
          type="text"
          value={todo}
          placeholder="Add your todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={props.itemTodo}>
          Add Todo
        </button>
        </>

)}

function TodoList(props) {
    console.log(props)
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}

export default TodoApp;

