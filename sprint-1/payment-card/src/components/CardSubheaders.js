import React from "react";
import Classes from "./CardSubheaders.module.css";
const CardSubheaders = (props) => {
  return (
    <div className={Classes.subheader}>
      <div>
        <h3>{props.date}</h3>
      </div>
      <div className={Classes.case}>
        <h5>CASE STUDY</h5>
      </div>
      <div>
        <h1>{props.heading}</h1>
        <h1>{props.subheading}</h1>
      </div>

      <div>
        <h3>{props.devices}</h3>
      </div>
    </div>
  );
};

export default CardSubheaders;
