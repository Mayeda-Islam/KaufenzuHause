import React from 'react'
import { useSwiper } from 'swiper/react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const SwiperCustomArrow = () => {
    const swiper = useSwiper();
    return (
        <div className="swiper-nav-btns hidden lg:block">
            <button className=' absolute left-[50%] top-[94%] hidden' onClick={() => swiper.slidePrev()}><HiOutlineArrowNarrowLeft /></button>
            <button className=' absolute left-[56%] top-[94%] hidden' onClick={() => swiper.slideNext()}><HiOutlineArrowNarrowRight /></button>
        </div>
    )
}

export default SwiperCustomArrow