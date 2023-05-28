import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CategoryList = ({ categories }) => {
  return (
    <table className="border-collapse border relative overflow-x-auto border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border border-gray-400 py-4">Serial</th>
          <th className="border border-gray-400 ">Category Image</th>
          <th className="border border-gray-400">Category Title</th>
          <th className="border border-gray-400">Action</th>
          <th className="border border-gray-400">Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories?.map((category, index) => (
          <>
            <tr className="text-center">
              <td className="border border-gray-400">{index + 1}</td>
              <td className="border border-gray-400 ">
                <img
                  src={category.image}
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td className="border border-gray-400 text-md font-medium">
                {category.categoryTitle}
              </td>
              <td className="border border-gray-400  text-md ">Action</td>
              <td className="border border-gray-400 text-red-400">
                <DeleteForeverIcon />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;
