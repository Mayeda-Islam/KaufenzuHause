import React, { useEffect, useState } from "react";
import GetAPI from "../../../APIHooks/GetAPI";
import ProductList from "./ProductList";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    GetAPI("products", setProducts);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className=" w-full sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto">
        <h1 className="text-2xl my-4 font-semibold">All Products</h1>

        <ProductList
          products={products}
          setProducts={setProducts}
        ></ProductList>
      </div>
    </div>
  );
};

export default AllProduct;
