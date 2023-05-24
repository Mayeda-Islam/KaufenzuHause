import products from "../../../Shared/FakeDataProducts";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import categoryImage1 from "../../../images/category section/Home_appliances_1.jpg";
import categoryImage2 from "../../../images/category section/Home_Appliances_2_1.jpg";
import CategorySlider from "../../../Shared/CategorySlider/CategorySlider";

const CategorySectionOne = () => {
  const sliderImages = [categoryImage1, categoryImage2];
  console.log(sliderImages);
  return (
    <div className="shadow-md pb-14">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {" "}

        <div className="flex my-7 items-center justify-between">
          <h1 className=" text-xl lg:text-2xl font-semibold">Electronics & Appliances</h1>
          {/* view all button  */}
          <button className="hidden sm:hidden md:block text-sm font-[400] text-textColor bg-transparent  hover:text-white hover:bg-primary border-2 border-textColor py-2 px-4 rounded-sm hover:border-primary">
            View All
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex  justify-center">
          <div className="w-4/12    hidden md:block ">
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

export default CategorySectionOne;

//grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-2
//grid grid-cols-1 lg:grid-rows-3 md:grid-cols-[480px_auto] lg:grid-cols-[500px_auto] gap-x-6  pb-5
