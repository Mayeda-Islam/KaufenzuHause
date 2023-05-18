// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import categoryImage1 from "../../images/category section/Home_appliances_1.jpg";
import categoryImage2 from "../../images/category section/Home_Appliances_2_1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const CategorySlider = ({ bannerImages }) => {
  console.log(bannerImages);
  return (
    <>
      <Swiper
        speed={3000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={categoryImage1} className="w-full h-[600px]" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImage2} className="w-full h-[600px]" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default CategorySlider;
