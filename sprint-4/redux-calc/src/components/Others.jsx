import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Others = () => {
  const [val, setval] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
          setval(e.target.value);
        }}
      />
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "add",
              payload: Number(val),
            })
          }
        >
          add
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "multiply",
              payload: Number(val),
            })
          }
        >
          multiply
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "substract",
              payload: Number(val),
            })
          }
        >
          substract
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "divide",
              payload: Number(val),
            })
          }
        >
          divide
        </button>
      </div>
    </div>
  );
};

export default Others;
