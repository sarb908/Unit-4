import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Others from "./Others";
const Calc = () => {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          decrement
        </button>
      </div>
      <Others />
    </div>
  );
};

export default Calc;
