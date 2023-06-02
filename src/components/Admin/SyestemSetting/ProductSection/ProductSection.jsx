import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GetAPI from "../../../../APIHooks/GetAPI";

const ProductSection = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GetAPI("categories", setCategories);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="m-4">
          <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
            Add header logo Here
          </h2>
          {/* slider image form */}
          <form
            //    onSubmit={handleSubmit(handleHeaderLogoSubmit)}
            className=""
          >
            <div className="my-4">
              {/* {headerLogoBE && (
                <img
                  src={headerLogoBE}
                  alt="slider image"
                  className="w-24 h-24"
                />
              )} */}
            </div>
            <div className="flex items-center   ">
              <div className=" w-full">
                <input
                  type="file"
                  //   value={footerLogo}
                  //   onChange={handleHeaderLogo}
                  className="w-full p-2 border-[1px] border-[#55c3c1f7]  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                  placeholder="Add Hero Slider image..."
                  required
                />
                {/* {errors.sliderImage && (
                  <p className="text-red-500 mt-1">
                    {errors.footerLogo.message}
                  </p>
                )} */}
              </div>
              <button
                type="submit"
                className="py-2 px-3 ml-2 text-sm font-medium text-white bg-[#55c3c1f7] rounded-lg border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
              >
                Add
              </button>
            </div>
          </form>

          {/* divider border */}
        </div>
        <div className="m-4">
          <label
            // for="default"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            All Category
          </label>
          <select
            // defaultValue={user?.gender}
            className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
          >
            {categories?.map((categoryProduct) => (
              <>
                <option value={categoryProduct.categoryTitle}>
                  {categoryProduct.categoryTitle}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
