import React from "react";
import { useEffect } from "react";

const DeliveredProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <h1>delivered products</h1>
    </div>
  );
};

export default DeliveredProduct;
