import React from 'react'
import laptop from '../../../images/categoryIcons/laptop.png';
import mobile from '../../../images/categoryIcons/mobile.png';
import tv from '../../../images/categoryIcons/tv.png';
import camera from '../../../images/categoryIcons/camera.png';
import headPhones from '../../../images/categoryIcons/headPhones.png';
import smartwatch from '../../../images/categoryIcons/smartwatch.png';


const AllCategories = () => {
    const categories = [
        {
            _id: 1,
            categoryName: "Laptop",
            categoryImg: laptop

        },
        {
            _id: 2,
            categoryName: "mobile",
            categoryImg: mobile

        },
        {
            _id: 3,
            categoryName: "tv",
            categoryImg: tv

        },
        {
            _id: 4,
            categoryName: "camera",
            categoryImg: camera

        },
        {
            _id: 5,
            categoryName: "smartwatch",
            categoryImg: smartwatch

        },
        {
            _id: 6,
            categoryName: "headPhones",
            categoryImg: headPhones

        }
    ]
    return (
        <section className="pt-10 pb-14 bg-white">
            <div className=" w-[95%] lg:w-[90%] mx-auto">
                {/* section title */}
                <h2 className="text-2xl text-textColor font-semibold text-left capitalize">
                    All Categories
                </h2>
                <hr className="border border-gray-300 mt-6 mb-8" />
                <div className="flex items-center justify-center md:gap-4 lg:gap-6 flex-wrap lg:flex-nowrap">
                    {
                        categories.map((category) => (
                            <div className="w-6/12 md:w-3/12 xl:w-2/12 " key={category._id}>
                                <div className="m-3 xxl:h-[160px] md:m-0 rounded shadow-lg bg-white shadow-gray-300 px-10 py-6 text-center">
                                    <div className="flex justify-center items-center">
                                        <img src={category.categoryImg} className="w-[50px]" alt="" />
                                    </div>
                                    <h3 className="text-textColor font-medium text-lg  capitalize py-3">
                                        {category.categoryName}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    )
}

export default AllCategories