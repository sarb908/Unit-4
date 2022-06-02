import React, { useContext, useState } from "react";

import { TodoContext } from "../context/TodoContext";
const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [name, setname] = useState("");
  const submitHandler = () => {
    dispatch({
      type: "ADD_TODO",
      value: name,
    });
    setname("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setname(e.target.value)}
        placeholder="add new todo"
        value={name}
      />
      <button onClick={submitHandler}>add</button>
    </div>
  );
};

export default AddTodo;
