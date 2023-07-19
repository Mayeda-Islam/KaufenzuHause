import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Jodit from "../../../Shared/JodIt/Jodit";
import ColorAndSizeOptions from "../../../Shared/ColorAndSizeOptions/ColorAndSizeOptions";
import GetAPI from "../../../APIHooks/GetAPI";

import UpdatedApi from "../../../APIHooks/UpdatedItem";
import serverUrl from "../../../config/Config";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: { md: "80%", xs: "98%" },
  maxHeight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "scroll",
  bgcolor: "white",
};


const UpdateProductModal = ({
  setOpenUpdateModal,
  openUpdateModal,
  updatedProduct,
  setProducts
}) => {
  const [imageList, setImageList] = useState([])
  const [updateDescription, setUpdateDescription] = React.useState("");
  const [updateDescriptionGerman, setUpdateDescriptionGerman] = useState("");
  const [updateShipping, setUpdateShipping] = useState("");
  const [updateShippingGerman, setUpdateShippingGerman] = useState("");

  const [updateSizes, setUpdateSizes] = useState([]);
  const [updateColors, setUpdateColors] = useState([]);

  const [categories, setCategories] = useState([]);

  const updateAvailableColors = updatedProduct?.colors;
  const updateAvailableSizes = updatedProduct?.sizes;

  useEffect(() => {
    setUpdateDescription(updatedProduct?.description)
    setUpdateDescriptionGerman(updatedProduct?.descriptionGerman)
    setUpdateShipping(updatedProduct?.shipping)
    setUpdateShippingGerman(updatedProduct?.shippingGerman)
    setImageList(updatedProduct?.images)
  }, [
    updatedProduct?.description,
    updatedProduct?.descriptionGerman,
    updatedProduct?.shipping,
    updatedProduct?.shippingGerman,
    updatedProduct?.images
  ])

  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);


  const handleImage = async (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);


    fetch(`${serverUrl}/singleImageUpload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data)
        if (data.status === "success") {
          console.log("Response:", data)
          setImageList((prevState) => [...prevState, data?.url]);
        }
      })

  };


  const handleRemoveImage = (index) => {
    setImageList((prevState) => {
      const updatedImageList = [...prevState];
      updatedImageList.splice(index, 1);
      return updatedImageList;
    });
  };








  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const handleUpdateProduct = (data) => {
    console.log(data, "updated product");

    const productData = {
      productTitle: data?.productTitle || updatedProduct?.productTitle,

      productTitleGerman: data?.productTitleGerman || updatedProduct?.productTitleGerman,

      productPrice: data?.productPrice || updatedProduct?.productPrice,

      previousPrice: data?.previousPrice || updatedProduct?.previousPrice,
      totalProduct: data?.totalProduct || updatedProduct?.totalProduct,
      model: data?.model || updatedProduct?.model,

      description: updateDescription || updatedProduct?.description,
      category: data?.category || updatedProduct?.category,
      categoryGerman: data?.categoryGerman || updatedProduct?.categoryGerman,
      descriptionGerman: updateDescriptionGerman || updatedProduct?.descriptionGerman,

      shipping: updateShipping || updatedProduct?.shipping,

      shippingGerman: updateShippingGerman || updatedProduct?.shippingGerman,

      colors: updateColors || updatedProduct?.colors,

      sizes: updateSizes || updatedProduct?.sizes,

      images: imageList || updatedProduct?.images,
    };
    console.log(productData);
    UpdatedApi(
      `productPatch/${updatedProduct?._id}`,
      setProducts,
      productData
    );
    setOpenUpdateModal(false);
  };
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
            <div className="w-full">
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b-0.5 border-gray-300">
                  <div className="w-full p-5">
                    <div>
                      <h1 className="text-3xl text-center w-11/12 mx-auto font-medium">
                        Updated Product
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
                            {...register("productTitle", { required: false })}
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
                              required: false,
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
                            {...register("productPrice", { required: false })}
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
                            defaultValue={updatedProduct?.model}
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
                            {...register("category", { required: false })}
                            defaultValue={updatedProduct?.category}
                            className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                          >
                            {categories?.map((categoryProduct) => (
                              <>
                                <option value={categoryProduct?.categoryTitle} selected={categoryProduct?.categoryTitle === updatedProduct?.category}>
                                  {categoryProduct?.categoryTitle}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>

                        <div className="my-4">
                          <label
                            // for="default"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Add Category In German
                          </label>
                          <select
                            {...register("categoryGerman", { required: false })}
                            defaultValue={updatedProduct?.categoryGerman}
                            className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                          >
                            {categories?.map((categoryProduct) => (
                              <>
                                <option value={categoryProduct?.categoryTitleGerman} selected={categoryProduct?.categoryTitleGerman === updatedProduct?.categoryGerman}>
                                  {categoryProduct?.categoryTitleGerman}
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
                            <div className="flex gap-3 relative" >
                              {imageList?.map((image, index) => (
                                <div key={index} className='relative'>
                                  <img src={image} alt="" className="w-24 h-24" />
                                  <p onClick={() => handleRemoveImage(index)} className='text-red-500 text-xl font-semibold rounded-full p-2 -top-3 -right-2 absolute'>x</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <label className="text-lg lg:w-1/6  font-semibold lg:text-xl">
                            Image:
                          </label>
                          <div className="flex flex-col w-full">
                            <input
                              type="file"
                              onChange={handleImage}
                              accept="image/*"
                              className="mt-2 w-full px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block  rounded-md sm:text-sm "
                            />

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
