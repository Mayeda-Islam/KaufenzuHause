import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../APIHooks/SingleImageUploader";
import serverUrl from "../../../config/Config";
import GetAPI from "../../../APIHooks/GetAPI";
import CategoryList from "./CategoryList";

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
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
        // if (data?.status === "success") {
        //   setCategories(data.data);
        // }
      });
  };
  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);
  console.log(categories);

  return (
    <div className="w-5/6 mx-auto lg:mt-12 ">
      <h1 className="text-2xl my-4 font-semibold">Add Category</h1>
      <hr className="mb-12 " />
      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="lg:flex Lg:justify-center lg:items-center lg:gap-4">
          {" "}
          <label className="text-lg lg:w-1/6  font-semibold lg:text-xl">
            Image/SVG/Icons:
          </label>
          <div className="flex flex-col w-full">
            <input
              type="file"
              onChange={handleImage}
              accept="image/*"
              required
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

        <div className="lg:flex lg:justify-center lg:items-center lg:gap-4 my-4">
          {" "}
          <label className=" lg:w-1/6 font-semibold text-lg lg:text-xl">
            Category Title:
          </label>
          <div className="flex flex-col w-full">
            <input
              type="text"
              {...register("categoryTitle", { required: true })}
              // defaultValue={user?.email}

              className="mt-2  px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="your name"
            />
            {errors?.categoryTitle && (
              <p className="text-red-500 text-sm ">
                Category title is required
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#55c3c1f7] py-2 px-7  text-white font-medium rounded-md mt-4 ml-auto block"
        >
          Save
        </button>
      </form>
      <div className="  mt-16">
        <h1 className="text-2xl my-4 font-semibold">Category List</h1>
        <hr className="mb-12 " />
        <CategoryList categories={categories}></CategoryList>
      </div>
    </div>
  );
};

export default AddCategory;
