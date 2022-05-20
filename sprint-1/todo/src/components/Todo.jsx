import React, { useState } from "react";
import TodoList from "./TodoList";
import Classes from "./Todo.module.css";
const Todo = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const [data, setData] = useState([]);

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const todoHandler = () => {
    if (newTodo.trim() === "") {
      return alert("not valid");
    }
    setData((prev) => [...prev, newTodo]);
    setNewTodo("");
  };
  return (
    <div className={Classes.card}>
      <TodoList data={data} />
      <div className={Classes.inputs}>
        <input
          onChange={newTodoHandler}
          placeholder="Write Todo Tasks......"
          value={newTodo}
        />
        <button onClick={todoHandler}>+</button>
      </div>
    </div>
  );
};
export default Todo;
