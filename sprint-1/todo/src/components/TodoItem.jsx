import React, { useState } from "react";
import Classes from "./TodoItem.module.css";
const TodoItem = (props) => {
  let [isValid, setIsValid] = useState(false);
  const clickHandler = () => {
    setIsValid((prev) => !prev);
  };
  return (
    <>
      <li type="none" className={isValid && Classes.strike}>
        {props.children}
        <input
          type="radio"
          className={isValid ? Classes.inputed : Classes.inputeds}
          onClick={clickHandler}
        />
      </li>
    </>
  );
};
export default TodoItem;
