import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import GetAPI from "../../../../APIHooks/GetAPI";
import FooterDescriptionModal from "./FooterDescriptionModal";
import UpdatedApi from "../../../../APIHooks/UpdatedItem";
import FooterInfoModal from "./FooterInfoModal";

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
  const [footerInfo, setFooterInfo] = useState([]);
  const [openInfo, setOpenInfo] = useState(false);

  //open description form
  const [openDescription, setOpenDescription] = useState(false);
  //description
  useEffect(() => {
    GetAPI(`footer-description`, setFooterDescription);
  }, []);
  //info
  useEffect(() => {
    GetAPI(`footer-info`, setFooterInfo);
  }, []);
  const handleOPenInfo = () => {
    openInfo === true ? setOpenInfo(false) : setOpenInfo(true);
  };

  const handleOPenDescription = () => {
    openDescription === true
      ? setOpenDescription(false)
      : setOpenDescription(true);
  };
  //description
  const handleDescriptionUpdated = (data) => {
    const updatedData = {
      ...data,
    };

    UpdatedApi(
      `footer-description/${footerDescription[0]?._id}`,
      setFooterDescription,
      updatedData
    );
  };
  //info
  const handleInfoUpdated = (data) => {
    console.log(data);
    const updatedData = {
      address: data.address || footerInfo[0]?.address,
      phone: data.phone || footerInfo[0]?.phone,
      email: data.email || footerInfo[0]?.email,
    };

    UpdatedApi(`footer-info/${footerInfo[0]?._id}`, setFooterInfo, updatedData);
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
            handleDescriptionUpdated={handleDescriptionUpdated}
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
            {footerInfo[0]?.address}
          </h3>
          <h3 className="text-sm text-textColor my-3">
            <span className="font-semibold">Phone : </span>
            {footerInfo[0]?.phone}
          </h3>
          <h3 className="text-sm text-textColor my-3">
            <span className="font-semibold">Email : </span>
            {footerInfo[0]?.email}
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
          <FooterInfoModal
            handleInfoUpdated={handleInfoUpdated}
            style={style}
            openInfo={openInfo}
            setOpenInfo={setOpenInfo}
            footerInfo={footerInfo}
          ></FooterInfoModal>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
