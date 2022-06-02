import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const [prod, setProd] = useState({});
  const val = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/products/${val.id}`)
      .then((d) => d.json())
      .then((r) => setProd(r))
      .catch((err) => console.log(err));
  }, [val.id]);
  console.log(val);
  return (
    <>
      {prod.name ? (
        <div>
          <h1>{prod.name}</h1>
          <h1>price : {prod.price}</h1>
        </div>
      ) : (
        "ROUTE DONT EXIST"
      )}
    </>
  );
};

export default Product;
