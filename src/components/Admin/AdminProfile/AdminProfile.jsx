import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SingleImageUploader } from "../../../APIHooks/SingleImageUploader";

const AdminProfile = () => {
  const [image, setImage] = useState(null);
  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const handleUpdateProfile = (data) => console.log(data);
  const handleImageUpload = async (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    const test = formData.append("image", imageData);

    SingleImageUploader(formData, setImage);
  };

  // countries api
  const uri = `https://restcountries.com/v3.1/all`;
  fetch(uri)
    .then((res) => res.json())
    .then((data) => setCountries(data));

  return (
    <div>
      <div className="grid grid-cols-12 w-fit mx-auto md:gap-10">
        <div className="col-span-12 lg:col-span-4 flex justify-center">
          <div className="mt-12">
            {image ? (
              <img
                className="rounded-full w-72 h-72 object-cover border-4 border-[#f5f8ff] mx-auto"
                src={image}
                alt="This is profile pic"
              />
            ) : (
              <img
                className="rounded-full w-72 border-4 border-[#f5f8ff] mx-auto"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
                }
                alt="This is profile pic"
              />
            )}
            {/* <h2 className="text-lg font-medium mt-5">Admin</h2>  */}
          </div>
        </div>

        <div className="col-span-12 mt-12  lg:col-span-8 w-fit lg:w-full mx-auto ">
          <h2 className="text-4xl font-medium pt-5">Profile </h2>
          <p className="text-xl text-blue-400 my-2">
            rayn@gmail.com{" "}
            <span className="text-xl text-gray-500">- Admin</span>
          </p>
          <p className="text-md text-gray-400">Upload your own image ...</p>

          <div className="  my-2">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center   border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                onChange={handleImageUpload}
                id="dropzone-file"
                accept="image/*"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>
        {/* from starts here */}
        <form
          onSubmit={handleSubmit(handleUpdateProfile)}
          className=" col-span-12"
        >
          <label className="block ">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
              Full Name
            </span>
            <input
              type="fullName"
              {...register("fullName", { required: true })}
              // defaultValue={user?.email}

              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="your name"
            />
            {errors?.fullName && (
              <p className="text-red-500 text-sm ">Your name is required</p>
            )}
          </label>
          <label className="block mt-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
              Email address
            </span>
            <input
              type="email"
              {...register("email", { required: true })}
              // defaultValue={user?.email}

              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="you@example.com"
            />
            {errors?.email && (
              <p className="text-red-500 text-sm ">Your email is required</p>
            )}
          </label>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-4">
            <div>
              <label className="block ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                  Phone Number
                </span>
                <input
                  type="tel"
                  {...register("number", { required: true })}
                  pattern="^(?:(?:\+|00)88|01)?\d{11}$"
                  // defaultValue={user?.number}
                  className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                  placeholder="01934****39"
                />
                {errors?.email && (
                  <p className="text-red-500 text-sm ">
                    Your phone number is required
                  </p>
                )}
              </label>
            </div>

            <div>
              <label
                // for="default"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gender
              </label>
              <select
                {...register("gender", { required: false })}
                // defaultValue={user?.gender}
                className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
              >
                <option selected disabled hidden>
                  Choose One
                </option>
                <option
                  value="male"
                //  selected={user?.gender === "male"}
                >
                  Male
                </option>
                <option
                  value="female"
                //  selected={user?.gender === "female"}
                >
                  Female
                </option>
                <option
                  value="other"
                // selected={user?.gender === "other"}
                >
                  Other
                </option>
              </select>
            </div>
          </div>
          <div className="block mt-4">
            <label
              // for="default"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="address"
              {...register("address", { required: true })}
              // defaultValue={user?.email}
              disabled
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="house:a,road:b,block:x"
            />
            {errors?.address && (
              <p className="text-red-500 text-sm ">Your address is required</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-4">
            {/*********************  city input ****************/}
            <div>
              <label
                // for="default"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>

              <input
                type="text"
                {...register("city", { required: true })}
                // defaultValue={user?.email}

                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                placeholder="example city"
              />
              {errors?.email && (
                <p className="text-red-500 text-sm ">Your city is required</p>
              )}
            </div>
            {/*********************  zip code input ****************/}
            <label className="block">
              <span className=" block text-sm font-medium">Zip Code</span>
              <input
                type="number"
                {...register("zipCode", { required: true })}
                // defaultValue={user?.zipCode}
                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                placeholder="Enter your zip code"
              />
              {errors?.zipCode && (
                <p className="text-red-500 text-sm ">Zip code is required</p>
              )}
            </label>
          </div>
          {/**************************  country  ***********************/}

          <div className="mt-4 block">
            <label
              // for="default"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <select
              {...register("country", { required: false })}
              // defaultValue={user?.country}
              className="border-2 text-black mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
            >
              <option selected hidden>
                Choose One
              </option>
              {countries.map((country) => (
                <>
                  {" "}
                  <option value={country?.name?.common}>
                    {country?.name?.common}
                  </option>
                </>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#55c3c1f7] py-2 px-7  text-white font-medium rounded-md mt-4 ml-auto block"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
