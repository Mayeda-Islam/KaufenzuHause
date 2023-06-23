import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Jodit from "../../../Shared/JodIt/Jodit";
import ColorAndSizeOptions from "../../../Shared/ColorAndSizeOptions/ColorAndSizeOptions";
import GetAPI from "../../../APIHooks/GetAPI";
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
const UpdateProductModal = ({
  setOpenUpdateModal,
  openUpdateModal,
  updatedProduct,
}) => {
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateDescriptionGerman, setUpdateDescriptionGerman] = useState("");

  const [updateShipping, setUpdateShipping] = useState("");
  const [updateShippingGerman, setUpdateShippingGerman] = useState("");
  const [updateSizes, setUpdateSizes] = useState([]);
  const [updateColors, setUpdateColors] = useState([]);

  const updateAvailableColors = updatedProduct?.colors;
  console.log(updateAvailableColors);
  const updateAvailableSizes = updatedProduct?.sizes;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const handleUpdateProduct = (data) => {
    console.log(data);
  };
  console.log(updatedProduct);
  return (
    <div>
      <Modal
        keepMounted
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="outline-none focus:outline-none ">
            <div className=" w-full ">
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b-0.5 border-gray-300">
                  <div className="w-full p-5">
                    <div>
                      <h1 className="text-3xl w-11/12 mx-auto font-medium">
                        Add Product
                      </h1>
                      <form
                        onSubmit={handleSubmit(handleUpdateProduct)}
                        className=" mx-auto mt-10 col-span-12"
                      >
                        <label className="block ">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Product title
                          </span>
                          <input
                            type="text"
                            {...register("productTitle", { required: true })}
                            defaultValue={updatedProduct?.productTitle}
                            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                            placeholder="Product title"
                          />
                          {errors?.productTitle && (
                            <p className="text-red-500 text-sm ">
                              Product title is required
                            </p>
                          )}
                        </label>

                        <label className="block mt-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-2">
                            Product title (In German)
                          </span>
                          <input
                            type="text"
                            {...register("productTitleGerman", {
                              required: true,
                            })}
                            defaultValue={updatedProduct?.productTitleGerman}
                            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                            placeholder="Product title"
                          />
                          {errors?.productTitleGerman && (
                            <p className="text-red-500 text-sm ">
                              Product title is required
                            </p>
                          )}
                        </label>
                        <label className="block mt-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Product Price
                          </span>
                          <input
                            type="number"
                            {...register("productPrice", { required: true })}
                            defaultValue={updatedProduct?.productPrice}
                            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                            placeholder="price"
                          />
                          {errors?.productPrice && (
                            <p className="text-red-500 text-sm ">
                              Product price is required
                            </p>
                          )}
                        </label>

                        <div className=" mt-4">
                          <label className="block ">
                            <span className="after:content-['(Optional)'] after:ml-0.5 after:text-green-400 block text-sm font-medium">
                              Previous Price
                            </span>
                            <input
                              type="number"
                              {...register("previousPrice")}
                              defaultValue={updatedProduct?.previousPrice}
                              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                              placeholder="previous price"
                            />
                          </label>
                        </div>

                        <label className="block mt-4">
                          <span className="after:content-['(Optional)'] after:ml-0.5 after:text-green-400  block text-sm font-medium">
                            Model
                          </span>
                          <input
                            type="text"
                            {...register("model")}
                            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                            placeholder="model name"
                          />
                        </label>

                        <div className="my-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
                            Product Description
                          </span>
                          <Jodit
                            setContent={setUpdateDescription}
                            content={updateDescription}
                          />
                        </div>
                        <div className="my-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
                            Product Description (In German)
                          </span>
                          <Jodit
                            setContent={setUpdateDescriptionGerman}
                            content={updateDescriptionGerman}
                          />
                        </div>
                        <div className="my-4">
                          <span className="my-2 block text-sm font-medium">
                            Sizes
                          </span>
                          <ColorAndSizeOptions
                            productsOptions={updateAvailableSizes}
                            setState={setUpdateSizes}
                          ></ColorAndSizeOptions>
                        </div>
                        <div className="my-4">
                          <span className="my-2 block text-sm font-medium">
                            Colors
                          </span>
                          <ColorAndSizeOptions
                            productsOptions={updateAvailableColors}
                            setState={setUpdateColors}
                            state={updateColors}
                          ></ColorAndSizeOptions>
                        </div>
                        <div className=" mt-4">
                          <label className="block ">
                            <span className=" block text-sm font-medium">
                              Total Product
                            </span>
                            <input
                              type="number"
                              {...register("totalProduct")}
                              defaultValue={updatedProduct?.totalProduct}
                              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                              placeholder="total product"
                            />
                          </label>
                        </div>
                        <div className="my-4">
                          <label
                            // for="default"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Add Category
                          </label>
                          <select
                            {...register("category", { required: true })}
                            defaultValue={updatedProduct?.category}
                            className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                          >
                            {categories?.map((categoryProduct) => (
                              <>
                                <option value={categoryProduct.categoryTitle}>
                                  {categoryProduct.categoryTitle}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>
                        <div className=" mt-4">
                          <label className="block ">
                            <span className=" block text-sm font-medium">
                              Brand
                            </span>
                            <input
                              type="text"
                              {...register("brand")}
                              defaultValue={updatedProduct?.brand}
                              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                              placeholder="brand"
                            />
                          </label>
                        </div>
                        <div className="my-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
                            Shipping
                          </span>
                          <Jodit
                            setContent={setUpdateShipping}
                            content={updateShipping}
                          ></Jodit>
                        </div>
                        <div className="my-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
                            Shipping (In German)
                          </span>
                          <Jodit
                            setContent={setUpdateShippingGerman}
                            content={updateShippingGerman}
                          ></Jodit>
                        </div>

                        <div>
                          <div className="my-4">
                            <h1 className="text-lg font-medium">
                              Image preview :{" "}
                            </h1>
                            <div className="flex gap-2">
                              {/* {images?.map((image, index) => (
                              <div key={index}>
                                <img src={image} alt="" className="w-24 h-24" />
                              </div>
                            ))} */}
                            </div>
                          </div>

                          <label className="text-lg lg:w-1/6  font-semibold lg:text-xl">
                            Image:
                          </label>
                          <div className="flex flex-col w-full">
                            <input
                              type="file"
                              // onChange={handleImage}
                              accept="image/*"
                              multiple
                              // defaultValue={user?.email}

                              className="mt-2 w-full px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block  rounded-md sm:text-sm "
                              placeholder="category title"
                            />
                            {errors?.categoryImage && (
                              <p className="text-red-500 text-sm ">
                                Category image/svg/icon is required
                              </p>
                            )}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="bg-[#55c3c1f7] py-2 px-7  text-white font-medium rounded-md mt-4 ml-auto block"
                        >
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProductModal;
