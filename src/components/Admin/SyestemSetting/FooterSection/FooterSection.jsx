import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "45%", xs: "80%" },
  boxShadow: 20,
  //padding: "20px "
};
const FooterSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //open information form
  const [openInfo, setOpenInfo] = useState(false);

  //open description form
  const [openDescription, setOpenDescription] = useState(false);

  //handle open info
  const handleOPenInfo = () => {
    openInfo === true ? setOpenInfo(false) : setOpenInfo(true);
  };

  console.log(openInfo);
  const handleOPenDescription = () => {
    openDescription === true
      ? setOpenDescription(false)
      : setOpenDescription(true);
  };
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* footer description */}
        <div className="m-4">
          <h2 className="text-xl lg:text-2xl font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
            Footer Description Here
          </h2>
          <p className="text-textColor text-sm">
            Machen Sie das Einkaufen von zu Hause aus einfacher.
          </p>
          {/* edit description button */}
          <div className="text-left my-6">
            <button
              onClick={handleOPenDescription}
              className="py-2 px-5  text-sm font-medium text-white bg-[#55c3c1f7] rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee] "
            >
              Edit Description
            </button>
          </div>
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
                        <form
                          action=""
                          // onSubmit={handleCommentReplySubmit}
                        >
                          <label className="block mb-3 text-sm font-medium text-gray-900 ">
                            Footer Description
                          </label>
                          <textarea
                            rows="4"
                            className=" mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-lightGray"
                            // value={replyText}
                            // onChange={handleReplyChange}
                            placeholder="Description here..."
                            required
                          ></textarea>
                          <button
                            className="py-2 px-7  text-sm font-medium text-white bg-primary rounded-sm border-[3px] border-primary hover:bg-secondary hover:border-secondary "
                            //onClick={handleOpen}
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
          {/* edit desc form */}
        </div>

        {/* footer information */}
        <div className="m-4">
          <h2 className="text-xl lg:text-2xl font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
            Footer Information Here
          </h2>

          <h3 className="text-sm text-textColor my-3">
            <span className="font-semibold">Address : </span>
            Berliner strasse, 60311, Frankfurt am main, Germany
          </h3>
          <h3 className="text-sm text-textColor my-3">
            <span className="font-semibold">Phone : </span>
            (049) 1766-2058329
          </h3>
          <h3 className="text-sm text-textColor my-3">
            <span className="font-semibold">Email : </span>
            KaufenzuHause@info.com
          </h3>

          {/* edit info button */}
          <div className="text-left my-6">
            <button
              onClick={handleOPenInfo}
              className="py-2 px-5  text-sm font-medium text-white bg-[#55c3c1f7] rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
            >
              Edit Information
            </button>
          </div>
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
                        <form
                          action=""
                          // onSubmit={handleCommentReplySubmit}
                        >
                          {/* address field */}
                          <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Address
                            </label>

                            <input
                              type="text"
                              className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                              placeholder="Your name"
                              {...register("address", {
                                required: "Address is required",
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
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Phone Number
                            </label>

                            <input
                              type="text"
                              className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                              placeholder="Phone Number"
                              {...register("phone", {
                                required: "Phone Number is required",
                              })}
                            />
                            {errors.phone && (
                              <p className="text-red-500 mt-1">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>

                          <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                              placeholder="Email"
                              {...register("email", {
                                required: "Email is required",
                              })}
                            />
                            {errors.email && (
                              <p className="text-red-500 mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <button
                            className=" mt-3 py-2 px-7  text-sm font-medium text-white bg-primary rounded-sm border-[3px] border-primary hover:bg-secondary hover:border-secondary "
                            //onClick={handleOpen}
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
      </div>
    </section>
  );
};

export default FooterSection;
