import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import GetAPI from "../../../APIHooks/GetAPI";
import AddCategory from "./AddCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);
  return (
    <div className="w-full lg:w-5/6 mx-auto lg:mt-12">
      <AddCategory setCategories={setCategories}></AddCategory>
      <div className="mt-16 w-full sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto">
        <h1 className="text-2xl my-4 font-semibold">Category List</h1>
        <hr className="mb-12" />
        <CategoryList categories={categories}></CategoryList>
      </div>
    </div>
  );
};

export default Category;
