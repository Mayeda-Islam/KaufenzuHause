import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CategoryList = ({ categories }) => {
  const data = [
    { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
    // Add more data rows as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-400 w-full">
        <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] text-white font-bold text-lg">
          <tr className="text-center text-white">
            <th className="px-6 py-4  ">SL</th>

            <th className="px-6 py-4  ">Category Image</th>

            <th className="px-6 py-4  ">Category</th>

            <th className="px-6 py-4  ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <tr className="text-center " key={index}>
              <td className="border border-gray-400 py-2 px-4 sm:px-6">
                {index + 1}
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6">
                <img
                  src={category.image}
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium">
                {category.categoryTitle}
              </td>

              <td className="border border-gray-400 py-2 px-4 sm:px-6 text-red-400">
                <DeleteForeverIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
