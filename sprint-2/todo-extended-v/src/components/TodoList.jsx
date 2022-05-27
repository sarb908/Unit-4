import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.module.css";

const TodoList = (props) => {
  console.log(props.data, "tolist");

  const content = props.data.map((item) => {
    return (
      <TodoItem
        deletedHandler={(ev) => props.deletedHandler(ev)}
        key={item.id}
        id={item.id}
      >
        {item.task}
      </TodoItem>
    );
  });

  return <ul>{content}</ul>;
};
export default TodoList;
