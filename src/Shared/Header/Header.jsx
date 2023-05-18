import React from 'react'
import logo from '../../images/logo/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import engFlag from '../../images/header/eng.png';


const Header = () => {
    return (
        <header className='bg-darkNavy py-4 px-[40px]'>
            <div className="flex items-center justify-between">
                {/* brand logo */}
                <span className=''>
                    <Link>
                        <img src={logo} className='w-36' alt="" />
                    </Link>
                </span>
                {/* search bar */}
                <form>
                    <div className="flex ">

                        <div className="relative w-full rounded-lg">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-[600px] rounded-lg z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg outline-none" placeholder="Search for products, brands and more..." required />
                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#7ED957] rounded-r-lg  hover:bg-[#7ed9579a]">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="flex items-center gap-5">
                    {/* language dropdown */}
                    <div className="flex items-center gap-1">
                        <img src={engFlag} alt="" className="w-[20px]" />
                        <span className="text-base uppercase font-medium text-white">
                            EN
                        </span>
                        <button className="text-sm text-gray-400">
                            <AiOutlineCaretDown />
                        </button>
                    </div>
                    {/* button group */}
                    <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
                        Register
                    </button>
                    <button className="text-sm text-darkNavy bg-white hover:text-white hover:bg-transparent border border-white py-2 px-6 rounded-sm">
                        Login
                    </button>
                    <span className="text-2xl text-white">
                        < CgShoppingCart />
                    </span>

                </div>


            </div>
        </header>
    )
}

export default Header