<<<<<<< HEAD
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import TodoApp from "./Todos.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="*" element={ <h1>404 Not Found</h1>}/> 
          <Route path="/about" element={ <About />}>
           
          </Route>
          <Route path="/users" element={<Users />}>
            
          </Route>
          <Route path="/" element={ <Home />}>
           
          </Route>
          <Route path="/todos" element={<TodoApp />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  useEffect(()=>{
    console.log("Home component mounted")
    return()=>{
      console.log("Home component unmounted")
    }
  })
  return <h2>Home Page</h2>;
}

function About() {
  useEffect(()=>{
    console.log("About component mounted")
    return()=>{
      console.log("About component unmounted")
    }
  })
  return <h2>About</h2>;
}

function Users() {
  useEffect(()=>{
    console.log("Users component mounted")
    return()=>{
      console.log("Users component unmounted")
    }
  })
  return <h2>Users</h2>;
}


=======
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./Action";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null); 
  const [editValue, setEditValue] = useState(""); 
  
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoItem = () => {
      dispatch(addTodo(inputValue));
      setInputValue("");
  };

  const deleteItem = (index) => {
    dispatch(deleteTodo(index));
  };

  const startEditing = (index, currentText) => {
    setEditIndex(index);
    setEditValue(currentText); 
  };

  const saveEditItem = (index) => {
    dispatch(editTodo(index, editValue));
    setEditIndex(null); 
    setEditValue("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Add your todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={addTodoItem}>Add Todo</button>

      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <li key={index}>
              {editIndex === index ? (
               
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => saveEditItem(index)}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button onClick={() => startEditing(index, todo.text)}>Edit</button>
                  <button onClick={() => deleteItem(index, alert("Remove permanently"))}>Remove</button>
                </>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
>>>>>>> 9e461b3 (Added redux project)
