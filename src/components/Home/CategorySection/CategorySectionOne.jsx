
import CategorySlider from "../../../Shared/CategorySlider/CategorySlider";
import SingleProduct from "../../../Shared/SingleProduct/SingleProduct";
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const CategorySectionOne = ({ products, sliders, title }) => {
  return (
    <div className="shadow-md pb-14">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {" "}
        <div className="flex my-7 items-center justify-between">
          <h1 className=" text-xl lg:text-2xl font-semibold">{title}</h1>
          {/* view all button  */}
          <button className="hidden sm:hidden md:block text-sm font-[400] text-textColor bg-transparent  hover:text-white hover:bg-primary border-2 border-textColor py-2 px-4 rounded-sm hover:border-primary">
            View All
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex  justify-center">
          <div className="w-4/12  hidden md:block ">
            <div className="mx-2">
              <CategorySlider sliderImages={sliders}></CategorySlider>
            </div>
          </div>
          <div className="w-full lg:w-8/12 ">
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
              {products?.slice(0, 6)?.map((product, i) => (
                // <ProductCard product={product} key={i}></ProductCard>
                <SingleProduct product={product} key={i} />
              ))}
            </div>
            <div className="block md:hidden">
              <Swiper

                breakpoints={{
                  // when window width is >= 320px
                  320: {

                    slidesPerView: 1,
                  },
                  // when window width is >= 400px
                  400: {

                    slidesPerView: 2,
                  },

                  // when window width is >= 640px
                  640: {

                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {

                    slidesPerView: 3,
                  },
                  // when window width is >= 1024px
                  1024: {
                    width: 1024,
                    slidesPerView: 4,
                  },
                  1400: {
                    width: 1400,
                    slidesPerView: 5,
                  },
                  1916: {
                    width: 1916,
                    slidesPerView: 5,
                  },
                }}
                slidesPerView={4}
                // slidesPerView="auto"
                // loop={true}
                loopfillgroupwithblank="false"

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
                {
                  products?.slice(0, 6)?.map((product) => {
                    const { _id } = product;
                    return (
                      <SwiperSlide key={_id}>
                        <SingleProduct product={product} />
                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CategorySectionOne;

//grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-2
//grid grid-cols-1 lg:grid-rows-3 md:grid-cols-[480px_auto] lg:grid-cols-[500px_auto] gap-x-6  pb-5
