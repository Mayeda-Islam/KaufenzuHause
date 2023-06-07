import React, { useEffect, useState } from "react";
import CategorySectionOne from "../../components/Home/CategorySection/CategorySectionOne";

import BannerSlider from "../../components/Home/BannerSlider/BannerSlider";
import AllCategories from "../../components/Home/AllCategories/AllCategories";
import TopratedProducts from "../../components/TopRatedProducts/TopratedProducts";
import GetAPI from "../../APIHooks/GetAPI";

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    GetAPI('products', setProducts)
  }, [])

  const [categoriesSlider, setCategoriesSlider] = useState([])

  const headphones = products?.filter((data) => data?.category === 'Headphone');
  const headphonesSlider = categoriesSlider?.filter((data) => data?.category == 'Headphone');
  const watches = products.filter((data) => data?.category === 'Watch');
  const watchesSlider = categoriesSlider?.filter((data) => data?.category == 'Watch');

  console.log(headphonesSlider)


  useEffect(() => {
    GetAPI('category-slider', setCategoriesSlider)

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <BannerSlider />
      <AllCategories />
      {
        products?.length > 0 &&
        <TopratedProducts products={products} />
      }
      {
        headphones?.length > 0 &&
        <CategorySectionOne products={headphones} sliders={headphonesSlider} title={'Headphones and Accessories'}></CategorySectionOne>
      }
      {
        watches?.length > 0 &&
        <CategorySectionOne products={watches} sliders={watchesSlider} title={'Watches and Accessories'}></CategorySectionOne>
      }
      {
        watches?.length > 0 &&
        <CategorySectionOne products={watches} sliders={watchesSlider} title={'Electronics & Appliances'}></CategorySectionOne>
      }

      {
        headphones?.length > 0 &&
        <CategorySectionOne products={headphones} sliders={headphonesSlider} title={'Lifestyles'}></CategorySectionOne>
      }
    </>
  );
};

export default Home;
