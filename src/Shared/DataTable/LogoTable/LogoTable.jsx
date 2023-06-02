import React from "react";
import DeleteItems from "../../../APIHooks/DeleteItems";
import BorderColorIcon from "@mui/icons-material/BorderColor";
// import DeleteItems from "../../../APIHooks/DeleteItems";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UpdatedApi from "../../../APIHooks/UpdatedItem";

const LogoTable = ({
  setSelectedCategory,
  categorySliders,
  setCategorySliders,
  handleUpdateCategory,
}) => {
  const handleClick = (id) => {
    DeleteItems(`category-slider/${id}`, setCategorySliders);
  };

  // const handleUpdateCategory=()=>{
  //   UpdatedApi(`category-slider/${id}`)
  // }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] w-full text-sm text-left text-textColor bg-gray-200/60">
          <tr className="py-4 text-lg font-semibold text-white rounded-lg">
            <th scope="col" className="px-6 py-3    capitalize">
              SL
            </th>
            <th scope="col" className="px-6 py-3    capitalize">
              Logo
            </th>

            <th scope="col" className="px-6 py-3    capitalize">
              Delete
            </th>
            <th scope="col" className="px-6 py-3    capitalize">
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {categorySliders?.map((category, index) => (
            <>
              <tr className="bg-white border-b  border-[#D0D2DA]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>

                <td className="px-6 py-4">
                  <img
                    src={category.categorySliderImage}
                    alt="Slider Image"
                    className="w-14  rounded"
                  />
                </td>

                <td className="px-6 py-4">
                  <div>
                    <button
                      onClick={() => handleClick(category?._id)}
                      className="py-2 px-3 text-sm font-medium  flex items-center"
                    >
                      <span>
                        <DeleteForeverIcon />
                      </span>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <td className="text-[#55c3c1f7]">
                    <button onClick={() => setSelectedCategory(category)}>
                      <BorderColorIcon />
                    </button>
                  </td>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogoTable;
