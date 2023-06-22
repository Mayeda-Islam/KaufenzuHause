import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import GetAPI from "../../../APIHooks/GetAPI";
import AddCategory from "./AddCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full lg:w-5/6 mx-auto lg:mt-12">

      <div className="m-4">
        <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
          Add Category Here
        </h2>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="px-10 py-2 bg-[#55c3c1f7] text-white rounded-full"
          >
            Add Category
          </button>
        </div>
      </div>
      <AddCategory setCategories={setCategories}></AddCategory>
      <div className="mt-8 w-full sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto">
        <h1 className="text-2xl my-4 font-semibold">Category List</h1>
        <hr className="mb-5" />
        <CategoryList categories={categories} setCategories={setCategories}></CategoryList>
      </div>


      {
        open && <AddCategory
          setCategories={setCategories}
          setOpen={setOpen}
          open={open}
        />
      }
    </div>
  );
};

export default Category;
