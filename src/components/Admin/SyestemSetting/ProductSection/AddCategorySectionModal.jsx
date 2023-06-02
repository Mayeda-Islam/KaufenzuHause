import { Box, Modal } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import ImageIcon from "@mui/icons-material/Image";
import CategoryForm from "./categoryForm";
import PostAPI from "../../../../APIHooks/POSTAPI";

const AddCategorySectionModal = ({
  reset,
  handleImage,
  errors,
  register,
  openModal,
  setOpenModal,
  image,
  categories,
  handleSubmit,
  setCategorySliders,
}) => {
  const handleAddCategory = (data) => {
    const categoryData = {
      category: data.category,
      categorySliderImage: image,
    };
    PostAPI(`category-slider`, categoryData, reset, setCategorySliders);
  };
  return (
    <div>
      <Modal
        keepMounted
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="outline-none focus:outline-none ">
            <div className=" w-full ">
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b-0.5 border-gray-300">
                  <button
                    className="text-center flex items-center justify-center w-[40px] h-[40px] rounded-lg ml-auto bg-gray-800 text-white text-xl font-medium hover:bg-gray-900"
                    onClick={() => setOpenModal(false)}
                  >
                    <IoClose />
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex-auto w-full border-2 border-gray-200 rounded mt-[1rem]">
                  <form onSubmit={handleSubmit(handleCategorySubmit)}>
                    <label
                      // for="default"
                      className="block mb-2 font-semibold after:content-['*'] after:ml-0.5 after:text-red-500  text-sm  text-gray-900"
                    >
                      Add Category
                    </label>
                    <select
                      {...register("category", { required: true })}
                      className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                    >
                      <option>choose one</option>
                      {categories?.map((categoryProduct) => (
                        <>
                          <option value={categoryProduct.categoryTitle}>
                            {categoryProduct.categoryTitle}
                          </option>
                        </>
                      ))}
                    </select>
                    {errors?.category && (
                      <p className="text-red-500 text-sm">
                        Category is required
                      </p>
                    )}
                    <div className=" md:flex md:justify-center md:items-center md:gap-8">
                      <ImageIcon sx={{ fontSize: 150 }} />
                      <div className="h-20 w-full">
                        <label className="after:content-['*'] after:ml-0.5 text-sm after:text-red-500 font-semibold">
                          Image
                        </label>
                        <input
                          type="file"
                          onChange={handleImage}
                          accept="image/*"
                          required
                          className="mt-2 w-full px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 rounded-md sm:text-sm"
                          placeholder="category title"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="py-2 px-7 w-full bg-[#55c3c1f7]  text-sm font-medium text-white rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
                      onClick={() => setOpenModal(false)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategorySectionModal;
