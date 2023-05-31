import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import GetAPI from "../../../../APIHooks/GetAPI";
import FooterDescriptionModal from "./FooterDescriptionModal";
import UpdatedApi from "../../../../APIHooks/UpdatedItem";

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
  const [footerDescription, setFooterDescription] = useState([]);
  const [openInfo, setOpenInfo] = useState(false);

  //open description form
  const [openDescription, setOpenDescription] = useState(false);
  useEffect(() => {
    GetAPI(`footer-description`, setFooterDescription);
  }, []);
  const handleOPenInfo = () => {
    openInfo === true ? setOpenInfo(false) : setOpenInfo(true);
  };

  const handleOPenDescription = () => {
    openDescription === true
      ? setOpenDescription(false)
      : setOpenDescription(true);
  };
  const handleUpdated = (data) => {
    const updatedData = {
      ...data,
    };

    UpdatedApi(
      `footer-description/${footerDescription[0]?._id}`,
      setFooterDescription,
      updatedData
    );
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
            {footerDescription[0]?.description}
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
          <FooterDescriptionModal
            handleUpdated={handleUpdated}
            style={style}
            setOpenDescription={setOpenDescription}
            openDescription={openDescription}
            footerDescription={footerDescription}
          ></FooterDescriptionModal>
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
                      <div className="  p-6 flex-auto w-full border-2 border-gray-200 rounded ="></div>
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
