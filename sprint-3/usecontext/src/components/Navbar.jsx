import React from "react";
import { useContext } from "react";

import { ThemeContext } from "./Store/ThemeContext";
const Navbar = () => {
  const { themeHandler } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={themeHandler}>Theme Toggle</button>

      <h1>WishList : {"wishlist"}</h1>
    </div>
  );
};

export default Navbar;
