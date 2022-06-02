import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";
const TodoList = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div>
      {todos.map((item) => (
        <Todo key={item.id} name={item.name} done={item.done} id={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
