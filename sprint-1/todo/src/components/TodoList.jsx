import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.module.css";
const TodoList = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        return <TodoItem>{item}</TodoItem>;
      })}
    </ul>
  );
};
export default TodoList;
