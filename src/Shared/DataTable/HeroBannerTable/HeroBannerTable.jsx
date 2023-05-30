import React from 'react'
import { useState } from 'react';
import Menu from "@mui/material/Menu";
import { IoIosArrowDown } from 'react-icons/io';

const HeroBannerTable = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="w-full text-sm text-left text-textColor bg-gray-200/60">
                    <tr className='py-4 rounded-lg'>
                        <th scope="col" className="px-6 py-3  text-[13px] font-medium capitalize">
                            Seriol No
                        </th>
                        <th scope="col" className="px-6 py-3  text-[13px] font-medium capitalize">
                            Image
                        </th>

                        <th scope="col" className="px-6 py-3  text-[13px] font-medium capitalize">
                            Action
                        </th>
                    </tr>

                </thead>
                <tbody>
                    <tr className="bg-white border-b border-[#D0D2DA]">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            01
                        </th>

                        <td className="px-6 py-4">
                            <img src={''} className='w-26  rounded' alt="doctor image" />
                        </td>



                        <td className="px-6 py-4">
                            <div>
                                <button
                                    onClick={handleClick}
                                    className="py-2 px-3 text-sm font-medium text-white bg-primary rounded-lg  hover:bg-secondary flex items-center"
                                >
                                    <span> Action</span>
                                    <span className={`ml-2 hidden md:block`}><IoIosArrowDown /></span>
                                </button>

                                <Menu
                                    sx={{ width: 150, maxWidth: "100%", }}
                                    id="tableDropdown"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                >
                                    <div className="w-40 p-3 ">
                                        {['Edit', 'Delete']?.map((data, index) => {
                                            return (
                                                <div key={index}>
                                                    <button
                                                        onClick={(e) => {
                                                            handleActionButton(e.target.value);
                                                            setAnchorEl(null);
                                                        }}
                                                        value={data}
                                                        className="text-center"
                                                    >
                                                        {data}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Menu>
                            </div>
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>
    )
}

export default HeroBannerTable