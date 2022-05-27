import React, { useState } from "react";
import Classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  let [isValid, setIsValid] = useState(false);

  const clickHandler = () => {
    props.deletedHandler(props.id);
    setIsValid((prev) => !prev);
  };

  return (
    <>
      <li type="none" className={isValid && Classes.strike}>
        {props.children}
        <button onClick={clickHandler}>X</button>
      </li>
    </>
  );
};
export default TodoItem;
