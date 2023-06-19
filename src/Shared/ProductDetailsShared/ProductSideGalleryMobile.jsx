// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect } from "react";
import { useState } from "react";

const ProductSideGalleryMobile = ({ product }) => {
  return (
    <div className="block lg:hidden">
      <Swiper navigation={true} modules={[Navigation]}>
        {product?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="Images" className="w-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSideGalleryMobile;
