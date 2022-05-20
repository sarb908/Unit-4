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
        <input type="checkbox" onChange={clickHandler} />
      </li>
    </>
  );
};
export default TodoItem;
