import React from "react";
import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../APIHooks/SingleImageUploader";
import PostAPI from "../../../APIHooks/POSTAPI";
import { useEffect } from "react";
import { Box, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "60%", xs: "98%" },
  maxHeight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "auto",
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
      categoryTitleGerman: data.categoryTitleGerman,
      image: image,
    };
    console.log(formData);
    // reset();
    PostAPI(`category`, formData, setCategories);
    setOpen(false)
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

        <div className="outline-none focus:outline-none ">
          <div className=" w-full ">
            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-4 border-b-0.5 border-gray-300">
                <h1 className='text-gray-900 font-semibold text-2xl'>
                  Add Category
                </h1>
                <button
                  className="text-center flex items-center justify-center w-[40px] h-[40px] rounded-lg ml-auto bg-gray-800 text-white text-xl font-medium hover:bg-red-500"
                  onClick={() => setOpen(false)}
                >
                  <IoClose />
                </button>
              </div>
              {/* body */}
              <div className=" p-6 flex-auto w-full border-2 border-gray-200 rounded mt-[1rem]">
                <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="flex flex-col items-start gap-4 mb-4">
                    <label className="font-semibold text-lg md:text-xl">
                      Category Title:
                    </label>
                    <div className="flex flex-col w-full">
                      <input
                        type="text"
                        {...register("categoryTitle", { required: true })}
                        className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 w-full rounded-md sm:text-sm"
                        placeholder="your category name"
                      />
                      {errors?.categoryTitle && (
                        <p className="text-red-500 text-sm">Category title is required</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 mb-4">
                    <label className="font-semibold text-lg md:text-xl">
                      Category Title:
                    </label>
                    <div className="flex flex-col w-full">
                      <input
                        type="text"
                        {...register("categoryTitleGerman", { required: true })}
                        className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 w-full rounded-md sm:text-sm"
                        placeholder="your category name in German"
                      />
                      {errors?.categoryTitleGerman && (
                        <p className="text-red-500 text-sm">Category title in German is required</p>
                      )}
                    </div>
                  </div>

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

                  <button
                    type="submit"
                    className="py-2 mt-5 px-7 w-full bg-[#55c3c1f7]  text-sm font-medium text-white rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Box></Modal>

  );
};

export default AddCategory;
