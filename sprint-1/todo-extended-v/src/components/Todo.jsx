import React, { useState } from "react";
import TodoList from "./TodoList";
import Classes from "./Todo.module.css";
import ShowTodo from "./ShowTodo";
import { v4 as uuid } from "uuid";
const Todo = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [data, setData] = useState([]);
  const [compl, setCompl] = useState([]);

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const todoHandler = () => {
    if (newTodo.trim() === "") {
      return alert("not valid");
    }
    setData((prev) => [...prev, { id: uuid(), task: newTodo }]);
    console.log(data);
    setNewTodo("");
  };
  const deletedHandler = (id) => {
    console.log(id);
    const del = data.find((el) => el.id === id);
    setCompl((prev) => [...prev, del]);
    setData(data.filter((el) => el.id !== id));
  };
  return (
    <div className={Classes.card}>
      <TodoList data={data} deletedHandler={deletedHandler} />

      <div className={Classes.inputs}>
        <input
          onChange={newTodoHandler}
          placeholder="Write Todo Tasks......"
          value={newTodo}
        />
        <button onClick={todoHandler}>+</button>
      </div>
      <ShowTodo item={compl} />
    </div>
  );
};
export default Todo;
