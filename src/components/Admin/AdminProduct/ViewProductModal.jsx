import { Box, Modal } from "@mui/material";
import parse from "html-react-parser";
import React from "react";
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
const ViewProductModal = ({ open, setOpen, product }) => {
  console.log(product);
  const {
    brand,
    category,
    colors,
    delivery,
    description,
    images,
    previousPrice,
    productPrice,
    productTitle,
    shipping,
    sizes,
    totalProduct,
    _id,
  } = product;
  console.log(delivery);
  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="p-4">
          <div className=" flex justify-center items-center">
            <div className="flex flex-wrap gap-x-4">
              {images?.map((image) => (
                <>
                  <img src={image} className=" w-20 h-20" alt="" />
                </>
              ))}
            </div>
          </div>
          <div className="my-4">
            <h1 className="uppercase">
              Brand Name: <span>{brand}</span>{" "}
            </h1>
            <h1 className="uppercase">
              Products Name: <span>{productTitle}</span>{" "}
            </h1>
            <h1 className="uppercase">
              Category Name: <span>{category}</span>{" "}
            </h1>
            <h1 className="uppercase">
              Previous price: <span>{previousPrice}</span>{" "}
            </h1>
            <h1 className="uppercase">
              Present price: <span>{productPrice}</span>{" "}
            </h1>
            <h1 className="uppercase">
              Total product: <span>{totalProduct}</span>{" "}
            </h1>
            <h1>
              Colors :{" "}
              {colors?.map((color) => (
                <>
                  <span>{color} </span>
                </>
              ))}
            </h1>
            <h1>
              Sizes :{" "}
              {sizes?.map((size) => (
                <>
                  <span>{size} </span>
                </>
              ))}
            </h1>
            <h1>
              Delivery: <span> {delivery ? parse(delivery) : ""} </span>
            </h1>
            <br />
            <h1>
              Description:<span> {description ? parse(description) : ""}</span>
            </h1>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewProductModal;
