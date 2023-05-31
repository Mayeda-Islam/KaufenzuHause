import { Style } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const FooterDescriptionModal = ({
  style,
  openDescription,
  footerDescription,
  setOpenDescription,
  handleUpdated,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //open information form

  return (
    <div>
      <Modal
        keepMounted
        open={openDescription}
        onClose={() => setOpenDescription(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div className="outline-none focus:outline-none ">
              <div className=" w-full ">
                <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-4 border-b-0.5 border-gray-300">
                    <button
                      className="text-center flex items-center justify-center w-[40px] h-[40px] rounded-lg ml-auto bg-gray-800 text-white text-xl font-medium hover:bg-gray-900"
                      onClick={() => setOpenDescription(false)}
                    >
                      <IoClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className=" p-6 flex-auto w-full border-2 border-gray-200 rounded mt-[1rem]">
                    <form onSubmit={handleSubmit(handleUpdated)}>
                      <label className="block mb-3 text-sm font-medium text-gray-900 ">
                        Footer Description
                      </label>
                      <textarea
                        type="text"
                        {...register("description", {
                          required: "Description is required",
                        })}
                        rows="4"
                        className="mb-2  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-lightGray"
                        defaultValue={footerDescription[0]?.description}
                        // onChange={handleReplyChange}
                        placeholder="Description here..."
                      ></textarea>
                      {errors?.description && (
                        <p className="text-red-500 mb-5 text-sm">
                          Description is required
                        </p>
                      )}
                      <button
                        type="submit"
                        className="py-2 px-7  text-sm font-medium text-white bg-primary rounded-sm border-[3px] border-primary hover:bg-secondary hover:border-secondary "
                        onClick={() => setOpenDescription(false)}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Box>
      </Modal>
    </div>
  );
};

export default FooterDescriptionModal;
