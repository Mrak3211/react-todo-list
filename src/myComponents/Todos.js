import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHight: "70vh",
    margin: "10px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-2"> Todos List </h3>
      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />{" "}
                <hr />
              </>
            );
          })}
    </div>
  );
};
