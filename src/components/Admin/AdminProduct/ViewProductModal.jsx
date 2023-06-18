import { Box, Modal } from "@mui/material";
import parse from "html-react-parser";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: { md: "50%", xs: "98%" },
  maxHeight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "scroll",
  bgcolor: "white",
};
const ViewProductModal = ({ open, setOpen, product }) => {
  console.log(product);
  const {
    brand,
    category,
    colors,
    delivery,
    description,
    images,
    previousPrice,
    productPrice,
    productTitle,
    sizes,
    totalProduct,
  } = product;
  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="outline-none focus:outline-none ">
          <div className=" ">
            <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b-0.5 border-gray-300">
                <div className="p-5">
                  <div className=" flex justify-center items-center">
                    <div className="flex flex-wrap gap-4">
                      {images?.map((image) => (
                        <>
                          <img src={image} className=" w-20 h-20" alt="" />
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="relative my-8  overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody className="p-8">
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Brand Name
                          </td>
                          <td>{brand}</td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Product Name
                          </td>
                          <td>{productTitle}</td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Category Name
                          </td>
                          <td>{category}</td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Total Product
                          </td>
                          <td>{totalProduct}</td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Previous Price
                          </td>
                          <td>{previousPrice}</td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Present Price
                          </td>
                          <td>{productPrice}</td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Colors
                          </td>
                          <td>
                            {" "}
                            {colors?.map((color) => (
                              <>
                                <span>{color} </span>
                              </>
                            ))}
                          </td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Sizes
                          </td>
                          <td>
                            {" "}
                            {sizes?.map((size) => (
                              <>
                                <span>{size} </span>
                              </>
                            ))}
                          </td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 flex justify-items-start py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Description
                          </td>
                          <td className="text-justify px-6 py-4">
                            {description
                              ? parse(description)
                              : " No Description available"}
                          </td>
                        </tr>
                        <tr className="bg-white border-b  border-[#D0D2DA]">
                          <td
                            scope="row"
                            className="px-6 flex justify-items-start py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Delivery
                          </td>
                          <td className="text-justify px-6 py-4">
                            {delivery
                              ? parse(delivery)
                              : "No Delivery description available"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewProductModal;
