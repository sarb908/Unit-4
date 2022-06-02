import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home";
import Product from "./components/Product";
function App() {
  console.log("fv");
  return (
    <div className="App">
      {}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
