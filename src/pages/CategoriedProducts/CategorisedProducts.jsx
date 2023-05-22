import React from 'react'
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import RangeSlider from '../../Shared/RangeSlider/RangeSlider';
import CategoryFilter from '../../Shared/CategoryFilter/CategoryFilter';
import { products } from '../../Data/Placeholder';
import BrandFilter from '../../Shared/BrandFilter/BrandFilter';
import { TbFilter } from 'react-icons/tb';
import Sidenav from '../../Shared/Sidenav/Sidenav';

const CategorisedProducts = () => {
    const navWrapper = useRef();
    //state for filter nav
    const [isOpen, setIsopen] = useState(false);

    const handleToggle = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }


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

    return (
        <section className="pt-8 lg:pt-10 pb-14 bg-[#f7f7f7] relative">
            <div className=" w-[97%] mx-auto">
                <div className="flex items-center justify-center lg:hidden mb-5">
                    <button
                        onClick={handleToggle}
                        className='bg-white py-1.5 rounded-md px-4 text-textColor hover:text-white text-[16px] border border-textColor flex items-center gap-2 hover:bg-textColor hover:border-textColor'>
                        <TbFilter className='text-blue-500 text-lg' />
                        <span>Filter</span>
                    </button>
                </div>
                {/* display sidenav filter */}
                <Sidenav isOpen={isOpen} setIsopen={setIsopen} handleToggle={handleToggle} navWrapper={navWrapper} />

                {/* right content */}
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

                            <hr className="my-5 border0.5 border-gray-300" />
                        </div>

                    </div>
                    <div className="w-full md:w-full lg:w-9/12">
                        {/* product sorting */}
                        <div className="text-right mr-2.5 mb-3">
                            <select name="" id="" className='px-4 py-3'>
                                <option value="">Sort By: Popularity</option>
                                <option value="">Sort By: Latest</option>
                                <option value="">Sort By: Price low to high</option>
                                <option value="">Sort By: Price low to high</option>
                            </select>
                        </div>

                        {/* product cards */}
                        <div className="flex justify-center flex-wrap ml-2.5">


                            {
                                products.map((product) => (
                                    <div className="w-full md:w-6/12 lg:w-4/12">
                                        <SingleProduct product={product} />
                                    </div>
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