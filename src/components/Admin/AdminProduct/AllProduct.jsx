import React, { useEffect, useState } from "react";
import GetAPI from "../../../APIHooks/GetAPI";

const AllProduct = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    GetAPI("products", setProducts);
  }, []);
  console.log(product);
  return (
    <div>
      <h1>All product</h1>
    </div>
  );
};

export default AllProduct;
