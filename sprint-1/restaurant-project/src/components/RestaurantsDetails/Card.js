import React from "react";
import Classes from "./Card.module.css";
const Card = (props) => {
  console.log(props.image);

  return (
    <div className={Classes.card}>
      <div>
        <img src={props.image} alt="fdlkm" />
      </div>
      <div>
        <h1>{props.name}</h1>
        <p>{`category: ${props.category}`}</p>

        <p>{`price: ${props["cost-for-two"]}`}</p>
        <p>{`delivery time ${props.deliveryTimings}`}</p>
      </div>
      <div>{`rating: ${props.rating}`}</div>
    </div>
  );
};

export default Card;
