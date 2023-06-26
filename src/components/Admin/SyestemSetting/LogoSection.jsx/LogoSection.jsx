import React from "react";
import { useEffect } from "react";
import GetAPI from "../../../../APIHooks/GetAPI";
import { SingleImageUploader } from "../../../../APIHooks/SingleImageUploader";
import { useState } from "react";
import UpdatedApi from "../../../../APIHooks/UpdatedItem";
import PostAPI from "../../../../APIHooks/POSTAPI";

const LogoSection = () => {
  const [logos, setLogos] = React.useState([]);
  const [selectedFileHeader, setSelectedFileHeader] = useState(null);
  const [selectedFileFooter, setSelectedFileFooter] = useState(null);

  useEffect(() => {
    GetAPI("logo", setLogos);
  }, []);
  console.log(logos);
  const handleFileChangeHeader = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setSelectedFileHeader);
  };

  const handleFileChangeFooter = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setSelectedFileFooter);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      headerLogoURL: selectedFileHeader || logos[0]?.headerLogoURL,
      footerLogoURL: selectedFileFooter || logos[0]?.footerLogoURL,
    };
    if (logos[0]?._id) {
      UpdatedApi(`logo/${logos[0]?._id}`, setLogos, formData);
    }
    else {
      PostAPI('logo', formData, setLogos)
    }
    form.reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-11/12 md:w-1/2 mx-auto border border-gray-300 p-10 my-10 rounded-lg bg-slate-100">
      <form className=" py-5" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-4 gap-4 items-center  my-3 lg:my-5">
          <div className="flex justify-center items-center">
            {!selectedFileHeader ? (
              <img
                src={logos[0]?.headerLogoURL}
                alt={"imageFile"}
                className="w-52"
              ></img>
            ) : (
              <img
                src={selectedFileHeader}
                alt={"imageFile"}
                className="w-52"
              ></img>
            )}
          </div>
          <label className="block  lg:col-span-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-black">
              Header Logo
            </span>
            <input
              onChange={handleFileChangeHeader}
              type="file"
              className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-black  block w-full rounded-md sm:text-sm"
            />
          </label>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 items-center  my-3 lg:my-5">
          <div className="flex justify-center items-center ">
            {selectedFileFooter ? (
              <img
                src={selectedFileFooter}
                alt={"imageFile"}
                className="w-52"
              ></img>
            ) : (
              <img
                src={logos[0]?.footerLogoURL}
                alt={"imageFile"}
                className="w-52"
              ></img>
            )}
          </div>
          <label className="block  lg:col-span-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-black">
              Footer Logo
            </span>
            <input
              onChange={handleFileChangeFooter}
              type="file"
              className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-black  block w-full rounded-md sm:text-sm"
            />
          </label>
        </div>

        <button
          className="py-2 px-3 ml-2 text-sm font-medium text-white bg-[#55c3c1f7] rounded-lg border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee] w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogoSection;
