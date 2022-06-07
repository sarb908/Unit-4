import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";
const Tasks = (props) => {
  console.log(props.data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>address</th>
            <th>department</th>
            <th>salary</th>
            <th>martialStatus</th>
            <th>image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <Task key={uuid()} {...item} deleteHandler={props.deleteHandler} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
