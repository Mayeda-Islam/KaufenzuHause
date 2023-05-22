import React from 'react'

const Sidenav = () => {
    return (

        <div
            ref={navWrapper}
            className={`bg-white w-[80%] h-[100%] fixed left-[-100%] z-[9999] top-0 py-[4.9rem] overflow-x-hidden shadow-lg shadow-gray-300 text-center transition-all delay-[0.7s] ${isOpen == true ? 'left-0' : ''}`}

        >


            <button
                className="absolute right-[29px] top-[10px] bg-none border-none text-[2rem] p-[0.5rem] cursor-pointer transition-all delay-[0.3s] text-[#111] hover:text-[#222]"
                onClick={handleToggle}
            >
                <AiFillCloseCircle />
            </button>
            <ul className="mobile_menu">

                <li>
                    <a
                        href="/"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'


                    >Home</a>
                </li>
                <li >
                    <a
                        href="/about"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                    >
                        About Us
                    </a>
                </li>

                <li >
                    <a
                        href="/products"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                    >
                        Our Products
                    </a>
                </li>
                <li >
                    <a
                        href="/news-media"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                    >
                        News and Media
                    </a>
                </li>
                <li >
                    <a
                        href="/blogs"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                    >
                        Blogs
                    </a>
                </li>
                <li >
                    <a
                        href="/adminDashboard"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                    >
                        Dashboard
                    </a>
                </li>
                <li >
                    <a
                        href="/contact"
                        className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                    >
                        Contact
                    </a>
                </li>
                <li>
                    <Link to={"/"}><button className=' px-2  py-2 rounded text-white border bg-primary border-primary text-base'>Appoinments +</button></Link>
                </li>


            </ul>
        </div>
    )
}

export default Sidenav