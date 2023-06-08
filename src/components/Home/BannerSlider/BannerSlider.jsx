import React, { useEffect } from 'react'
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import GetAPI from '../../../APIHooks/GetAPI';
import { useState } from 'react';

const BannerSlider = () => {
    const [sliders, setSliders] = React.useState([]);
    const [bannerImage, setBannerImage] = useState([]);
    useEffect(() => {
        GetAPI("hero-slider", setSliders);
    }, []);

    useEffect(() => {
        GetAPI("banner-slider", setBannerImage);
    }, []);
    // const sliders = [
    //     {
    //         _id: 1,
    //         bannerImg: slider1
    //     },
    //     {
    //         _id: 2,
    //         bannerImg: slider2
    //     },
    //     {
    //         _id: 3,
    //         bannerImg: slider3
    //     },
    // ]
    return (
        <section className=" py-10 ">
            <div className="w-[95%] mx-auto">
                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-8/12 h-[300px] lg:h-[400px] xxl:h-[500px]">



                        <Swiper

                            // breakpoints={{
                            //     // when window width is >= 320px
                            //     320: {

                            //         slidesPerView: 1,
                            //     },

                            //     // when window width is >= 640px
                            //     640: {

                            //         slidesPerView: 1,
                            //     },
                            //     // when window width is >= 768px
                            //     768: {

                            //         slidesPerView: 1,
                            //     },
                            //     // when window width is >= 1024px
                            //     1024: {

                            //         slidesPerView: 1,
                            //     },
                            // }}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                        // className="mySwiper "
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        >
                            {
                                sliders?.map((slider) => {
                                    const { _id, imageURL } = slider;
                                    return (
                                        <SwiperSlide key={_id}>
                                            <div
                                                className='rounded-lg'

                                            >
                                                <img src={imageURL} className="w-full h-[300px] lg:h-[400px]  xl:min-h-[500px] rounded-lg " alt="" />
                                            </div>

                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>


                    </div>
                    <div className="w-full lg:w-4/12 max-h-[600px]">
                        <div className="hidden  lg:flex lg:flex-col flex-row gap-3 ">
                            <img src={bannerImage[0]?.imageURL} className=" w-full h-[150px] lg:h-[193px]  xl:min-h-[243px] rounded-lg" alt="" />
                            <img src={bannerImage[1]?.imageURL} className=" w-full h-[150px] lg:h-[193px]  xl:min-h-[243px] rounded-lg" alt="" />
                        </div>
                        <div className=" flex flex-row lg:hidden gap-3">
                            <div className="w-6/12">

                                <img src={bannerImage[0]?.imageURL} className=" w-full h-[150px] lg:h-auto rounded-lg" alt="" />
                            </div>
                            <div className="w-6/12">

                                <img src={bannerImage[1]?.imageURL} className=" w-full h-[150px] lg:h-auto rounded-lg" alt="" />
                            </div>

                        </div>
                    </div>



                </div>
            </div>


            {/* <div className="grid lg:grid-cols-12 gap-2 ">
                <div className="lg:col-span-7">



                    <Swiper

                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                width: 320,
                                slidesPerView: 1,
                            },

                            // when window width is >= 640px
                            640: {
                                width: 620,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 1,
                            },
                            // when window width is >= 1024px
                            1024: {
                                width: 1024,
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper "
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {
                            sliders?.map((slider) => {
                                const { _id, bannerImg } = slider;
                                return (
                                    <SwiperSlide key={_id}>
                                        <div
                                            className='rounded-lg w-full '
                                        // style={{
                                        //     background: `url(${bannerImg})`,
                                        //     backgroundPosition: 'center center',
                                        //     backgroundSize: 'cover',
                                        //     backgroundRepeat: 'no-repeat',
                                        //     width: 800,
                                        //     minHeight: 400,


                                        // }}
                                        >
                                            <img src={bannerImg} className="h-96 w-[700px]" alt="" />
                                        </div>

                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>


                </div>
                <div className="lg:col-span-5 ">
                    <div className="grid grid-cols-2  lg:row-span-2 gap-2">
                        <img src={sidBanner1} className=" w-full h-[188px] " alt="" />
                        <img src={sidBanner2} className="w-full  h-[188px]" alt="" />
                    </div>

                </div>



            </div> */}


        </section>
    )
}

export default BannerSlider


// flex lg:flex-col flex-row gap-[9px]
