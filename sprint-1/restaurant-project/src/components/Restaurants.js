import React from "react";
import Navbar from "./Navbar/Navbar";
import RestaurantsDetails from "./RestaurantsDetails/RestaurantsDetails";
import Form from "./Form/Form";
import datas from "./../data/data.json";

const Restaurants = () => {
  const [data, setData] = React.useState(datas);
  const [content, setcontent] = React.useState(data);
  const newItem = (item) => {
    setData((prev) => [...prev, item]);
    setcontent(data);
  };

  const ratingHandler = (e) => {
    console.log(e);
    if (e === "4") {
      const newItems = data.filter((el) => el.rating >= "4");
      setcontent(newItems);
    } else if (e === "3") {
      const newItems = data.filter((el) => el.rating < "4" && el.rating >= "3");
      setcontent(newItems);
    } else if (e === "2") {
      const newItems = data.filter((el) => el.rating < 3 && el.rating >= 2);
      setcontent(newItems);
    } else if (e === "1") {
      const newItems = data.filter((el) => el.rating >= 1 && el.rating < 2);
      console.log(newItems);
      setcontent(newItems);
    }
  };
  const paymentHandler = (e) => {
    console.log(e);
    if (e === "card") {
      const newItems = data.filter((el) => el.payment_methods.card === true);
      console.log(newItems);
      setcontent(newItems);
    } else if (e === "cash") {
      const newItems = data.filter((el) => el.payment_methods.cash === true);
      console.log(newItems);
      setcontent(newItems);
    } else if (e === "upi") {
      const newItems = data.filter((el) => el.payment_methods.upi === true);
      console.log(newItems);
      setcontent(newItems);
    }
  };
  const priceHandler = (e) => {
    if (e === "desc") {
      const newItems = content.sort(
        (a, b) => Number(a["cost-for-two"]) - Number(b["cost-for-two"])
      );
      console.log(newItems);
      setcontent([...newItems]);
    } else if (e === "inc") {
      const newItems = content.sort(
        (a, b) => Number(b["cost-for-two"]) - Number(a["cost-for-two"])
      );
      console.log(newItems);
      setcontent([...newItems]);
    }
  };

  return (
    <div>
      <Navbar
        ratingHandler={ratingHandler}
        paymentHandler={paymentHandler}
        priceHandler={priceHandler}
      />
      <RestaurantsDetails data={content} />
      <Form newItem={newItem} />
    </div>
  );
};

export default Restaurants;
