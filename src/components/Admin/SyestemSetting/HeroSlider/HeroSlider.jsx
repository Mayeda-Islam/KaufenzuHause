import React, { useState } from "react";
import HeroSliderTable from "../../../../Shared/DataTable/HeroSliderTable/HeroSliderTable";
import HeroBannerTable from "../../../../Shared/DataTable/HeroBannerTable/HeroBannerTable";
import { SingleImageUploader } from "../../../../APIHooks/SingleImageUploader";
import PostAPI from "../../../../APIHooks/POSTAPI";
import { useEffect } from "react";
import GetAPI from "../../../../APIHooks/GetAPI";
const HeroSlider = () => {


  const [sliderImageBE, setSliderImageBE] = React.useState(null);
  const [sliderImage, setSliderImage] = useState(null);

  // banner image from express 
  const [bannerImageBE, setBannerImageBE] = useState(null);
  // banner image from DB 
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    GetAPI("hero-slider", setSliderImage);
  }, []);

  const handleImageChange = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setSliderImageBE);
  };

  const handleSliderImageSubmit = (event) => {
    event.preventDefault()
    const image = {
      imageURL: sliderImageBE
    };
    PostAPI(`hero-slider`, image, setSliderImage);
    setSliderImageBE(null)
    event.target.reset()
  };




  useEffect(() => {
    GetAPI("banner-slider", setBannerImage);
  }, []);


  const handleBannerImage = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setBannerImageBE);
  };

  const handleBannerImageSubmit = (event) => {
    event.preventDefault()
    const image = {
      imageURL: bannerImageBE
    };
    PostAPI(`banner-slider`, image, setBannerImage);
    setBannerImageBE(null)
    event.target.reset()
  };





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
                onSubmit={handleSliderImageSubmit}
              >
                <div className="my-4">
                  {
                    sliderImageBE &&
                    <img
                      src={sliderImageBE}
                      alt="slider image"
                      className="w-24 h-24"
                    />
                  }
                </div>
                <div className="flex items-center   ">
                  <div className=" w-full">
                    <input
                      type="file"
                      // value={sliderImage}
                      onChange={handleImageChange}
                      className="w-full p-2 border-[1px] border-[#55c3c1f7]  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                      placeholder="Add Hero Slider image..."

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
                All Hero Slider Images
              </h2>

              {/* slider data table */}
              <HeroSliderTable
                image={sliderImage}
                setImage={setSliderImage}
              />
            </div>

            <div className="m-4">
              <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7]  pl-4">
                Add Hero Banner image Here
              </h2>
              <div className="my-4">
                {
                  bannerImageBE &&
                  <img
                    src={bannerImageBE}
                    alt="slider image"
                    className="w-24 h-24"
                  />
                }
              </div>
              {/* banner image form */}
              <form onSubmit={handleBannerImageSubmit} >
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
              <HeroBannerTable
                image={bannerImage}
                setImage={setBannerImage}
              />


            </div>
          </div>
        </div>
      </section>

      {/* banner slider image table */}
      <section className="py-6">
        <div className="mx-auto w-[95%]"></div>
      </section>
    </>
  );
};

export default HeroSlider;
