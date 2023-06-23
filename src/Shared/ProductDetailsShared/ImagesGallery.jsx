import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImagesGallery = ({ product }) => {
    return (
        <div className='w-full h-full hidden sm:block'>
            <Carousel
                autoPlay
                showThumbs={true}
                swipeable={true}
                showStatus={false}
                emulateTouch={true}
                thumbWidth={100}
                dynamicHeight={true}
            >
                {

                    product?.images?.map((image, index) => (
                        <div key={index} className='w-full h-[500px]'>
                            <img src={image} className='w-full h-full' />

                        </div>))
                }



            </Carousel>
        </div>
    );
};

export default ImagesGallery;