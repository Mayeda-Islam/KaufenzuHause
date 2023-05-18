import React from "react";

import products from "../../../Shared/FakeDataProducts";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import CategorySlider from "../../../Shared/CategorySlider/CategorySlider";

const CategorySectionOne = () => {
  return (
    <div>
      <div className="mx-auto w-4/5">
        {" "}
        <h1 className="my-7 text-xl font-semibold">Electronics & Appliances</h1>
        <hr className="my-6" />
        <div className="grid grid-rows-3 grid-cols-[464px_auto] gap-x-6 pb-5">
          <div className="row-span-3  ">
            <CategorySlider></CategorySlider>
          </div>
          <div className="row-span-3">
            <div className=" grid grid-cols-3 gap-4 ">
              {products.map((product) => (
                <ProductCard product={product} key={product.id}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySectionOne;
