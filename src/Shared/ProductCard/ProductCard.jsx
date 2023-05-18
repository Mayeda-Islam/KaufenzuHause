import React from "react";

const ProductCard = ({ product }) => {
  const { img, title, price, size, discount, categoryName } = product;
  return (
    <div className="shadow-md rounded-md p-4">
      <div>
        <img className="" src={img} alt="" />
      </div>

      <div className="text-start text-sm">
        <h1 className="text-primary">{title}</h1>
        <p>{categoryName}</p>
        <p>Price: {price} TK</p>
      </div>
    </div>
  );
};

export default ProductCard;
