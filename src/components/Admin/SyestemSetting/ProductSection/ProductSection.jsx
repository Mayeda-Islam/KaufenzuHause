import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GetAPI from "../../../../APIHooks/GetAPI";
import AddCategorySectionModal from "./AddCategorySectionModal";
import LogoTable from "../../../../Shared/DataTable/LogoTable/LogoTable";

import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../../APIHooks/SingleImageUploader";

const ProductSection = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [categorySliders, setCategorySliders] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOPenModal = () => {
    openModal === true ? setOpenModal(false) : setOpenModal(true);
  };

  const handleImage = async (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setImage);
  };

  useEffect(() => {
    GetAPI(`category-slider`, setCategorySliders);
  }, [setCategorySliders]);

  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);
  console.log(selectedCategory);
  return (
    <div className="grid grid-cols-1 ">
      <div className="m-4">
        <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
          Add category here
        </h2>
        <div>
          <button
            onClick={handleOPenModal}
            className="px-10 py-2 bg-[#55c3c1f7] text-white rounded-full"
          >
            Add category
          </button>
        </div>
      </div>

      <LogoTable
        setSelectedCategory={setSelectedCategory}
        setCategorySliders={setCategorySliders}
        categorySliders={categorySliders}
      ></LogoTable>

      <AddCategorySectionModal
        reset={reset}
        image={image}
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        handleImage={handleImage}
        setCategorySliders={setCategorySliders}
        categories={categories}
        setImage={setImage}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></AddCategorySectionModal>
    </div>
  );
};

export default ProductSection;
