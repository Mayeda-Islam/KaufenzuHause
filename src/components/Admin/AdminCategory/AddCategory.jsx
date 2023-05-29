import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../APIHooks/SingleImageUploader";
import serverUrl from "../../../config/Config";

const AddCategory = () => {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImage = async (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setImage);
  };

  const onSubmit = (data) => {
    const formData = {
      categoryTitle: data.categoryTitle,
      image: image,
    };
    reset();
    fetch(`${serverUrl}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Data upload successfully");
      });
  };

  return (
    <div>
      <h1 className="text-2xl my-4 font-semibold">Add Category</h1>
      <hr className="mb-12" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div className="flex flex-col items-start md:gap-4">
          <label className="text-lg font-semibold md:text-xl">
            Image/SVG/Icons:
          </label>
          <div className="flex flex-col w-full ">
            <input
              type="file"
              onChange={handleImage}
              accept="image/*"
              required
              className="mt-2 w-full px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 rounded-md sm:text-sm"
              placeholder="category title"
            />
            {errors?.categoryImage && (
              <p className="text-red-500 text-sm">
                Category image/svg/icon is required
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 my-4">
          <label className="font-semibold text-lg md:text-xl">
            Category Title:
          </label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              {...register("categoryTitle", { required: true })}
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 w-full rounded-md sm:text-sm"
              placeholder="your name"
            />
            {errors?.categoryTitle && (
              <p className="text-red-500 text-sm">Category title is required</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#55c3c1f7] py-2 px-7 text-white font-medium rounded-md mt-4 ml-auto block"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
