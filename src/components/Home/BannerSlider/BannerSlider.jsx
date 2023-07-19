import React, { useEffect } from 'react'
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import GetAPI from '../../../APIHooks/GetAPI';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
    const [sliders, setSliders] = React.useState([]);
    const [bannerImage, setBannerImage] = useState([]);
    useEffect(() => {
        GetAPI("hero-slider", setSliders);
    }, []);

    useEffect(() => {
        GetAPI("banner-slider", setBannerImage);
    }, []);

    return (
        <section className=" py-10 ">
            <div className="w-[95%] mx-auto">
                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-8/12 h-[300px] lg:h-[400px] xxl:h-[500px]">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation, Autoplay]}

                        >
                            {
                                sliders?.map((slider) => {
                                    const { _id, imageURL, url } = slider;
                                    return (
                                        <SwiperSlide key={_id}>
                                            <Link to={url}>
                                                <div
                                                    className='rounded-lg'

                                                >
                                                    <img src={imageURL} className="w-full h-[300px] lg:h-[400px]  xl:min-h-[500px] rounded-lg " alt="" />
                                                </div>
                                            </Link>

                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>


                    </div>
                    <div className="w-full lg:w-4/12 max-h-[600px]">
                        <div className="hidden  lg:flex lg:flex-col flex-row gap-3 ">
                            <Link to={bannerImage[0]?.url}>
                                <img src={bannerImage[0]?.imageURL} className=" w-full h-[150px] lg:h-[193px]  xl:min-h-[243px] rounded-lg" alt="" />
                            </Link>
                            <Link to={bannerImage[1]?.url}>
                                <img src={bannerImage[1]?.imageURL} className=" w-full h-[150px] lg:h-[193px]  xl:min-h-[243px] rounded-lg" alt="" />
                            </Link>
                        </div>
                        <div className=" flex flex-row lg:hidden gap-3">
                            <div className="w-6/12">
                                <Link to={bannerImage[0]?.url}>
                                    <img src={bannerImage[0]?.imageURL} className=" w-full h-[150px] lg:h-auto rounded-lg" alt="" />
                                </Link>
                            </div>
                            <div className="w-6/12">
                                <Link to={bannerImage[1]?.url}>
                                    <img src={bannerImage[1]?.imageURL} className=" w-full h-[150px] lg:h-auto rounded-lg" alt="" />
                                </Link>
                            </div>

                        </div>
                    </div>



                </div>
            </div>




        </section>
    )
}

export default BannerSlider


