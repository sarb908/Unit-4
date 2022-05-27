import React from "react";
import "./App.css";
import Offers from "./Components/Offers";
import Navbar from "./Components/Navbar";
import Filters from "./Components/Filters";
import Restaurants from "./Components/Restaurants";
import userdata from "./data/userInfo.json";
import offer from "./data/offers.json";
import restaurants from "./data/restaurants.json";
function App() {
  return (
    <>
      <Navbar {...userdata.location} />
      <Offers offer={offer} />
      <section className="near-you">
        <Filters />
        <Restaurants restaurants={restaurants} />
      </section>
    </>
  );
}

export default App;
