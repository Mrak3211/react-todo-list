import "./App.css";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { AddTodo } from "./myComponents/AddTodo";
// import { Footer } from "./myComponents/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  const onDelete = (todo) => {
    console.log("I Am On Delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I Am Adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={true} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
