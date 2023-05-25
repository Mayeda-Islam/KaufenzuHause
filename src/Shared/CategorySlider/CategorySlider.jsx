// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const CategorySlider = ({ sliderImages }) => {
  console.log(sliderImages);
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
        {sliderImages?.map((sliderImage, i) => (
          <SwiperSlide key={i} className="my-2">
            <img className="w-full lg:h-[740px] xxl:h-[740px] rounded-md object-cover" src={sliderImage} alt="" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src={categoryImage2} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default CategorySlider;
