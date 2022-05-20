import React from "react";
import CardLogos from "./CardLogos";
import CardSubheaders from "./CardSubheaders";
import Classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={Classes.card} style={{ backgroundColor: props.color }}>
      <CardSubheaders
        date={props.date}
        heading={props.heading}
        subheading={props.subheading}
        devices={props.devices}
      />
      <CardLogos logo={props.logo} color={props.color} />
    </div>
  );
};

export default Card;
