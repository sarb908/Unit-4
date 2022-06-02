import React, { useContext } from "react";
import { AuthContext } from "./Store/Auth-context";
const Products = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Loggedin Status : {isAuth ? "Loggedin" : "LoggedOut"}</h1>
      <h1>
        Cart <button>add to cart</button>
      </h1>
    </div>
  );
};

export default Products;
