import React from 'react'

import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopRatedProducts.css";
import SwiperCustomArrow from '../../Shared/SwiperCustomArrow/SwiperCustomArrow';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';


const TopratedProducts = ({ products }) => {
    return (
        <section className="pt-10 pb-14 bg-[#f7f7f7] relative">
            <div className=" w-[95%] lg:w-[90%] mx-auto">
                {/* section title  */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl text-textColor font-semibold text-left capitalize">
                        Top Rated Products
                    </h2>
                    {/* view all button  */}
                    <button className="hidden sm:hidden md:block text-sm font-[400] text-textColor bg-transparent  hover:text-white hover:bg-primary border-2 border-textColor py-2 px-4 rounded-sm hover:border-primary">
                        View All
                    </button>
                </div>

                <hr className="border border-gray-300 mt-6 mb-6" />

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
                        products?.slice(0, 20)?.map((product) => {
                            const { _id } = product;
                            return (
                                <SwiperSlide key={_id}>
                                    <SingleProduct product={product} />
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperCustomArrow />
                </Swiper>


            </div>
        </section>

    )
}

export default TopratedProducts