import React, { useEffect, useState } from "react";
import CategorySectionOne from "../../components/Home/CategorySection/CategorySectionOne";

import BannerSlider from "../../components/Home/BannerSlider/BannerSlider";
import AllCategories from "../../components/Home/AllCategories/AllCategories";
import TopratedProducts from "../../components/TopRatedProducts/TopratedProducts";
import GetAPI from "../../APIHooks/GetAPI";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    GetAPI("products", setProducts);
  }, []);

  const [categoriesSlider, setCategoriesSlider] = useState([]);

  const headphones = products?.filter((data) => data?.category === "Headphone");
  const headphonesSlider = categoriesSlider?.filter(
    (data) => data?.category == "Headphone"
  );

  const watches = products?.filter((data) => data?.category === "Watch");
  const watchesSlider = categoriesSlider?.filter(
    (data) => data?.category === "Watch"
  );

  const electronics = products?.filter(
    (data) => data?.category === ("Electronics" || "Mobile Accessories")
  );
  const electronicsSlider = categoriesSlider?.filter(
    (data) => data?.category === ("Electronics" || "Mobile Accessories")
  );

  const lifeStyles = products?.filter(
    (data) => data?.category === ("Shirts" || "Pants" || "Shoes" || "wallet")
  );
  const lifeStylesSlider = categoriesSlider?.filter(
    (data) => data?.category === ("Shirts" || "Pants" || "Shoes" || "wallet")
  );
  console.log(lifeStyles, "from category product");
  useEffect(() => {
    GetAPI("category-slider", setCategoriesSlider);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerSlider />

      <AllCategories />

      {
        products?.length > 0 &&
        <TopratedProducts
          products={products}
        />
      }

      {
        headphones?.length > 0 &&
        (
          <CategorySectionOne
            products={headphones}
            sliders={headphonesSlider}
            title={"Headphones and Accessories"}
            titleGerman={"Kopfhörer und Zubehör"}
          >
          </CategorySectionOne>
        )
      }
      {watches?.length > 0 && (
        <CategorySectionOne
          products={watches}
          sliders={watchesSlider}
          title={"Watches and Accessories"}
          titleGerman={"Uhren und Zubehör"}
        ></CategorySectionOne>
      )}
      {electronics?.length > 0 && (
        <CategorySectionOne
          products={electronics}
          sliders={electronicsSlider}
          title={"Electronics & Appliances"}
          titleGerman={"Elektronik und Haushaltsgeräte"}
        ></CategorySectionOne>
      )}
      {lifeStyles?.length > 0 && (
        <CategorySectionOne
          products={lifeStyles}
          sliders={lifeStylesSlider}
          title={"Lifestyles"}
          titleGerman={"Lebensstile"}
        ></CategorySectionOne>
      )}
    </>
  );
};

export default Home;
