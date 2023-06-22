import React from "react";
import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../APIHooks/SingleImageUploader";
import PostAPI from "../../../APIHooks/POSTAPI";
import { useEffect } from "react";
import { Box, Modal } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "60%", xs: "98%" },
  maxHeight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "scroll",
  bgcolor: "white",
};

const AddCategory = ({ setCategories, setOpen, open }) => {
  const [image, setImage] = React.useState(null);
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
    console.log(formData);
    // reset();
    PostAPI(`category`, formData, setCategories);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

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
                  placeholder="category image"
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

      </Box></Modal>

  );
};

export default AddCategory;
