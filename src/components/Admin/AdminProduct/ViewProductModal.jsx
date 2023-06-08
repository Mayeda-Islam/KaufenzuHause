import { Box, Modal } from '@mui/material';
import React from 'react';

const ViewProductModal = () => {
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
            {/* <div className=" w-full ">
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
                          required
                          className="mt-2 w-full px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 rounded-md sm:text-sm"
                          placeholder="slider image"
                        />
                      </div>
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
            </div> */}
          </div>

        </Box>
      </Modal>
        </div>
    );
};

export default ViewProductModal;