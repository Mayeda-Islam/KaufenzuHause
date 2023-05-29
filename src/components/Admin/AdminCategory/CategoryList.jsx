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

    // <div className="border-b border-gray-200 shadow  sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto ">
    //   <table className="w-full table-auto min-w-full divide-y divide-gray-200 bg-[#F3F7FB] divide-y divide-gray-300">
    //     <thead className=" bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9] text-white font-bold text-lg">
    //       <tr>
    //         <th className="px-6 py-4 text-start text-white">SL</th>

    //         <th className="px-6 py-4 text-start text-white">Title</th>

    //         <th className="px-6 py-4 text-start text-white">Category</th>

    //         <th className="px-6 py-4 text-start text-white">Action</th>
    //       </tr>
    //     </thead>
    //     {/* <tbody className="bg-white divide-y divide-secondary">
    //             {quizTotalData.map((group, i) => (
    //               <AddQuizTable
    //                 key={i}
    //                 group={group}
    //                 i={i}
    //                 handleEditQuiz={handleEditQuiz}
    //                 setQuizTotalData={setQuizTotalData}
    //                 setAllQuiz={setAllQuiz}
    //                 setShowEdit={setShowEdit}
    //               ></AddQuizTable>
    //             ))}
    //           </tbody> */}
    //   </table>
    // </div>

    // <div className="overflow-x-auto">
    //   <table className="min-w-full divide-y divide-gray-200">
    //     <thead className="bg-gray-50">
    //       <tr>
    //         <th className="px-4 py-2">ID</th>
    //         <th className="px-4 py-2">Name</th>
    //         <th className="px-4 py-2">Age</th>
    //         <th className="px-4 py-2">Email</th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y divide-gray-200">
    //       {data.map((item) => (
    //         <tr key={item.id}>
    //           <td className="px-4 py-2">{item.id}</td>
    //           <td className="px-4 py-2">{item.name}</td>
    //           <td className="px-4 py-2">{item.age}</td>
    //           <td className="px-4 py-2">{item.email}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default CategoryList;
