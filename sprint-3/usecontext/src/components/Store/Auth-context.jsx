import { createContext, useReducer, useState } from "react";
export const AuthContext = createContext();

const reducer = (state, action) => {
  if (action.type === "email") {
    return {
      email: action.email,
      password: state.password,
    };
  } else if (action.type === "password") {
    return {
      email: state.email,
      password: action.password,
    };
  }
};

export const AuthContextPovider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [form, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });

  const toggleHandler = () => {
    setIsAuth((prev) => !prev);
  };
  return (
    <AuthContext.Provider
      value={{ form, dispatch, isAuth, toggleHandler, setIsAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
