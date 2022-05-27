import React from "react";
import Card from "./Card";
import { v4 as uuid } from "uuid";
import Classes from "./RestaurantsDetails.module.css";
const RestaurantsDetails = (props) => {
  return (
    <div className={Classes.cont}>
      {props.data.map((item) => (
        <Card key={uuid()} {...item} />
      ))}
    </div>
  );
};

export default RestaurantsDetails;
