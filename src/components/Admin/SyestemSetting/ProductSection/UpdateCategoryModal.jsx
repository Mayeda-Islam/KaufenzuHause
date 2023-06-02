import { Box, Modal } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import ImageIcon from "@mui/icons-material/Image";
import CategoryForm from "./categoryForm";
import UpdatedApi from "../../../../APIHooks/UpdatedItem";

const UpdateCategoryModal = ({
  reset,
  selectedCategory,
  handleImage,
  errors,
  register,
  openModal,
  setOpenModal,
  image,
  categories,
  handleSubmit,
}) => {
  const handleUpdateCategory = (data) => {
    const categoryData = {
      category: data.category,
      categorySliderImage: image,
    };
    UpdatedApi(
      `category-slider/${data._id}`,
      categoryData,
      reset,
      selectedCategory
    );
  };
  console.log(selectedCategory);
  return (
    <div>
      <Modal
        keepMounted
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CategoryForm
          errors={errors}
          register={register}
          handleCategorySubmit={handleUpdateCategory}
          categories={categories}
          handleImage={handleImage}
          handleSubmit={handleSubmit}
          setOpenModal={setOpenModal}
        ></CategoryForm>
      </Modal>
    </div>
  );
};

export default UpdateCategoryModal;
