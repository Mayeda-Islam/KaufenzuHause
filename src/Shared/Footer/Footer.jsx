import React from 'react'
import logo from '../../images/logo/logo.png';
import paymentImg from '../../images/logo/payment.svg';
import paymentImg2 from '../../images/logo/payment2.svg';
import paymentImg3 from '../../images/logo/payment3.svg';
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="bg-darkNavy ">
            <div className="px-8 sm:px-10 lg:px-[103px] pt-10 pb-10">
                <div className="flex gap-6 justify-center lg:justify-around  flex-wrap   md1:flex-wrap lg:flex-nowrap">
                    <div className="w-full  lg:w-2/5 ">
                        <div className="">
                            <Link to={"/"} className="flex items-center mb-2">
                                <img src={logo} className="w-[220px] mr-3" alt="KaufenzuHause Logo" />
                            </Link>
                            <p className="text-sm text-gray-300 w-full lg:w-3/4">
                                Machen Sie das Einkaufen von zu Hause aus einfacher.
                            </p>

                            <div className="py-3">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl text-secondary ">
                                        <IoLocationOutline />

                                    </span>
                                    <h3 className="text-sm text-white">
                                        Berliner strasse,  60311,  Frankfurt am main,  Germany
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl text-secondary ">
                                        <AiOutlineMobile />

                                    </span>
                                    <h3 className="text-sm text-white">
                                        (049) 1766-2058329
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl text-secondary ">
                                        <AiOutlineMail />

                                    </span>
                                    <h3 className="text-sm text-white">
                                        Email: KaufenzuHause@info.com
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  lg:w-1/5 mt-2">
                        <h2 className=" uppercase mb-4 text-sm font-semibold text-[#f7f7f7]  dark:text-white">
                            About
                        </h2>
                        <ul className="text-gray-300 flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                            <li className="">
                                <Link to={'aboutUs'} className="hover:underline">
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
                    <div className="w-full lg:w-1/5 mt-2 ">
                        <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] uppercase dark:text-white">
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
                <div className="lg:flex lg:items-center lg:justify-between flex-col-reverse md:flex-col-reverse lg:flex-row">
                    <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400 ">
                        © 2023{" "}
                        <Link to={"/"} className="hover:underline">
                            Kaufanzuhause
                        </Link>
                        . All Rights Reserved. <a href="https://miskaturs-portfolio.netlify.app/">Developed by Miskat and Team</a>

                    </span>
                    {/* footer icon */}
                    <div className='flex items-center gap-3 mt-3 lg:mt-0'>
                        <span className="text-sm text-gray-400">
                            Payment Methods
                        </span>
                        <div className="flex gap-2 bg-white py-1 px-2 rounded">
                            <img src={paymentImg} className='' alt="" />
                            <img src={paymentImg2} className='' alt="" />
                            <img src={paymentImg3} className='' alt="" />
                        </div>
                    </div>
                </div>
            </div>3
        </footer >

    )
}

export default Footer