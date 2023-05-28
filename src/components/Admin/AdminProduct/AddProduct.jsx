import React from "react";
import { useForm } from "react-hook-form";
import Jodit from "../../../Shared/JodIt/Jodit";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const handleAddProduct = (data) => {
    console.log(data);
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
            type="email"
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
              type="tel"
              {...register("previousPrice")}
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="previous price"
            />
          </label>
        </div>
        <div className="my-4">
          <Jodit></Jodit>
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
