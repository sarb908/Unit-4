import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((d) => d.json())
      .then((d) => setProd(d));
  }, []);
  return (
    <div>
      {prod.map((item) => (
        <div key={item.id}>
          <Link to={`/products/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
