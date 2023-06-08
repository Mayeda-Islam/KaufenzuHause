import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../ContextProvider/ContextProvider";
import TotalOrder from "./TotalOrder";
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
              <h2 className="text-2xl md:text-2xl font-medium text-textColor">
                Shopping Cart
              </h2>
              {cart.length > 0 ? (
                <div className=" py-6">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                                    {productTitle && productTitle.slice(0, 30)}
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
                "Cart is empty"
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
