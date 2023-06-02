import React, { useEffect, useState } from "react";
import CategorySectionOne from "../../components/Home/CategorySection/CategorySectionOne";
import CategorySectionTwo from "../../components/Home/CategorySection/CategorySectionTwo";
import CategorySectionThree from "../../components/Home/CategorySection/CategorySectionThree";
import CategorySectionFour from "../../components/Home/CategorySection/CategorySectionFour";
import BannerSlider from "../../components/Home/BannerSlider/BannerSlider";
import AllCategories from "../../components/Home/AllCategories/AllCategories";
import TopratedProducts from "../../components/TopRatedProducts/TopratedProducts";
import GetAPI from "../../APIHooks/GetAPI";

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    GetAPI('products', setProducts)
  }, [])
  return (
    <>
      <BannerSlider />
      <AllCategories />
      {
        products.length &&
        <TopratedProducts products={products} />
      }
      {/* <CategorySectionOne></CategorySectionOne> */}
      {/* <CategorySectionTwo></CategorySectionTwo> */}
      {/* <CategorySectionThree></CategorySectionThree> */}
      {/* <CategorySectionFour></CategorySectionFour> */}
    </>
  );
};

export default Home;
