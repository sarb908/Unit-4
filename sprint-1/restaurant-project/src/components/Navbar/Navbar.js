import React from "react";
import Classes from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <div className={Classes.nav}>
      <select onChange={(e) => props.ratingHandler(e.target.value)}>
        <option> Sort by Rating</option>
        <option value="4"> 4</option>
        <option value="3"> 3</option>
        <option value="2"> 2</option>
        <option value="1"> 1</option>
      </select>
      <select onChange={(e) => props.paymentHandler(e.target.value)}>
        <option> Sort by payment</option>
        <option value="card"> card</option>
        <option value="cash"> cash</option>
        <option value="upi"> upi</option>
      </select>

      <select onChange={(e) => props.priceHandler(e.target.value)}>
        <option> Sort by price</option>
        <option value="inc"> High to Low</option>
        <option value="desc"> Low to High</option>
      </select>
    </div>
  );
};

export default Navbar;
