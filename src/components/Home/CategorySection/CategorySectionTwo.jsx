import React from "react";
// import CategorySlider from "../../../Shared/CategorySlider/CategorySlider";
import categoryImage2 from "../../../images/category section/Gadget_1.jpg";
import categoryImage1 from "../../../images/category section/Gadget_2.jpg";

import ProductCard from "../../../Shared/ProductCard/ProductCard";
import products from "../../../Shared/FakeDataProducts";
import CategorySlider from "../../../Shared/CategorySlider/CategorySlider";

const CategorySectionTwo = () => {
  const sliderImages = [categoryImage1, categoryImage2];
  return (
    <div className="shadow-md pb-14">
      <div className="mx-auto w-[90%]">
        {" "}
        <h1 className="my-7 text-xl font-semibold">Gadgets</h1>
        <hr className="my-6" />
        <div className="flex  justify-center">
          <div className="w-4/12   hidden md:block ">
            <CategorySlider sliderImages={sliderImages}></CategorySlider>
          </div>
          <div className="w-8/12">
            <div className="flex flex-wrap items-center ">
              {products.map((product, i) => (
                <ProductCard product={product} key={i}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySectionTwo;
