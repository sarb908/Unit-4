import { AuthContext } from "./../components/Store/Auth-context";
import React, { useContext } from "react";
import axios from "axios";
const Form = () => {
  const { dispatch, form, setIsAuth, isAuth } = useContext(AuthContext);
  const submitHandler = () => {
    console.log("f");
    axios
      .post(`https://reqres.in/api/login`, { ...form })
      .then((d) => {
        console.log(d);
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => dispatch({ type: "email", email: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) =>
            dispatch({ type: "password", password: e.target.value })
          }
        />
        <button onClick={() => submitHandler()}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Form;
