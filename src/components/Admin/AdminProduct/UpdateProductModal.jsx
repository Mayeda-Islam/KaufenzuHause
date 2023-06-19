import { Box, Modal } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: { md: "50%", xs: "98%" },
  maxHeight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "scroll",
  bgcolor: "white",
};
const UpdateProductModal = ({
  setOpenUpdateModal,
  openUpdateModal,
  updatedProduct,
}) => {
  console.log(updatedProduct);
  return (
    <div>
      <Modal
        keepMounted
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="outline-none focus:outline-none ">
            <div className=" ">
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b-0.5 border-gray-300"></div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProductModal;
