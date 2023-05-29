import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Jodit from "../../../Shared/JodIt/Jodit";
import ColorAndSizeOptions from "../../../Shared/ColorAndSizeOptions/ColorAndSizeOptions";

import serverUrl from "../../../config/Config";
import { MultipleImageUploader } from "../../../APIHooks/MultipleImageUploader";
// import { color } from "jodit/types/plugins/color/color";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [description, setDescription] = useState("");
  const [delivery, setDelivery] = useState("");
  const [shipping, setShipping] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const availableColors = [
    { title: "red" },
    { title: "black" },
    { title: "yellow" },
    { title: "purple" },
    { title: "violet" },
    { title: "white" },
  ];
  const availableSizes = [
    { title: "xs" },
    { title: "sm" },
    { title: "md" },
    { title: "lg" },
    { title: "xl" },
    { title: "xxl" },
  ];
  const categoryProducts = [
    { title: "Phone" },
    { title: "Mobile" },
    { title: "Tv" },
    { title: "Camera" },
    { title: "Smartwatch" },
    { title: "HeadPhones" },
  ];

  // const handleImage = async (event) => {
  //   const imageData = event.target.files;
  //   const formData = new FormData();

  //   // for (let i = 0; i < imageData.length; i++) {
  //   //   formData.append("image[]", imageData[i]);
  //   // }
  //   // console.log(formData, "from formData");

  //   // MultipleImageUploader(formData, setImages);
  // };
  const handleImage = async (event) => {
    const selectedImages = Array.from(event.target.files);
    setUploadedImage(selectedImages);
    MultipleImageUploader(uploadedImage, setImages);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    console.log(formData);
  };
  console.log(images);
  const handleAddProduct = (data) => {
    // console.log(data, description, shipping, delivery, sizes, colors);
    const productData = {
      ...data,
      description,
      shipping,
      delivery,
      colors,
      sizes,
    };
    fetch(`${serverUrl}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "post method");
        // if (data?.status === "success") {
        //   setCategories(data.data);
        // }
      });
  };
  return (
    <div>
      <h1 className="text-3xl w-11/12 mx-auto font-medium">Add Product</h1>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="w-4/5 mx-auto mt-10 col-span-12"
      >
        <label className="block ">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Product title
          </span>
          <input
            type="text"
            {...register("productTitle", { required: true })}
            // defaultValue={user?.email}

            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
            placeholder="Product title"
          />
          {errors?.productTitle && (
            <p className="text-red-500 text-sm ">Product title is required</p>
          )}
        </label>
        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Product Price
          </span>
          <input
            type="number"
            {...register("productPrice", { required: true })}
            // defaultValue={user?.email}

            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
            placeholder="price"
          />
          {errors?.productPrice && (
            <p className="text-red-500 text-sm ">Product price is required</p>
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
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="previous price"
            />
          </label>
        </div>
        <div className="my-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Product Description
          </span>
          <Jodit setContent={setDescription} content={description}></Jodit>
        </div>
        <div className="my-4">
          <span className="my-2 block text-sm font-medium">Sizes</span>
          <ColorAndSizeOptions
            productsOptions={availableSizes}
            setState={setSizes}
          ></ColorAndSizeOptions>
        </div>
        <div className="my-4">
          <span className="my-2 block text-sm font-medium">Colors</span>
          <ColorAndSizeOptions
            productsOptions={availableColors}
            setState={setColors}
            state={colors}
          ></ColorAndSizeOptions>
        </div>
        <div className=" mt-4">
          <label className="block ">
            <span className=" block text-sm font-medium">Total Product</span>
            <input
              type="number"
              {...register("totalProduct")}
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
            {...register("gender", { required: false })}
            // defaultValue={user?.gender}
            className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
          >
            <option selected disabled hidden>
              Choose One
            </option>
            {categoryProducts?.map((categoryProduct) => (
              <>
                <option value={categoryProduct.title}>
                  {categoryProduct.title}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className=" mt-4">
          <label className="block ">
            <span className=" block text-sm font-medium">Brand</span>
            <input
              type="text"
              {...register("brand")}
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="brand"
            />
          </label>
        </div>
        <div className="my-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Shipping
          </span>
          <Jodit setContent={setShipping} content={shipping}></Jodit>
        </div>
        <div className="my-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Delivery
          </span>
          <Jodit setContent={setDelivery} content={delivery}></Jodit>
        </div>
        <div>
          <div>
            <h1>Image preview</h1>
            {images?.map((image) => (
              <>
                <img src={image} alt="" />
              </>
            ))}
          </div>

          <label className="text-lg lg:w-1/6  font-semibold lg:text-xl">
            Image:
          </label>
          <div className="flex flex-col w-full">
            <input
              type="file"
              onChange={handleImage}
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
        <button onClick={handleUpload}>upload</button>
        <button
          type="submit"
          className="bg-[#55c3c1f7] py-2 px-7  text-white font-medium rounded-md mt-4 ml-auto block"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
