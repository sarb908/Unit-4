import React, { useState } from "react";
import Classes from "./ShowTodo.module.css";
const ShowTodo = (props) => {
  const [isValid, setIsValid] = useState(false);
  const clickHandler = () => {
    setIsValid((prev) => !prev);
  };
  return (
    <>
      <button className={Classes.button} onClick={clickHandler}>
        Show Completed Todos...
      </button>
      <ul>
        {isValid &&
          props.item.map((el) => <li className={Classes.li}>{el.task}</li>)}
      </ul>
    </>
  );
};

export default ShowTodo;
