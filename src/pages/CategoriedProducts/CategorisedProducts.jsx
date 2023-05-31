import React, { useEffect, useRef, useState } from 'react'
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import RangeSlider from '../../Shared/RangeSlider/RangeSlider';
import CategoryFilter from '../../Shared/CategoryFilter/CategoryFilter';
import BrandFilter from '../../Shared/BrandFilter/BrandFilter';
import { TbFilter } from 'react-icons/tb';

import { AiFillCloseCircle } from 'react-icons/ai';
import './CategorisedProducts.css';
import { useLocation, useParams } from 'react-router-dom';
import GetAPI from '../../APIHooks/GetAPI';

const CategorisedProducts = () => {
    const { id } = useParams()
    const navWrapper = useRef();
    //state for filter nav
    const [isOpen, setIsopen] = useState(false);

    const handleToggle = () => {
        //alert('clicked')
        isOpen === true ? setIsopen(false) : setIsopen(true);

    }

    console.log(isOpen)


    //close sidenav when clicking outside
    useEffect(() => {


        const handleClickOutside = (event) => {
            if (isOpen &&
                navWrapper.current &&
                !navWrapper.current.contains(event.target)
            ) {
                setIsopen(false);



            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        //return wrapper.current;

    }, [isOpen]);

    const [category, setCategory] = useState({})
    const [productData, setProductData] = useState([]);
    console.log(productData)

    useEffect(() => {
        GetAPI(`categories/${id}`, setCategory)
    }, [id])

    useEffect(() => {
        GetAPI(`product/${category?.categoryTitle}`, setProductData)
    }, [category?.categoryTitle])

    const location = useLocation();
    useEffect(() => {
        const text = location.state?.searchState;
        if (text) {
            const filteredProducts = productData.filter((prod) => prod.categoryName?.toLowerCase().includes(text?.toLowerCase()));
            setProductData(filteredProducts);
        } else {
            setProductData(productData);
        }


    }, [productData, location.state?.searchState]);

    return (
        <section className="pt-6 lg:pt-10 pb-14 bg-[#f7f7f7] relative">
            <div className=" w-[95%] mx-auto">
                {/* display sidenav filter */}
                <div className="flex items-center justify-center lg:hidden mb-5 relative">


                    <div
                        ref={navWrapper}
                        className={`side_nav shadow-lg shadow-gray-300 ${isOpen == true ? 'active' : ''}`}

                    >
                        <button
                            className="close_btn "
                            onClick={handleToggle}
                        >
                            <AiFillCloseCircle />
                        </button>
                        <div className="mobile_menu px-4">

                            <div className="mx-2.5">
                                {/* rangle slider */}
                                <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5"> Filter by price</h2>
                                <RangeSlider />
                                <hr className="my-5 border0.5 border-gray-300" />

                                {/* category filter */}
                                <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5"> Filter by Category</h2>
                                <CategoryFilter />

                                <hr className="my-5 border0.5 border-gray-300" />

                                {/* Brand filter */}
                                <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5"> Filter by Brands</h2>
                                <BrandFilter />

                                {/* <hr className="my-5 border0.5 border-gray-300" /> */}
                            </div>

                        </div>
                    </div>

                </div>



                {/* left and right content */}
                <div className="flex justify-center flex-wrap">
                    <div className="w-3/12 hidden md:hidden lg:block">
                        <div className="mx-2.5">
                            {/* rangle slider */}
                            <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5"> Filter by price</h2>
                            <RangeSlider />
                            <hr className="my-5 border0.5 border-gray-300" />

                            {/* category filter */}
                            <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5"> Filter by Category</h2>
                            <CategoryFilter />

                            <hr className="my-5 border0.5 border-gray-300" />

                            {/* Brand filter */}
                            <h2 className="text-[16px] uppercase text-textColor font-semibold mb-5"> Filter by Brands</h2>
                            <BrandFilter />

                            {/* <hr className="my-5 border0.5 border-gray-300" /> */}
                        </div>

                    </div>
                    <div className="w-full md:w-full lg:w-9/12">
                        {/* product sorting */}

                        <div className="flex items-center justify-between mx-2 mb-3">
                            <button
                                onClick={handleToggle}
                                className=' md:flex lg:invisible bg-white py-1.5 rounded-md px-4 text-textColor hover:text-white text-[16px] border border-textColor flex items-center gap-2 hover:bg-textColor hover:border-textColor'>
                                <TbFilter className='text-blue-500 text-lg' />
                                <span>Filter</span>
                            </button>
                            <select name="" id="" className='px-4 py-3'>
                                <option value="">Sort By: Popularity</option>
                                <option value="">Sort By: Latest</option>
                                <option value="">Sort By: Price low to high</option>
                                <option value="">Sort By: Price low to high</option>
                            </select>
                        </div>

                        {/* product cards */}
                        <div className="grid md:grid-cols-3 lg:grid-cols-4">


                            {
                                productData.map((product) => (

                                    <SingleProduct product={product} key={product?._id} />

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default CategorisedProducts