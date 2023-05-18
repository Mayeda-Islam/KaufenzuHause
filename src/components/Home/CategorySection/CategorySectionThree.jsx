import React from "react";
import CategorySlider from "../../../Shared/CategorySlider/CategorySlider";
import products from "../../../Shared/FakeDataProducts";
import ProductCard from "../../../Shared/ProductCard/ProductCard";

const CategorySectionThree = () => {
  return (
    <div className="shadow-md pb-14">
      <div className="mx-auto w-[90%]">
        {" "}
        <h1 className="my-7 text-xl font-semibold">Lifestyles</h1>
        <hr className="my-6" />
        <div className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-[464px_auto] gap-x-6 pb-5">
          <div className="row-span-3 hidden md:block ">
            <CategorySlider></CategorySlider>
          </div>
          <div className="row-span-3">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
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

export default CategorySectionThree;
