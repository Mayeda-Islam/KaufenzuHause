import React from "react";
import { useForm } from "react-hook-form";
import Chip from "@mui/material/Chip";
import Jodit from "../../../Shared/JodIt/Jodit";
import { Autocomplete, Stack, TextField } from "@mui/material";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];
  const handleAddProduct = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-3xl w-11/12 mx-auto font-medium">Add Product</h1>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="w-4/5 mx-auto mt-10 col-span-12"
      >
        <label className="block ">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Product title
          </span>
          <input
            type="text"
            {...register("productTitle", { required: true })}
            // defaultValue={user?.email}

            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
            placeholder="Product title"
          />
          {errors?.productTitle && (
            <p className="text-red-500 text-sm ">Product title is required</p>
          )}
        </label>
        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Product Price
          </span>
          <input
            type="email"
            {...register("productPrice", { required: true })}
            // defaultValue={user?.email}

            className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
            placeholder="price"
          />
          {errors?.productPrice && (
            <p className="text-red-500 text-sm ">Product price is required</p>
          )}
        </label>

        <div className=" mt-4">
          <label className="block ">
            <span className="after:content-['(Optional)'] after:ml-0.5 after:text-green-400 block text-sm font-medium">
              Previous Price
            </span>
            <input
              type="number"
              {...register("previousPrice")}
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="previous price"
            />
          </label>
        </div>
        <div className="my-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
            Product Description
          </span>
          <Jodit></Jodit>
        </div>
        <div>
          <Stack spacing={3} className="w-full my-4">
            <Autocomplete
              multiple
              id="tags-filled"
              options={top100Films.map((option) => option?.title)}
              // defaultValue={[top100Films[13]?.title]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Add colors"
                  placeholder="Favorites"
                />
              )}
            />
          </Stack>
        </div>
        <div>
          <Stack spacing={3} className="w-full">
            <Autocomplete
              multiple
              id="tags-filled"
              options={top100Films.map((option) => option?.title)}
              // defaultValue={[top100Films[13]?.title]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Add size"
                  placeholder="Favorites"
                />
              )}
            />
          </Stack>
        </div>
        <div className=" mt-4">
          <label className="block ">
            <span className=" block text-sm font-medium">Total Product</span>
            <input
              type="number"
              {...register("totalProduct")}
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="total product"
            />
          </label>
        </div>
        <div className="my-4">
          <label
            // for="default"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Add Category
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
        <div className=" mt-4">
          <label className="block ">
            <span className=" block text-sm font-medium">Brand</span>
            <input
              type="text"
              {...register("brand")}
              className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
              placeholder="brand"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#55c3c1f7] py-2 px-7  text-white font-medium rounded-md mt-4 ml-auto block"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
