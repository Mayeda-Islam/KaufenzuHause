import React from "react";
import CategorySectionOne from "../../components/Home/CategorySection/CategorySectionOne";
import BannerSlider from "../../components/Home/BannerSlider/BannerSlider";
import AllCategories from "../../components/Home/AllCategories/AllCategories";
import TopratedProducts from "../../components/TopRatedProducts/TopratedProducts";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <AllCategories />
      <TopratedProducts />
      <CategorySectionOne></CategorySectionOne>
    </>
  );
};

export default Home;
