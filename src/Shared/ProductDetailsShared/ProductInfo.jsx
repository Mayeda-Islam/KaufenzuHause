import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Context } from "../../ContextProvider/ContextProvider";
import { Link } from "react-router-dom";
// import swal from "sweetalert";
const ProductInfo = ({ product }) => {
  const { addToCart, cart, user } = useContext(Context);
  const {
    _id,
    productTitle,
    productPrice,
    previousPrice,
    totalProduct,
    category,
    brand,
    model,
  } = product;

  //save the color and size data
  const [cartQuantity, setCartQuantity] = React.useState(1);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (product?.colors?.length > 0) {
      setSelectedColor(product?.colors[0]);
    }

    if (product?.sizes?.length > 0) {
      setSelectedSize(product?.colors[0]);
    }
  }, [product]);

  const incrementQuantity = () => {
    if (cartQuantity < totalProduct) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  // const handleProduct = () => {
  //   if (colors && selectedColor === '') {
  //     return swal("Warning!", "Choose a Color", "error");
  //   }
  //   if (sizes && selectedSize === '') {
  //     return swal("Warning!", "Choose a Size!", "error");
  //   }
  //   const formData = {
  //     productTitle,
  //     productPrice,
  //     previousPrice,
  //     totalProduct,
  //     category,
  //     brand,
  //     model,
  //   }
  //   addToCart(formData, cartQuantity)
  // }

  return (
    <div>
      <h2 className="text-textPrimary font-semibold text-xl md:text-3xl mb-2">
        {productTitle}
      </h2>
      <div className="flex items-center gap-2 text-textPrimary py-1    text-base  bg-white ">
        <span className="line-through text-gray-500">€{previousPrice}</span>
        <span className="text-black text-2xl font-semibold">
          €{productPrice}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="block text-[16px] font-medium text-textColor">
          Category :{" "}
        </span>
        <span className="block text-sm font-normal text-textColor">
          {category}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="block text-[16px] font-medium text-textColor">
          Model :{" "}
        </span>
        <span className="block text-sm font-normal text-textColor">
          {model}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="block text-[16px] font-medium text-textColor">
          Brand :{" "}
        </span>
        <span className="block text-sm font-normal text-textColor">
          {brand}
        </span>
      </div>

      {/* color and size slider */}
      <div className=" my-4">
        {/* color   slide */}
        {product?.colors?.length > 0 && (
          <div>
            <span className="block text-sm font-normal text-textColor">
              Color : {selectedColor ? selectedColor : "No Color Selected"}{" "}
            </span>
            <div className="flex items-center gap-3 mt-2">
              {/* color item */}

              {product?.colors?.map((color, index) => (
                <button
                  onClick={(e) => setSelectedColor(e.target.value)}
                  key={index}
                  className="px-2 py-1 border bg-gray-100"
                  value={color}
                >
                  {color}
                </button>
              ))}

              {/* clear button */}
              <button
                onClick={() => setSelectedColor(null)}
                className="text-textColor flex items-center text-[14px]"
              >
                <MdClose />
                <span>Clear</span>
              </button>
            </div>
          </div>
        )}

        {/* choose a  size  */}
        {product?.sizes?.length > 0 && (
          <div className="mt-4">
            <span className="block text-sm font-normal text-textColor">
              Size : {selectedSize ? selectedSize : "No Size Selected"}{" "}
            </span>
            <div className="flex items-center gap-3 mt-2">
              {/* size item */}
              {product?.sizes?.map((size, index) => (
                <button
                  onClick={(e) => setSelectedSize(e.target.value)}
                  key={index}
                  className="px-2 py-1 border bg-gray-100"
                  value={size}
                >
                  {size}
                </button>
              ))}
              {/* clear button */}
              <button
                onClick={() => setSelectedSize(null)}
                className="text-textColor flex items-center text-[14px]"
              >
                <MdClose />
                <span>Clear</span>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* cart button and increment */}

      {
        user?.email ? <>

          {
            (totalProduct > 0) ?
              <div className="flex items-center my-4 gap-5">
                {/* increment and decrement btn */}
                <div className="flex ">
                  <button
                    className="py-1 px-2 rounded  bg-gray-100 border border-gray-300"
                    onClick={() => decrementQuantity(product._id)}
                  >
                    -
                  </button>
                  <span className="py-1 px-4 rounded border border-gray-300 bg-bgOne flex items-center justify-center ">
                    {cartQuantity}
                  </span>
                  <button
                    className="py-1 px-2 rounded  bg-gray-100 border border-gray-300"
                    onClick={() => incrementQuantity(product._id)}
                  >
                    +
                  </button>
                </div>

                {/* add to cart button */}
                <button
                  onClick={() =>
                    addToCart(
                      {
                        _id,
                        productTitle,
                        productPrice,
                        model,
                        brand,
                        color: selectedColor,
                        size: selectedSize,
                        quantity: cartQuantity,
                      },
                      product?.colors?.length > 0,
                      product?.sizes?.length > 0
                    )
                  }
                  className=" text-white py-2 px-7  hover: rounded text-sm  bg-primary   border-2 border-transparent hover:border-textColor  hover:bg-transparent hover:text-textColor capitalize"
                >
                  {cart?.find((item) => item?._id === product?._id)
                    ? "Already added"
                    : "Add to cart"}
                </button>
                {/* add to wishlist */}
              </div>
              :
              <p className="my-4 text-sm font-semibold">This Product is Out of Stock Now</p>
          }
        </>
          :
          <>
            <p>Please <Link className="text-blue-500 hover:underline font-semibold" to={'/login'}> Login</Link> to Purchase the Product</p>
          </>
      }
      <hr className="my-3 border-0.5 border-gray-200" />
      {/* product others info */}
    </div>
  );
};

export default ProductInfo;
