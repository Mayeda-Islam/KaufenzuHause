import React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import { IoIosArrowDown } from "react-icons/io";
import DeleteItems from "../../../APIHooks/DeleteItems";

const HeroBannerTable = ({ bannerImage, setBannerImage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (id) => {
    DeleteItems(`banner-slider/${id}`, setBannerImage);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] w-full text-sm text-left text-textColor bg-gray-200/60">
          <tr className="py-4 text-lg font-semibold text-white rounded-lg">
            <th scope="col" className="px-6 py-3    capitalize">
              SL
            </th>
            <th scope="col" className="px-6 py-3    capitalize">
              Image
            </th>

            <th scope="col" className="px-6 py-3    capitalize">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {bannerImage?.map((image, index) => (
            <>
              <tr
                key={image._id}
                className="bg-white border-b  border-[#D0D2DA]"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>

                <td className="px-6 py-4">
                  <img
                    src={image?.bannerImageBE}
                    alt="Slider Image"
                    className="w-14  rounded"
                  />
                </td>

                <td className="px-6 py-4">
                  <div>
                    <button
                      onClick={() => handleClick(image?._id)}
                      className="py-2 px-3 text-sm font-medium  flex items-center"
                    >
                      <button>Delete</button>
                    </button>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroBannerTable;
