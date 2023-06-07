import React from "react";
import { useEffect } from "react";

const OrderedProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <h1>odered products</h1>
    </div>
  );
};

export default OrderedProduct;
