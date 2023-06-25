import React, { useContext } from "react";
import SingleProduct from "../../Shared/SingleProduct/SingleProduct";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import RangeSlider from "../../Shared/RangeSlider/RangeSlider";
import CategoryFilter from "../../Shared/CategoryFilter/CategoryFilter";
// import BrandFilter from "../../Shared/BrandFilter/BrandFilter";
import { TbFilter } from "react-icons/tb";
import { useRef } from "react";
import serverUrl from "../../config/Config";
import { Context } from "../../ContextProvider/ContextProvider";
import { Box, CircularProgress } from "@mui/material";

const AllProducts = () => {
  const { isLoading } = useContext(Context);
  const navWrapper = useRef();
  //state for filter nav
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    //alert('clicked')
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  //close sidenav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navWrapper.current &&
        !navWrapper.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //return wrapper.current;
  }, [isOpen]);
  const [filterInputs, setFilterInputs] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [priceRange, setPriceRange] = React.useState([0, 1000]);

  useEffect(() => {
    fetch(`${serverUrl}/products`)
      .then((response) => response.json())
      .then((result) => {
        if (result?.status == "success") {
          setAllProductData(result?.data);
        }
      });
  }, []);

  useEffect(() => {
    setProductData(allProductData);
  }, [allProductData]);

  const handleFilterProducts = (_value) => {
    if (filterInputs.includes(_value)) {
      const filterResult = filterInputs.filter((data) => data !== _value);
      setFilterInputs(filterResult);
    } else {
      setFilterInputs([...filterInputs, _value]);
    }
  };

  const handlePriceRange = (_min, _max) => {
    console.log(_min, _max);
  };

  useEffect(() => {
    if (filterInputs.length > 0 || priceRange[1] > 0) {
      const filterResult = allProductData.filter(
        (data) =>
          (filterInputs.length === 0 || filterInputs.includes(data.category)) &&
          (priceRange[1] === 0 ||
            (data.productPrice >= priceRange[0] &&
              data.productPrice <= priceRange[1]))
      );
      setProductData(filterResult);
    }
  }, [filterInputs, priceRange]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-6 lg:pt-10 pb-14 bg-[#f7f7f7] relative">
      <div className=" w-[95%] mx-auto">
        {/* display sidenav filter */}
        <div className="flex items-center justify-center lg:hidden mb-5 relative">
          <div
            ref={navWrapper}
            className={`side_nav shadow-lg shadow-gray-300 ${
              isOpen == true ? "active" : ""
            }`}
          >
            <button className="close_btn " onClick={handleToggle}>
              <AiFillCloseCircle />
            </button>
            <div className="mobile_menu px-4">
              <div className="mx-2.5">
                {/* rangle slider */}
                <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5">
                  {" "}
                  Filter by price 99
                </h2>
                <RangeSlider />
                <hr className="my-5 border0.5 border-gray-300" />

                {/* category filter */}
                <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5">
                  {" "}
                  Filter by Category
                </h2>
                <CategoryFilter
                  filterInputs={filterInputs}
                  handleFilterProducts={handleFilterProducts}
                />

                <hr className="my-5 border0.5 border-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* left and right content */}
        <div className="flex justify-center flex-wrap">
          <div className="w-3/12 hidden md:hidden lg:block">
            <div className="mx-2.5">
              {/* rangle slider */}
              <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5">
                {" "}
                Filter by price 777
              </h2>
              <RangeSlider
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handlePriceRange={handlePriceRange}
              />
              <hr className="my-5 border0.5 border-gray-300" />

              {/* category filter */}
              <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5">
                {" "}
                Filter by Category
              </h2>
              <CategoryFilter
                filterInputs={filterInputs}
                handleFilterProducts={handleFilterProducts}
              />
              <hr className="my-5 border0.5 border-gray-300" />
            </div>
          </div>
          <div className="w-full md:w-full lg:w-9/12">
            {/* product sorting */}

            <div className="flex items-center justify-between mx-2 mb-3">
              <button
                onClick={handleToggle}
                className=" md:flex lg:invisible bg-white py-1.5 rounded-md px-4 text-textColor hover:text-white text-[16px] border border-textColor flex items-center gap-2 hover:bg-textColor hover:border-textColor"
              >
                <TbFilter className="text-blue-500 text-lg" />
                <span>Filter</span>
              </button>
              <select name="" id="" className="px-4 py-3">
                <option value="">Sort By: Popularity</option>
                <option value="">Sort By: Latest</option>
                <option value="">Sort By: Price low to high</option>
                <option value="">Sort By: Price low to high</option>
              </select>
            </div>

            {/* product cards */}
            {!isLoading ? (
              <>
                {productData?.length > 0 ? (
                  <div className="grid md:grid-cols-3 lg:grid-cols-4">
                    {productData?.map((product) => (
                      <SingleProduct product={product} key={product?._id} />
                    ))}
                  </div>
                ) : (
                  <div className="my-32  justify-center items-center flex">
                    <p className="text-lg font-semibold text-center">
                      No Products Available
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-center h-screen flex justify-center items-center">
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
