import React from 'react';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const ProductInfo = () => {
    //save the color and size data 
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    //handle color and size clear on click
    const handleColorClear = () => {


        setSelectedColor(null);

    }

    const handleSizeClear = () => {



        setSelectedSize(null);
    }


    //add the item to the cart


    return (
        <div>
            <h2 className="text-textPrimary font-semibold text-xl md:text-3xl mb-2">Gaming Headphone</h2>

            <div className="flex items-center gap-2 text-textPrimary py-1    text-base  bg-white " >
                <span className='line-through text-gray-500'>$89</span>
                <span className=''>$49</span>
            </div>

            <p className="my-4 text-gray-500 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis </p>
            {/* dot and size slider */}
            <div className=" my-4">
                {/* price tag */}

                {/* color dot  slide */}
                <div>
                    <span className='block text-sm font-normal text-textColor'>Color : {selectedColor ? selectedColor : "No Color Selected"} </span>
                    <div className="flex items-center gap-3 mt-2">
                        {/* color item */}

                        {/* clear button */}
                        <button
                            onClick={handleColorClear}
                            className='text-textColor flex items-center text-[14px]'>
                            <MdClose />
                            <span>Clear</span>
                        </button>
                    </div>
                </div>

                {/* choose a  size  */}
                <div className='mt-4'>
                    <span className='block text-sm font-normal text-textColor'>Size : {selectedSize ? selectedSize : "No Size Selected"} </span>
                    <div className="flex items-center gap-3 mt-2">
                        {/* size item */}

                        {/* clear button */}
                        <button
                            onClick={handleSizeClear}
                            className='text-textColor flex items-center text-[14px]'>
                            <MdClose />
                            <span>Clear</span>
                        </button>
                    </div>

                </div>


            </div>
            {/* cart button and increment */}
            <div className="flex items-center my-4 gap-5">
                {/* increment and decrement btn */}
                <div className="flex gap-1">
                    <button className="w-9 h-9 rounded  bg-gray-100 border border-gray-300">+</button>
                    <span className='w-9 h-9 rounded border border-gray-300 bg-bgOne flex items-center justify-center'>5</span>
                    <button className="w-9 h-9 rounded  bg-gray-100 border border-gray-300">-</button>
                </div>

                {/* add to cart button */}
                <button

                    className=" text-white py-2 px-7  hover: rounded text-sm  bg-primary   border-2 border-transparent hover:border-textColor  hover:bg-transparent hover:text-textColor capilatize" >
                    Add to Cart
                </button>
                {/* add to wishlist */}

            </div>
            <hr className='my-3 border-0.5 border-gray-200' />
            {/* product others info */}
            <div className="flex items-center gap-3 mb-2">
                <span className='block text-[16px] font-medium text-textColor'>Category : </span>
                <span className='block text-sm font-normal text-textColor'>Headphone</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
                <span className='block text-[16px] font-medium text-textColor'>Brand  : </span>
                <span className='block text-sm font-normal text-textColor'>Apple</span>
            </div>
        </div>
    );
};

export default ProductInfo;