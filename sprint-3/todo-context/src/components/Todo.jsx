import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const Todo = (props) => {
  const { dispatch } = useContext(TodoContext);
  const deleteHandler = () => {
    dispatch({
      type: "REMOVE_TODO",
      id: props.id,
    });
  };
  return (
    <div>
      <input
        type="checkbox"
        value={props.done}
        onChange={() => dispatch({ type: "TOGGLE_TODO", id: props.id })}
      />
      {props.name}
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default Todo;
