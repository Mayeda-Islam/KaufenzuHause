import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import GetAPI from '../../APIHooks/GetAPI';
// import { categories } from '../../Data/Placeholder';

const Sidenav = ({ toggleSidebar, cateWrapper, sidebar, setSidebar }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        GetAPI('categories', setCategories)
    }, [])


    useEffect(() => {
        const handleClickOutsideCategory = (event) => {
            if (sidebar &&
                cateWrapper.current &&
                !cateWrapper.current.contains(event.target)
            ) {
                setSidebar(false);



            }
        };
        document.addEventListener("mousedown", handleClickOutsideCategory);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideCategory);
        }

        //return wrapper.current;

    }, [sidebar]);
    return (
        <div
            ref={cateWrapper}
            className={`category_nav w-[80%] lg:w-[23%] shadow-lg shadow-gray-500 ${sidebar == true ? 'left-0' : ''}`}

        >

            <button
                className="absolute right-[15px] top-[15px] bg-none outline-none border-none text-[#f9f9f9] hover:text-[#ddd] text-[2rem] p-[0.5rem] cursor-pointer transition-all duration-[0.3s]"
                onClick={toggleSidebar}
            >
                <AiFillCloseCircle />
            </button>
            <div className="pt-5  ">

                <h2 className="text-xl font-medium text-white capitalize my-4">Category Items</h2>
                <div className="text-left pt-3">
                    <ul className='p-0 m-0 text-gray-300  text-[15px] font-normal  '>
                        {
                            categories.map((cat) => (
                                <li key={cat._id} className={`py-4 px-4 m-0 ${cat.borderClass} `}>
                                    <Link className={`  px-5  capitalize block m-0`}>
                                        <div className="flex  items-center gap-5">
                                            <img src={cat.image} className='w-[22px] h-[22px] ' />
                                            <span className='hover:text-white transition-all duration-300 focus:text-white'>{cat.categoryTitle}</span>
                                        </div>

                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>




            </div>
        </div>
    )
}

export default Sidenav