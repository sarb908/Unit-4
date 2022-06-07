import React from "react";

const Task = (props) => {
  console.log(props["name"]);
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.address}</td>
      <td>{props.department}</td>
      <td>{props.salary}</td>
      <td>{props.martialStatus}</td>
      <td>{props.image}</td>
      <td>
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
