import React from "react";
import Classes from "./Form.module.css";
const Form = (props) => {
  const [name, setname] = React.useState("");
  const [image, setImage] = React.useState("");
  const [category, setcategory] = React.useState("");
  const [deliveryTimings, settiming] = React.useState("");
  const [rating, setrating] = React.useState("");
  const [price, setprice] = React.useState("");

  const submitHandler = () => {
    if (
      name === "" ||
      image === "" ||
      category === "" ||
      deliveryTimings === "" ||
      rating === "" ||
      price === ""
    ) {
      return;
    } else {
      const payload = {
        name,
        image,
        category,
        deliveryTimings,
        rating,
        price,
      };
      props.newItem(payload);
    }
  };

  return (
    <div className={Classes.form}>
      <input placeholder="name" onChange={(e) => setname(e.target.value)} />
      <input placeholder="image" onChange={(e) => setImage(e.target.value)} />
      <input
        placeholder="category"
        onChange={(e) => setcategory(e.target.value)}
      />
      <input placeholder="timing" onChange={(e) => settiming(e.target.value)} />
      <input placeholder="rating" onChange={(e) => setrating(e.target.value)} />
      <input placeholder="price" onChange={(e) => setprice(e.target.value)} />
      <input type="submit" value="submit" onClick={submitHandler} />
    </div>
  );
};

export default Form;
