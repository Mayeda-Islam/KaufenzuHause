import React, { useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import './SideNav.css';
import { categories } from '../../Data/Placeholder';

const Sidenav = ({ toggleSidebar, cateWrapper, sidebar, setSidebar }) => {
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
            className={`category_nav  shadow-lg shadow-gray-500 ${sidebar == true ? 'left-0' : ''}`}

        >

            <button
                className="absolute right-[15px] top-[15px] bg-none outline-none border-none text-[#f9f9f9] hover:text-[#ddd] text-[2rem] p-[0.5rem] cursor-pointer transition-all duration-[0.3s]"
                onClick={toggleSidebar}
            >
                <AiFillCloseCircle />
            </button>
            <div className=" px-5 text-center">

                <h2 className="text-xl font-medium text-white capitalize my-4">Category Items</h2>
                <div className="text-center pt-4">
                    <ul className='p-0 m-0 text-gray-200 text-base font-normal '>
                        {
                            categories.map((cat) => (
                                <li key={cat._id} className={`${cat.borderClass}`}>
                                    <Link className={`  px-5 py-4 capitalize flex items-center justify-center flex-col`}>
                                        <div className="flex">
                                            <img src={cat.categoryImg} className='w-[25px] h-[25px] ' />
                                            <span className='ml-[20px] '>{cat.categoryName}</span>
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