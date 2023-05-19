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
      <div className="mx-auto w-4/5">
        {" "}
        <h1 className="my-7 text-xl font-semibold">Electronics & Appliances</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-[464px_auto] gap-x-6 pb-5">
          <div className="row-span-3 hidden md:block ">
            <CategorySlider sliderImages={sliderImages}></CategorySlider>
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

export default CategorySectionOne;
