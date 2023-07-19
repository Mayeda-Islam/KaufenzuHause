import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import GetAPI from '../../../../APIHooks/GetAPI';
import { SingleImageUploader } from '../../../../APIHooks/SingleImageUploader';

import UpdatedApi from '../../../../APIHooks/UpdatedItem';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "60%", xs: "98%" },
  maxHeight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "scroll",
  bgcolor: "white",
};

const UpdateCategoryModal = ({ editOpen, setEditOpen, setProductSliders, selectedId }) => {
  const [categories, setCategories] = React.useState([])
  const [image, setImage] = useState(null)
  const [slider, setSlider] = useState({})
  const { category, imageURL, url } = slider;
  useEffect(() => {
    GetAPI('categories', setCategories)
  }, [])

  useEffect(() => {
    GetAPI(`category-slider/${selectedId}`, setSlider)
  }, [selectedId])

  const handleImage = (event) => {
    const imageData = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageData);
    SingleImageUploader(formData, setImage);
  };

  const handleUpdateCategory = (event) => {
    event.preventDefault();
    const form = event.target
    const formData = {
      category: form.category.value || category,
      imageURL: image || imageURL,
      url: form.url.value || url

    }
    UpdatedApi(`category-slider/${selectedId}`, setProductSliders, formData);
    setEditOpen(false)
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Modal
        keepMounted
        open={editOpen}
        onClose={() => setEditOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="outline-none focus:outline-none ">
            <div className=" w-full ">
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b-0.5 border-gray-300">
                  <button
                    className="text-center flex items-center justify-center w-[40px] h-[40px] rounded-lg ml-auto bg-gray-800 text-white text-xl font-medium hover:bg-gray-900"
                    onClick={() => setEditOpen(false)}
                  >
                    <IoClose />
                  </button>
                </div>
                {/* body */}
                <div className=" p-6 flex-auto w-full border-2 border-gray-200 rounded mt-[1rem]">
                  <form onSubmit={handleUpdateCategory}>
                    <label
                      // for="default"
                      className="block mb-2 font-semibold after:content-['*'] after:ml-0.5 after:text-red-500  text-sm  text-gray-900"
                    >
                      Add Category
                    </label>
                    <select
                      name='category'
                      className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                      defaultValue={category}
                    >

                      {categories?.map((categoryProduct) => (

                        <option value={categoryProduct.categoryTitle} key={categoryProduct?._id}
                          selected={category === categoryProduct.categoryTitle}
                        >
                          {categoryProduct.categoryTitle}
                        </option>

                      ))}
                    </select>

                    <div className=" md:flex md:justify-center md:items-center md:gap-8">
                      <div className='my-3'>
                        {
                          !image ?
                            <img src={imageURL} alt="images" className='w-64' />
                            :
                            <img src={image} alt="images" className='w-64' />
                        }
                      </div>
                      <div className="h-20 w-full">
                        <label className="after:content-['*'] after:ml-0.5 text-sm after:text-red-500 font-semibold">
                          Image
                        </label>
                        <input
                          type="file"
                          onChange={handleImage}
                          accept="image/*"

                          className="mt-2 w-full px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 rounded-md sm:text-sm"
                          placeholder="slider image"
                        />
                      </div>
                    </div>

                    <div className="my-3 ">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Product URL
                      </label>

                      <input
                        type="text"
                        defaultValue={url}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                        placeholder="Product URL"
                        name="url"
                      />

                    </div>

                    <button
                      type="submit"
                      className="py-2 px-7 w-full bg-[#55c3c1f7]  text-sm font-medium text-white rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </Box>
      </Modal>
    </div>
  );
};

export default UpdateCategoryModal;
