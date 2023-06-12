import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../ContextProvider/ContextProvider";
import TotalOrder from "./TotalOrder";
import { Link } from "react-router-dom";
const Cart = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, removeFromCart, increment, decrement } =
    React.useContext(Context);
    
  return (
    <section className="pt-10 pb-14 bg-[#fff] relative">
      <div className=" w-[95%] lg:w-[94%] mx-auto">
        <div className="flex justify-center flex-wrap">
          <div className="w-full md:w-full lg:w-8/12">
            <div className="m-3">
              {cart.length > 0 ? (
                <div className=" py-6">
                  <h2 className="text-2xl md:text-2xl font-medium text-textColor">
                    Shopping Cart
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-sm text-gray-700 uppercase bg-gray-100 py-5">
                        <tr className="bg-transparent ">
                          <th scope="col" className="px-6 py-3 opacity-0">
                            image
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Product
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Price
                          </th>

                          <th scope="col" className="px-6 py-3">
                            Quantity
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.length > 0 &&
                          cart.map((item) => {
                            const {
                              _id,
                              images,
                              productTitle,
                              quantity,
                              productPrice,
                            } = item;
                            return (
                              <tr key={_id} className="border-b mb-3">
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                  <div className="flex  items-center gap-3">
                                    <button className="text-xl text-gray-400">
                                      <AiOutlineClose
                                        onClick={() => removeFromCart(_id)}
                                      />
                                    </button>
                                    {images && images[0] && (
                                      <img
                                        src={images[0]}
                                        className="md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[90px]"
                                      />
                                    )}
                                  </div>
                                </th>
                                <td className="px-6 py-4">
                                  <h3 className="text-base font-medium text-textPrimary mb-3">
                                    {productTitle && productTitle?.slice(0, 30)}
                                  </h3>
                                </td>
                                <td className="px-6 py-4">
                                  <span className="text-base text-textPrimary font-normal">
                                    ${productPrice}
                                  </span>
                                </td>

                                <td className="px-6 py-4">
                                  {/* increment and decrement btn */}
                                  <div className="flex itemc-center justify-centr gap-1">
                                    <button
                                      onClick={() => increment(_id)}
                                      className="w-9 h-9 rounded  bg-gray-100 border border-gray-300"
                                    >
                                      +
                                    </button>
                                    <span className="w-9 h-9 rounded border border-gray-300 bg-bgOne flex items-center justify-center">
                                      {quantity}
                                    </span>
                                    <button
                                      onClick={() => decrement(_id)}
                                      className="w-9 h-9 rounded  bg-gray-100 border border-gray-300"
                                    >
                                      -
                                    </button>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-base">
                                  ${productPrice * quantity}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <section className="flex items-center h-full sm:p-16">
                  <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-40 h-40 text-gray-700"
                    >
                      <path
                        fill="currentColor"
                        d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                      ></path>
                      <rect
                        width="176"
                        height="32"
                        x="168"
                        y="320"
                        fill="currentColor"
                      ></rect>
                      <polygon
                        fill="currentColor"
                        points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                      ></polygon>
                      <polygon
                        fill="currentColor"
                        points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                      ></polygon>
                    </svg>
                    <div>
                      <h1 className="text-5xl my-4 text-center font-extrabold text-gray-700 tracking-widest">
                        Cart is empty.
                      </h1>
                      <h1 className="text-xl my-4 text-center font-semibold text-gray-700 ">
                        Please add some{" "}
                        <Link
                          className="underline text-primary font-bold "
                          to={"/products"}
                        >
                          Products
                        </Link>
                      </h1>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
          <TotalOrder />
        </div>
      </div>
    </section>
  );
};

export default Cart;
