import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Classes from "./Todo.module.css";
import ShowTodo from "./ShowTodo";
import axios from "axios";

const Todo = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [data, setData] = useState([]);
  const [compl, setCompl] = useState([]);
  const [page, setpage] = useState(1);

  const [count, setcount] = useState();

  useEffect(() => {
    axios(`http://localhost:4000/todo?_page=${page}&_limit=4`).then((d) => {
      console.log(d);
      setcount(d.headers["x-total-count"]);
      setData(d.data);
    });
  }, [page]);

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const todoHandler = () => {
    if (newTodo.trim() === "") {
      return alert("not valid");
    }
    fetch(`http://localhost:4000/todo`, {
      method: "POST",
      body: JSON.stringify({
        task: newTodo,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((d) => setData((prev) => [...prev, d]));

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
      <button
        disabled={Number(count) <= page * 4}
        onClick={() => {
          setpage((prev) => prev + 1);
        }}
      >
        next
      </button>
      <br />
      <button
        disabled={page <= 1}
        onClick={() => {
          setpage((prev) => prev - 1);
        }}
      >
        prev
      </button>
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
