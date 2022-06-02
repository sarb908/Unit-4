import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
export const TodoContext = createContext();
const reducer = (state, action) => {
  if (action.type === "init") {
    console.log(action.value);
    return action.value;
  } else if (action.type === "ADD_TODO") {
    return [...state, { name: action.value, done: false, id: uuid() }];
  } else if (action.type === "REMOVE_TODO") {
    return state.filter((item) => item.id !== action.id);
  } else if (action.type === "TOGGLE_TODO") {
    return state.map((item) => {
      if (item.id === action.id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
  }
};
export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    axios.get(` http://localhost:4000/todo`).then((d) => {
      console.log(d);
      dispatch({
        type: "init",
        value: d.data,
      });
    });
  }, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
