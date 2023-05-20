import React from "react";
import CategorySectionOne from "../../components/Home/CategorySection/CategorySectionOne";
import CategorySectionTwo from "../../components/Home/CategorySection/CategorySectionTwo";
import CategorySectionThree from "../../components/Home/CategorySection/CategorySectionThree";
import CategorySectionFour from "../../components/Home/CategorySection/CategorySectionFour";
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
      <CategorySectionTwo></CategorySectionTwo>
      <CategorySectionThree></CategorySectionThree>
      <CategorySectionFour></CategorySectionFour>
    </>
  );
};

export default Home;
