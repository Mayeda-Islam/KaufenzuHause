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
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {" "}
        <div className="flex items-center justify-between my-7">
          <h1 className=" text-xl lg:text-2xl font-semibold">Gadgets</h1>
          {/* view all button  */}
          <button className="hidden sm:hidden md:block text-sm font-[400] text-textColor bg-transparent  hover:text-white hover:bg-primary border-2 border-textColor py-2 px-4 rounded-sm hover:border-primary">
            View All
          </button>
        </div>
        <hr className="my-6" />
        <div className="flex  justify-center">
          <div className="w-4/12   hidden md:block ">
            <div className="mx-2">
              <CategorySlider sliderImages={sliderImages}></CategorySlider>
            </div>
          </div>
          <div className="w-full lg:w-8/12">
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
