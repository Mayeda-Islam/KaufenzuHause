import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Jodit from "../../../Shared/JodIt/Jodit";
import ColorAndSizeOptions from "../../../Shared/ColorAndSizeOptions/ColorAndSizeOptions";

import serverUrl from "../../../config/Config";
import Swal from "sweetalert2";
import MultiImagesUpload from "../../../APIHooks/MultipleImagesUpload";
import { useNavigate } from "react-router";
import GetAPI from "../../../APIHooks/GetAPI";
// import { color } from "jodit/types/plugins/color/color";

const AddProduct = () => {
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const [description, setDescription] = useState("");
  const [descriptionGerman, setDescriptionGerman] = useState("");

  const [shipping, setShipping] = useState("");
  const [shippingGerman, setShippingGerman] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const availableColors = [];
  const availableSizes = [];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);

  const handleImage = async (event) => {
    const images = event.target.files;
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    MultiImagesUpload(`multipleImageUpload`, formData, setImages);
  };

  const handleAddProduct = (data) => {
    if (description.length < 15) {
      return Swal.fire(
        "Oops!",
        "Description must need at least 10 characters",
        "error"
      );
    }
    if (descriptionGerman.length < 15) {
      return Swal.fire(
        "Oops!",
        "Description must need at least 10 characters",
        "error"
      );
    }


    if (shipping.length < 15) {
      return Swal.fire(
        "Oops!",
        "Shipping must need at least 10 characters",
        "error"
      );
    }
    if (shippingGerman.length < 15) {
      return Swal.fire(
        "Oops!",
        "Shipping must need at least 10 characters",
        "error"
      );
    }
    if (!images.length) {
      return Swal.fire("Oops!", "Images must need", "error");
    }
    const productData = {
      ...data,
      description,
      descriptionGerman,
      shipping,
      shippingGerman,
      colors,
      sizes,
      images: images,
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
        if (data?.status === "success") {
          setDescription("");
          setShipping("");
          setSizes([]);
          setColors([]);
          setImages([]);
          setDescriptionGerman("")
          setShippingGerman("")
          reset();
          navigate("/admin/product/allProduct");
          Swal.fire("Congrats!", "Product Added Successfully!", "success");
        }
      });

    console.log(productData);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-2">
            Product title (In German)
          </span>
          <input
            type="text"
            {...register("productTitleGerman", { required: true })}
            // defaultValue={user?.email}

            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
            placeholder="Product title"
          />
          {errors?.productTitleGerman && (
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
            setContent={setDescription}
            content={description} />
        </div>
        <div className="my-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
            Product Description (In German)
          </span>
          <Jodit
            setContent={setDescriptionGerman}
            content={descriptionGerman} />
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
            {...register("category", { required: true })}
            // defaultValue={user?.gender}
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
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
            Shipping
          </span>
          <Jodit setContent={setShipping} content={shipping}></Jodit>
        </div>
        <div className="my-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium my-1">
            Shipping (In German)
          </span>
          <Jodit setContent={setShippingGerman} content={shippingGerman}></Jodit>
        </div>

        <div>
          <div className="my-4">
            <h1 className="text-lg font-medium">Image preview : </h1>
            <div className="flex gap-2">
              {images?.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="" className="w-24 h-24" />
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
  );
};

export default AddProduct;
