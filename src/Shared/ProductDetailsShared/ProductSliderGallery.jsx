import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSliderGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="w-full hidden lg:block">
      <Swiper
        style={{
          "--swiper-navigation-color": "#232f3e",
          "--swiper-pagination-color": "#232f3e",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        observer={true}
      >
        {product?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="Images" className="w-full lg:h-[500px]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        observer={true}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper my-2"
      >
        {product?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="Images" className="w-full lg:h-[150px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSliderGallery;
