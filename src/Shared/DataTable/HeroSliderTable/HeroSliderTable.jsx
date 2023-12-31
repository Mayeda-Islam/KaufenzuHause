import React from "react";
import DeleteItems from "../../../APIHooks/DeleteItems";

const HeroSliderTable = ({ image, setImage }) => {
  const handleClick = (id) => {
    DeleteItems(`hero-slider/${id}`, setImage);
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
              Slider Image
            </th>

            <th scope="col" className="px-6 py-3    capitalize">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {image?.map((image, index) => (
            <>
              <tr className="bg-white border-b  border-[#D0D2DA]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>

                <td className="px-6 py-4">
                  <img
                    src={image?.imageURL}
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
                      <span>Delete</span>
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

export default HeroSliderTable;

{
  /* <Menu
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
                                    </Menu> */
}
