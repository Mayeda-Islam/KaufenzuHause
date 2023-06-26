import React, { useEffect } from "react";
import CategorySectionOne from "../../components/Home/CategorySection/CategorySectionOne";

import BannerSlider from "../../components/Home/BannerSlider/BannerSlider";
import AllCategories from "../../components/Home/AllCategories/AllCategories";
import TopratedProducts from "../../components/TopRatedProducts/TopratedProducts";
import GetAPI from "../../APIHooks/GetAPI";
import { useContext } from "react";
import { Context } from "../../ContextProvider/ContextProvider";

const Home = () => {
  const { products } = useContext(Context)
  console.log('products in home', products);
  const [categoriesSlider, setCategoriesSlider] = React.useState([]);

  const headphones = products?.filter((data) => data?.category === ("Headphone" || "Headphone Accessories"));
  const headphonesSlider = categoriesSlider?.filter(
    (data) => data?.category === ("Headphone" || "Headphone Accessories")
  );

  const watches = products?.filter((data) => data?.category === ("Watch" || "Smart Watch"));
  const watchesSlider = categoriesSlider?.filter(
    (data) => data?.category === ("Watch" || "Smart Watch")
  );

  const electronics = products?.filter(
    (data) => data?.category === ("Electronics" || "Mobile Accessories")
  );
  const electronicsSlider = categoriesSlider?.filter(
    (data) => data?.category === ("Electronics" || "Mobile Accessories")
  );

  const lifeStyles = products?.filter(
    (data) => data?.category === ("Shirt" || "Pant" || "Shoes" || "Wallet")
  );
  const lifeStylesSlider = categoriesSlider?.filter(
    (data) => data?.category === ("Shirt" || "Pant" || "Shoes" || "Wallet")
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
