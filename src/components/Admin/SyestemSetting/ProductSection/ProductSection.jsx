import React, { useEffect, useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddProductSliderModal from "./AddProductSliderModal";
import GetAPI from "../../../../APIHooks/GetAPI";
import DeleteItems from "../../../../APIHooks/DeleteItems";
import UpdateCategoryModal from "./UpdateCategoryModal";

const ProductSection = () => {
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [productSliders, setProductSliders] = useState([])
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    GetAPI('category-slider', setProductSliders)
  }, [])

  const handleDelete = (_id) => {
    DeleteItems(`category-slider/${_id}`, setProductSliders)
  }

  const handleEditSlider = (_id) => {
    setSelectedId(_id)
    setEditOpen(true)
  }
  console.log(productSliders, 'productSliders')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="grid grid-cols-1 ">
      <div className="m-4">
        <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
          Add Product Category Slider Here
        </h2>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="px-10 py-2 bg-[#55c3c1f7] text-white rounded-full"
          >
            Add Product Slider
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] w-full text-sm text-left text-textColor bg-gray-200/60">
            <tr className="py-4 text-lg font-semibold text-white rounded-lg">
              <th scope="col" className="px-6 py-3  text-center  capitalize">
                SL
              </th>
              <th scope="col" className="px-6 py-3  text-center  capitalize">
                Logo
              </th>
              <th scope="col" className="px-6 py-3  text-center  capitalize">
                Category
              </th>

              <th scope="col" className="px-6 py-3  text-center  capitalize">
                Delete
              </th>
              <th scope="col" className="px-6 py-3  text-center  capitalize">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {productSliders?.map((product, index) => {
              const { category, imageURL, _id } = product;
              return (
                <tr className="bg-white border-b text-black border-[#D0D2DA]" key={_id}>
                  <th
                    scope="row"
                    className="border border-gray-400 py-2 px-4 text-center sm:px-6 text-md font-medium"
                  >
                    {index + 1}
                  </th>

                  <td className="border border-gray-400 py-2 px-4 sm:px-6 text-md font-medium flex justify-center">
                    <img
                      src={imageURL}
                      alt="Slider Image"
                      className="w-14  rounded"
                    />
                  </td>
                  <td className="border border-gray-400 py-2 px-4 text-center sm:px-6 text-md font-medium">
                    {category}
                  </td>

                  <td className="border border-gray-400 py-2 px-4 text-center sm:px-6 text-md font-medium">
                    <div>
                      <DeleteForeverIcon
                        className="text-red-500  cursor-pointer"
                        onClick={() => handleDelete(_id)} />


                    </div>
                  </td>
                  <td className="border border-gray-400 py-2 px-4 text-center sm:px-6 text-md font-medium ">

                    <BorderColorIcon
                      className="text-[#55c3c1f7] cursor-pointer "
                      onClick={() => handleEditSlider(_id)}
                    />
                  </td>
                </tr>
              )
            }

            )}
          </tbody>
        </table>
      </div>
      <>
        <AddProductSliderModal
          open={open}
          setOpen={setOpen}
          setProductSliders={setProductSliders}
        />
      </>
      <>
        <UpdateCategoryModal
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          setProductSliders={setProductSliders}
          selectedId={selectedId}
        />
      </>

    </div >
  )
};

export default ProductSection;
