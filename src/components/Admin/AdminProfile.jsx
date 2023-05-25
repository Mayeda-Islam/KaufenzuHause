import React from "react";

const AdminProfile = () => {
  return (
    <div>
      <div className="grid grid-cols-12 w-fit mx-auto md:gap-10">
        <div className="col-span-12 lg:col-span-3 flex justify-center">
          <div className="mt-12">
            {/* {imageUrl ? (
                <img
                  className="rounded-full w-36 h-36 object-cover border-4 border-[#f5f8ff] mx-auto"
                  src={imageUrl}
                  alt="This is profile pic"
                />
              ) : ( */}
            <img
              className="rounded-full w-36 border-4 border-[#f5f8ff] mx-auto"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
              }
              alt="This is profile pic"
            />
            {/* )} */}
            {/* <h2 className="text-lg font-medium mt-5">Admin</h2> */}
          </div>
        </div>

        <div className="col-span-12 mt-20 lg:col-span-9 w-fit lg:w-full mx-auto mb-8">
          <h2 className="text-2xl font-semibold pt-5">Profile </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7]"></div>

          <form
            // onSubmit={handleSubmit(handleUpdateProfile)}
            className="mt-10 max-w-lg"
          >
            <label className="block mt-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                Full Name
              </span>
              <input
                type="fullName"
                // {...register("email", { required: false })}
                // defaultValue={user?.email}
                disabled
                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                placeholder="Mayeda Islam"
              />
            </label>
            <label className="block mt-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                Email address
              </span>
              <input
                type="email"
                // {...register("email", { required: false })}
                // defaultValue={user?.email}
                disabled
                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                placeholder="you@example.com"
              />
            </label>
            <div className="block mt-4">
              <label
                // for="default"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gender
              </label>
              <select
                // {...register("gender", { required: false })}
                // defaultValue={user?.gender}
                className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
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
            <div className="grid grid-cols-2 gap-x-4 mt-4">
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    // {...register("number", { required: false })}
                    pattern="^(?:(?:\+|00)88|01)?\d{11}$"
                    // defaultValue={user?.number}
                    className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                    placeholder="01934****39"
                  />
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
                  // {...register("gender", { required: false })}
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
            <div className="block ">
              <label
                // for="default"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="address"
                // {...register("email", { required: false })}
                // defaultValue={user?.email}
                disabled
                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                placeholder="house:a,road:b,block:x"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 mt-4">
              <div>
                <label
                  // for="default"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  City
                </label>
                <select
                  // {...register("city", { required: false })}
                  // defaultValue={user?.city}
                  className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                >
                  <option selected hidden>
                    Choose One
                  </option>
                  ;
                  {/* {disctricData?.map((disName) => {
          return (
            <option
              value={disName}
              selected={user?.city === disName}
            >
              {disName}
            </option>
          );
        })} */}
                </select>
              </div>
              <div>
                <label
                  // for="default"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Country
                </label>
                <select
                  // {...register("country", { required: false })}
                  // defaultValue={user?.country}
                  className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                >
                  <option selected hidden>
                    Choose One
                  </option>
                  <option
                    value="bangladesh"
                    // selected={user?.country === "bangladesh"}
                  >
                    Bangladesh
                  </option>
                </select>
              </div>
            </div>
            <label className="block">
              <span className=" block text-sm font-medium">Zip Code</span>
              <input
                type="number"
                // {...register("zipCode", { required: false })}
                // defaultValue={user?.zipCode}
                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                placeholder="Enter your zip code"
              />
            </label>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] py-2 px-7  text-white font-medium rounded-md mt-4 ml-auto block"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

{
  /* <div className="col-span-12 lg:col-span-9 w-fit lg:w-full mx-auto mb-8">
<h2 className="text-2xl font-semibold pt-5">Profile </h2>

<div className="h-[3px] w-10 bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9]"></div>
<input
  onChange={handleChangeUploadImage}
  type={"file"}
  // accept="image/png"
  accept="image/*"
  className="bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9] py-2 px-7 text-white font-medium rounded-md mt-3"

/>

<div className='w-full mt-2 md:mx-auto border-2 border-blue-400 focus:border-blue-400 flex justify-between items-center '>
  <input

    type="text"
    className='text-sm font-medium py-2 px-1 md:px-2 border-none outline-none focus:outline-none w-full' value={`http://localhost:5000/api/v1/user/signup/${userInfo?.referralCode}`} placeholder={userInfo?.referralCode} readOnly>

  </input>
  <button
    className="bg-transparent hover:bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9] hover:duration-300 md:px-7 lg:px-7 px-3 py-3 hover:text-white font-medium border-l-2 border-blue-400  text-black flex items-center"
    onClick={copyToClipboard}
  >
    Copy
  </button>
</div>
{/* alert  */
}
{
  /* <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Copied To Clipboard
  </Alert>
</Snackbar> */
}

{
  /* Account settings changing password input form */
}
{
  /* <form
  onSubmit={handleSubmit(handleUpdateProfile)}
  className="mt-10 max-w-lg"
>

  <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
      Email address
    </span>
    <input
      type="email"
      {...register("email", { required: false })}
      defaultValue={user?.email}
      disabled
      className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
      placeholder="you@example.com"
    />
  </label>

  <div className="grid grid-cols-2 gap-x-4 mt-4">
    <div>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
          Phone Number
        </span>
        <input
          type="tel"
          {...register("number", { required: false })}
          pattern="^(?:(?:\+|00)88|01)?\d{11}$"
          defaultValue={user?.number}
          className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
          placeholder="01934****39"
        />
      </label>
    </div>
    <div>
      <label
        for="default"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Language
      </label>
      <select
        {...register("language", { required: false })}
        defaultValue={user?.language}
        className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-blue-300 bg-transparent"
      >
        <option selected disabled hidden>
          Choose One
        </option>
        <option
          value="English"
          selected={user?.language === "English"}
        >
          English
        </option>
        <option
          value="Bangla"
          selected={user?.language === "Bangla"}
        >
          Bangla
        </option>
        <option value="Hindi" selected={user?.language === "Hindi"}>
          Hindi
        </option>
      </select>
    </div>
    <div>
      <label
        for="default"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Student Type
      </label>
      <select
        {...register("studentType", { required: false })}
        defaultValue={user?.studentType}
        className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-blue-300 bg-transparent"
      >
        <option selected disabled hidden>
          Choose One
        </option>
        <option value="One" selected={user?.studentType === "One"}>
          Beginner
        </option>
        <option value="Two" selected={user?.studentType === "Two"}>
          Intermediate
        </option>
        <option
          value="Three"
          selected={user?.studentType === "Three"}
        >
          Pro
        </option>
      </select>
    </div>
    <div>
      <label
        for="default"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Gender
      </label>
      <select
        {...register("gender", { required: false })}
        defaultValue={user?.gender}
        className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-blue-300 bg-transparent"
      >
        <option selected disabled hidden>
          Choose One
        </option>
        <option value="male" selected={user?.gender === "male"}>
          Male
        </option>
        <option value="female" selected={user?.gender === "female"}>
          Female
        </option>
        <option value="other" selected={user?.gender === "other"}>
          Other
        </option>
      </select>
    </div>
    <div>
      <label
        for="default"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        City
      </label>
      <select
        {...register("city", { required: false })}
        defaultValue={user?.city}
        className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-blue-300 bg-transparent"
      >
        <option selected hidden>
          Choose One
        </option>
        ;
        {disctricData?.map((disName) => {
          return (
            <option
              value={disName}
              selected={user?.city === disName}
            >
              {disName}
            </option>
          );
        })}
      </select>
    </div>
    <div>
      <label
        for="default"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Country
      </label>
      <select
        {...register("country", { required: false })}
        defaultValue={user?.country}
        className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-blue-300 bg-transparent"
      >
        <option selected hidden>
          Choose One
        </option>
        <option
          value="bangladesh"
          selected={user?.country === "bangladesh"}
        >
          Bangladesh
        </option>
      </select>
    </div>
    <label className="block">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
        Date of Birth
      </span>
      <input
        type="date"
        {...register("birth", { required: false })}
        className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
        placeholder="Enter date"
      />
    </label>
    <label className="block">
      <span className="block text-sm font-medium">
        Facebook Url
      </span>
      <input
        type="url"
        {...register("facebookURL", { required: false })}
        defaultValue={user?.facebookURL}
        className="mt-2 p-3 border shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
        placeholder="Enter your facebook url"
      />
    </label>

    <label className="block">
      <span className="block text-sm font-medium">
        Linkedin Url
      </span>
      <input
        type="url"
        {...register("linkedinURL", { required: false })}
        defaultValue={user?.linkedinURL}
        className="mt-2 p-3 border shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
        placeholder="Enter your linkedin url"
      />
    </label>
    <label className="block">
      <span className=" block text-sm font-medium">Address</span>
      <input
        type="text"
        {...register("address", { required: false })}
        defaultValue={user?.address}
        className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
        placeholder="Enter your address"
      />
    </label>
    <label className="block">
      <span className=" block text-sm font-medium">Zip Code</span>
      <input
        type="number"
        {...register("zipCode", { required: false })}
        defaultValue={user?.zipCode}
        className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-blue-300 bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
        placeholder="Enter your zip code"
      />
    </label>
  </div>
  <button
    type="submit"
    className="bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9] py-2 px-7 text-white font-medium rounded-md mt-3 ml-auto block"
  >
    Save changes
  </button>
</form> */
}
