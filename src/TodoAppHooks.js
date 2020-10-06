import React, { useState,useEffect } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export default function ToDoAppHooks() {
  const [countTodos, setCountTodos] = useState(0);
  const [formValue, setFormValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [todos, setTodos] = useState([]);

   useEffect(()=>{
    fetch("https://my-json-server.typicode.com/otho009/TodoList-MyJson/todos")
    .then((res) => res.json())
    .then(
      (result) => {
        setTodos(result);
        setIsLoaded(true);
        setCountTodos(result.length)
      },
      
      
    );

   },[])
  function handleSubmit(event) {
    event.preventDefault();
    setCountTodos((prevCount) => prevCount + 1);
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: countTodos + 1,
          done: false,
          text: formValue,
        },
      ];
    });
  }
  function handleChangeFormvalue(event) {
    event.preventDefault();
    setFormValue(event.target.value);
  }
  function handleDone(id) {
    const indexItem = todos.findIndex((e) => e.id === id);
    let newTodos = [...todos];
    newTodos[indexItem] = {
      ...newTodos[indexItem],
      done: !newTodos[indexItem].done,
    };
    setTodos(newTodos);
  }
  function handleRemove(id) {
    const indexItem = todos.findIndex((e) => e.id === id);
    let newTodos = [...todos];
    newTodos.splice(indexItem, 1);
    setTodos(newTodos);
    setCountTodos((prevCount) => prevCount - 1);
  }
if (!isLoaded) {
  return <div>Loading....</div>;

  
} else {
  
  return (
    <div className="App">
      <div className="wrapper">
        <h1>{"To Do List Using Hooks"} </h1>

        <TodoForm onSubmit={handleSubmit} onChange={handleChangeFormvalue} />
        <TodoList todos={todos} onDone={handleDone} onRemove={handleRemove} />
      </div>
    </div>
  );
}
}
