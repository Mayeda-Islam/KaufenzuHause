import React from "react";
import PostAPI from "../../../../APIHooks/POSTAPI";
import { useEffect } from "react";
import GetAPI from "../../../../APIHooks/GetAPI";
import { SingleImageUploader } from "../../../../APIHooks/SingleImageUploader";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LogoSection = () => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [footerLogo, setFooterLogo] = useState(null);
  const [footerLogoBE, setFooterLogoBE] = useState(null);
  const [footerLogoMDB, setFooterLogoMDB] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const handleFooterLogo = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setFooterLogoBE);
  };
  const handleLogoSubmit = (data) => {
    const logo = { footerLogoBE };
    PostAPI(`footer-logo`, logo, reset, setFooterLogoMDB);
  };
  useEffect(() => {
    GetAPI("footer-logo", setBannerImage);
  }, []);
  console.log(bannerImage, "line 35");

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="m-4">
          <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
            Add Footer logo Here
          </h2>
          {/* slider image form */}
          <form onSubmit={handleSubmit(handleLogoSubmit)} className="">
            <div className="my-4">
              <img
                // src={sliderImage}
                alt="slider image"
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center   ">
              <div className=" w-full">
                <input
                  type="file"
                  value={footerLogo}
                  onChange={handleFooterLogo}
                  className="w-full p-2 border-[1px] border-[#55c3c1f7]  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                  placeholder="Add Hero Slider image..."
                  required
                />
                {errors.sliderImage && (
                  <p className="text-red-500 mt-1">
                    {errors.footerLogo.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="py-2 px-3 ml-2 text-sm font-medium text-white bg-[#55c3c1f7] rounded-lg border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
