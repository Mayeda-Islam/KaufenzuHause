import React from "react";
import productImg1 from "../../images/products/pr1.jpg";
import productImg2 from "../../images/products/pr2.jpg";
import productImg4 from "../../images/products/pr4.jpg";
import productImg5 from "../../images/products/pr5.jpg";
import productImg6 from "../../images/products/pr6.jpg";
import productImg7 from "../../images/products/pr7.jpg";
import productImg8 from "../../images/products/pr8.jpg";
import productImg9 from "../../images/products/pr9.jpg";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from 'react-router-dom';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopRatedProducts.css";
import SwiperCustomArrow from "../../Shared/SwiperCustomArrow/SwiperCustomArrow";

const TopratedProducts = () => {
  const products = [
    {
      _id: 1,
      img: productImg1,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "On Sale",
    },
    {
      _id: 2,
      img: productImg2,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "Sold Out",
    },
    {
      _id: 3,
      img: productImg6,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "On Sale",
    },
    {
      _id: 4,
      img: productImg4,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "Sold Out",
    },
    {
      _id: 5,
      img: productImg5,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "On Sale",
    },
    {
      _id: 6,
      img: productImg6,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "Sold Out",
    },
    {
      _id: 7,
      img: productImg7,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "Sold Out",
    },
    {
      _id: 8,
      img: productImg8,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "Sold Out",
    },
    {
      _id: 9,
      img: productImg9,
      title: "Logitech Driving Force Shifter (941-000132)",
      price: "1500",
      size: "available",
      discount: "50%",
      categoryName: "Electronics",
      productStatus: "Sold Out",
    },
  ];

  return (
    <section className="pt-10 pb-14 bg-[#f7f7f7] relative">
      <div className=" w-[95%] lg:w-[90%] mx-auto">
        {/* section title */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-textColor font-semibold text-left capitalize">
            Top Rated Products
          </h2>
          {/* view all button */}
          <button className="text-sm font-[400] text-textColor bg-transparent  hover:text-white hover:bg-primary border-2 border-textColor py-2 px-4 rounded-sm hover:border-primary">
            View All
          </button>
        </div>

        <hr className="border border-gray-300 mt-6 mb-8" />

        <Swiper
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },

            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              width: 1200,
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          // slidesPerView="auto"
          // loop={true}
          loopFillGroupWithBlank={false}
          // navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            // loop: true
          }}
          // centeredSlides={true}
          modules={[Pagination, Navigation, Autoplay]}
          // freeMode={true}
          // modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products?.map((product) => {
            const {
              _id,
              img,
              title,
              categoryName,
              price,
              productStatus,
              size,
              discount,
            } = product;
            return (
              <SwiperSlide key={_id}>
                <div className="">
                  <div className="m-3 border border-gray-200 rounded prod_card ">
                    <div className="relative overflow-hidden">
                      <img
                        src={img}
                        className="w-[400px] md:w-[400px] h-[250px] lg:w-[300px] object-cover md:h-[210px]"
                      />
                      {/* button group */}
                      <div className="absolute top-4 left-4 ">
                        <button className="py-1 px-3 bg-primary text-sm text-white  block rounded mb-2">
                          {productStatus}
                        </button>
                        <span className="py-1 px-2 bg-secondary text-sm text-white rounded-sm  text-center ">
                          {discount}
                        </span>
                      </div>
                      {/* wishlist button */}
                      {/* <div className="absolute top-4 right-4  cart_bag">
                                            <button className='bg-white border border-gray-200 shadow-xl shadow-gray-300 text-textPrimary text-lg w-10 h-10 rounded-full flex items-center justify-center'><RiShoppingBagLine /></button>
                                        </div> */}

                      {/* quick view button */}
                      <div className="absolute -bottom-[100%] w-full left-0 right-0 bg-[#191919] text-center py-3 quick_view cursor-pointer">
                        <span className="text-white text-base font-medium uppercase">
                          Add To cart
                        </span>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="p-3 overflow-hidden">
                      <span className="text-sm text-gray-600 my-2 capitalize">
                        {categoryName}
                      </span>
                      <h3 className="text-base text-medium text-textPrimary mb-1">
                        {title}
                      </h3>
                      {/* rating icon */}

                      <div class="flex items-center">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          4.95 out of 5
                        </p>
                      </div>

                      {/* product price */}
                      <span className="text-lg font-semibold text-textPrimary my-2 pb-2">
                        ${price}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperCustomArrow />
        </Swiper>
      </div>
    </section>
  );
};

export default TopratedProducts;
