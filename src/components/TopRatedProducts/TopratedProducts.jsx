import React from 'react'
import productImg1 from '../../images/products/pr1.jpg';
import productImg2 from '../../images/products/pr2.jpg';
import productImg4 from '../../images/products/pr4.jpg';
import productImg5 from '../../images/products/pr5.jpg';
import productImg6 from '../../images/products/pr6.jpg';
import productImg7 from '../../images/products/pr7.jpg';
import productImg8 from '../../images/products/pr8.jpg';
import productImg9 from '../../images/products/pr9.jpg';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopRatedProducts.css";
import SwiperCustomArrow from '../../Shared/SwiperCustomArrow/SwiperCustomArrow';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';

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
            productStatus: "On Sale"
        },
        {
            _id: 2,
            img: productImg2,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "Sold Out"
        },
        {
            _id: 3,
            img: productImg6,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "On Sale"
        },
        {
            _id: 4,
            img: productImg4,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "Sold Out"
        },
        {
            _id: 5,
            img: productImg5,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "On Sale"
        },
        {
            _id: 6,
            img: productImg6,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "Sold Out"
        },
        {
            _id: 7,
            img: productImg7,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "Sold Out"
        },
        {
            _id: 8,
            img: productImg8,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "Sold Out"
        },
        {
            _id: 9,
            img: productImg9,
            title: "Logitech Driving Force Shifter (941-000132)",
            price: "1500",
            size: "available",
            discount: "50%",
            categoryName: "Electronics",
            productStatus: "Sold Out"
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
                    {
                        products?.map((product) => {
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