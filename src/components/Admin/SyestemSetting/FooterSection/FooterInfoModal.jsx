import { Box, Modal } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const FooterInfoModal = ({
  handleInfoUpdated,
  style,
  openInfo,
  setOpenInfo,
  footerInfo,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Modal
        keepMounted
        open={openInfo}
        onClose={() => setOpenInfo(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div className="outline-none focus:outline-none ">
              <div className=" w-full ">
                <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b-0.5 border-gray-300">
                    <button
                      className="text-center flex items-center justify-center w-[40px] h-[40px] rounded-lg ml-auto bg-gray-800 text-white text-xl font-medium hover:bg-gray-900"
                      onClick={() => setOpenInfo(false)}
                    >
                      <IoClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="  p-6 flex-auto w-full border-2 border-gray-200 rounded =">
                    <form action="" onSubmit={handleSubmit(handleInfoUpdated)}>
                      <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Address
                        </label>

                        <input
                          type="text"
                          defaultValue={footerInfo[0]?.address}
                          className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                          placeholder="Your name"
                          {...register("address", {
                            // required: "Address is required",
                          })}
                        />
                        {errors.address && (
                          <p className="text-red-500 mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      {/* phone field */}
                      <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Phone Number
                        </label>

                        <input
                          type="text"
                          defaultValue={footerInfo[0]?.phone}
                          className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                          placeholder="Phone Number"
                          {...register("phone", {
                            // required: "Phone Number is required",
                          })}
                        />
                        {errors.phone && (
                          <p className="text-red-500 mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue={footerInfo[0]?.email}
                          id="email"
                          className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                          placeholder="Email"
                          {...register("email", {
                            // required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="py-2 px-5  text-sm font-medium text-white bg-[#55c3c1f7] rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee] "
                        onClick={() => setOpenInfo(false)}
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

export default FooterInfoModal;
