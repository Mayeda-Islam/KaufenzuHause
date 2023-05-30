import React, { useState } from "react";
import HeroSliderTable from "../../../../Shared/DataTable/HeroSliderTable/HeroSliderTable";
import HeroBannerTable from "../../../../Shared/DataTable/HeroBannerTable/HeroBannerTable";
import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../../APIHooks/SingleImageUploader";
import PostAPI from "../../../../APIHooks/POSTAPI";
import { useEffect } from "react";
import GetAPI from "../../../../APIHooks/GetAPI";
const HeroSlider = () => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [sliderImageBE, setSliderImageBE] = useState(null);
  const [sliderImageMDB, setSliderImageMDB] = useState(null);
  const [sliderImage, setSliderImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const handleBannerImage = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setBannerImage);
  };
  const handleImageChange = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setSliderImageBE);
  };
  const handleSliderImageSubmit = (data) => {
    const image = { sliderImageBE };
    PostAPI(`hero-slider`, image, reset, setSliderImageMDB);
  };
  useEffect(() => {
    GetAPI("hero-slider", setSliderImage);
  }, []);
  console.log(sliderImage);

  return (
    <>
      {/* hero slider image form */}
      <section className="py-6">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="m-4">
              <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
                Add Hero Slider image Here
              </h2>
              {/* slider image form */}
              <form
                onSubmit={handleSubmit(handleSliderImageSubmit)}
                className=""
              >
                <div className="my-4">
                  <img
                    src={sliderImage}
                    alt="slider image"
                    className="w-24 h-24"
                  />
                </div>
                <div className="flex items-center   ">
                  <div className=" w-full">
                    <input
                      type="file"
                      // value={sliderImage}
                      onChange={handleImageChange}
                      className="w-full p-2 border-[1px] border-[#55c3c1f7]  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                      placeholder="Add Hero Slider image..."
                      required
                    />
                    {errors.sliderImage && (
                      <p className="text-red-500 mt-1">
                        {errors.sliderImage.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-3 ml-2 text-sm font-medium text-white bg-[#55c3c1f7] rounded-lg border-[3px] border-[#55c3c1f7] hover:bg-secondary hover:border-secondary "
                  >
                    Add
                  </button>
                </div>
              </form>

              {/* divider border */}

              <hr className="my-8 border-0.5 border-gray-300" />
              {/* slider image table */}
              <h2 className="mb-6 text-xl lg:text-2xl  font-medium text-textColor  border-l-2 border-[#55c3c1f7] pl-4">
                All Hero Slider Images
              </h2>

              {/* slider data table */}
              <HeroSliderTable
                setSliderImage={setSliderImage}
                sliderImage={sliderImage}
              />
            </div>

            <div className="m-4">
              <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7]  pl-4">
                Add Hero Banner image Here
              </h2>
              <div className="my-4">
                <img
                  src={bannerImage}
                  alt="slider image"
                  className="w-24 h-24"
                />
              </div>
              {/* banner image form */}
              <form className="">
                <div className="flex items-center   ">
                  <div className=" w-full">
                    <input
                      onChange={handleBannerImage}
                      type="file"
                      className="w-full p-2 border-[1px] border-[#55c3c1f7]  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                      placeholder="Add Hero Banner image..."
                      required
                    />
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

              <hr className="my-8 border-0.5 border-gray-300" />
              {/* slider image table */}
              <h2 className="mb-6 text-xl lg:text-2xl  font-medium text-textColor  border-l-2 border-[#55c3c1f7] pl-4">
                All Hero Banner Images
              </h2>

              {/* banner data table */}
              <HeroBannerTable bannerImage={bannerImage} />
            </div>
          </div>
        </div>
      </section>

      {/* hero slider image table */}
      <section className="py-6">
        <div className="mx-auto w-[95%]"></div>
      </section>
    </>
  );
};

export default HeroSlider;
