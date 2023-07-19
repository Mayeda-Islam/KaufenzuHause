// Import Swiper React components
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductSideGalleryMobile = ({ product }) => {
  return (
    <div className="block sm:hidden">
      <Carousel
        autoPlay
        showThumbs={false}
        swipeable={true}
        showStatus={true}
        emulateTouch={true}
        dynamicHeight={true}
      >
        {

          product?.images?.map((image, index) => (
            <div key={index} className='w-full'>
              <img src={image} className='w-full h-full' />
            </div>))
        }



      </Carousel>
    </div>
  );
};

export default ProductSideGalleryMobile;
