import React from 'react'
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import GetAPI from '../../APIHooks/GetAPI';
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => {
    const [logo, setLogo] = React.useState([])
    const [information, setInformation] = React.useState([])
    const [description, setDescription] = React.useState([])

    // footer logo 
    useEffect(() => {
        GetAPI('logo', setLogo)
    }, [])


    // footer information
    useEffect(() => {
        GetAPI('footer-Info', setInformation)
    }, [])
    // footer description
    useEffect(() => {
        GetAPI('footer-description', setDescription)
    }, [])
    return (

        <footer className="bg-darkNavy ">
            <div className="px-8 sm:px-10 lg:px-[103px] pt-10 pb-5">
                <div className="flex gap-6 justify-center lg:justify-around  flex-wrap   md1:flex-wrap lg:flex-nowrap">
                    <div className="w-full  lg:w-2/5 ">
                        <div className="">
                            <Link to={"/"} className="flex items-center mb-2">
                                <img src={logo[0]?.footerLogoURL} className="w-[220px] mr-3" alt="KaufenzuHause Logo" />
                            </Link>
                            <p className="text-sm text-gray-300 w-full lg:w-3/4">
                                {description[0]?.description}
                            </p>

                            <div className="py-3">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl text-secondary ">
                                        <IoLocationOutline />

                                    </span>
                                    <h3 className="text-sm text-white">
                                        {information[0]?.address}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl text-secondary ">
                                        <AiOutlineMobile />

                                    </span>
                                    <h3 className="text-sm text-white">
                                        {information[0]?.phone}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl text-secondary ">
                                        <AiOutlineMail />

                                    </span>
                                    <h3 className="text-sm text-white">
                                        Email:  {information[0]?.email}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full  lg:w-1/5 mt-2">
                        <h2 className=" uppercase mb-4 text-sm font-semibold text-[#f7f7f7]  dark:text-white">
                            About
                        </h2>
                        <ul className="text-gray-300 flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">

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
                    </div> */}
                    <div className="w-full  lg:w-1/5 mt-2">
                        <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] uppercase dark:text-white">
                            Help
                        </h2>
                        <ul className="text-gray-300 flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">

                            <li>
                                <a to="" className="hover:underline">
                                    Return and Placement
                                </a>
                            </li>
                            <li>
                                <ReactWhatsapp number="+4917662058329">
                                    Chat with us
                                </ReactWhatsapp>

                            </li>
                            <li>
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
                                    Instagram
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
                <div className="lg:flex lg:items-center lg:justify-center flex-col-reverse md:flex-col-reverse lg:flex-row">
                    <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400 ">
                        © 2023{" "}
                        <Link to={"/"} className="hover:underline">
                            Kaufenzuhause
                        </Link>
                        . All Rights Reserved. <a href="https://miskaturs-portfolio.netlify.app/">Developed by Miskat and Team</a>

                    </span>
                    {/* footer icon */}

                </div>
            </div>3
        </footer >

    )
}

export default Footer