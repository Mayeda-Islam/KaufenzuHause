import React from 'react'
import logo from '../../images/logo/logo.png';
import paymentImg from '../../images/logo/payment.svg';
import paymentImg2 from '../../images/logo/payment2.svg';
import paymentImg3 from '../../images/logo/payment3.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="bg-darkNavy ">
            <div className="px-8 sm:px-10 lg:px-[103px] pt-10 pb-10">
                <div className="flex gap-6 justify-center lg:justify-around  flex-wrap   md1:flex-wrap lg:flex-nowrap">
                    <div className="w-full  lg:w-2/5 ">
                        <div className="">
                            <Link to={"/"} className="flex items-center mb-5">
                                <img src={logo} className="h-8 mr-3" alt="KaufenzuHause Logo" />
                            </Link>

                        </div>
                    </div>
                    <div className="w-full  lg:w-1/5 mt-2">
                        <h2 className=" uppercase mb-4 text-sm font-semibold text-[#f7f7f7]  dark:text-white">
                            About
                        </h2>
                        <ul className="text-gray-300 flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                            <li className="">
                                <Link to={""} className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/refound-return" className="hover:underline">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-conditions" className="hover:underline">
                                    Why Shop with us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full  lg:w-1/5 mt-2">
                        <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] uppercase dark:text-white">
                            Help
                        </h2>
                        <ul className="text-gray-300 flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                            <li>
                                <a to="" className="hover:underline">
                                    Payment
                                </a>
                            </li>
                            <li>
                                <a to="" className="hover:underline">
                                    Shiping
                                </a>
                            </li>
                            <li>
                                <a to="" className="hover:underline">
                                    Return and Placement
                                </a>
                            </li>
                            <li>
                                <a to="" className="hover:underline">
                                    Chat with us
                                </a>
                            </li> <li>
                                <a to="" className="hover:underline">
                                    Our support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full  lg:w-1/5 mt-2 ">
                        <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">
                            Social
                        </h2>
                        <ul className="text-gray-300 flex flex-col gap-y-2 text-sm font-normal capitalize mb-8">
                            <li>
                                <Link to="">
                                    FaceBook
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    You Tube
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-300 border-1.5 sm:mx-auto  lg:my-6" />
                <div className="lg:flex lg:items-center lg:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <Link to={"/"} className="hover:underline">
                            Renix
                        </Link>
                        . All Rights Reserved. <a href="https://thinkystorm.com">Develop by ThinkyStorm</a>

                    </span>
                    {/* footer icon */}
                    <div className='flex items-center gap-3'>
                        <span className="text-sm text-gray-400">
                            Payment Methods
                        </span>
                        <img src={paymentImg} className='' alt="" />
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer