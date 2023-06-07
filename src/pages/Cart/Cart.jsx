import React from "react";
import { products } from "../../Data/Placeholder";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pt-10 pb-14 bg-[#fff] relative">
      <div className=" w-[95%] lg:w-[94%] mx-auto">
        <div className="flex justify-center flex-wrap">
          <div className="w-full md:w-full lg:w-8/12">
            <div className="m-3">
              <h2 className="text-2xl md:text-2xl font-medium text-textColor">
                Shopping Cart
              </h2>
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
                      {products.slice(0, 5).map((cart, index) => (
                        <tr key={index} className=" border-b mb-3">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="flex  items-center gap-3">
                              <button className="text-xl text-gray-400">
                                <AiOutlineClose />
                              </button>
                              <img
                                src={cart.img}
                                className="md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[90px]"
                              />
                            </div>
                          </th>
                          <td className="px-6 py-4">
                            <h3 className="text-base font-medium text-textPrimary mb-3">
                              {cart.title.slice(0, 20)}
                            </h3>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-base text-textPrimary font-normal">
                              {cart.price}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            {/* increment and decrement btn */}
                            <div className="flex itemc-center justify-centr gap-1">
                              <button className="w-9 h-9 rounded  bg-gray-100 border border-gray-300">
                                +
                              </button>
                              <span className="w-9 h-9 rounded border border-gray-300 bg-bgOne flex items-center justify-center">
                                5
                              </span>
                              <button className="w-9 h-9 rounded  bg-gray-100 border border-gray-300">
                                -
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-base">$6521</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full lg:w-4/12">
            <div className="m-4">
              <h3 className="text-2xl md:text-2xl font-medium text-textColor">
                Cart Total
              </h3>
              <div className="p-6 bg-white relative shadow shadow-gray-200 my-5">
                <table className=" w-full text-[13px] text-left text-gray-500 dark:text-gray-400 ">
                  <tbody>
                    <tr className=" border-b border-gray-300 mb-5">
                      <th
                        scope="row"
                        className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white uppercase"
                      >
                        SubTotal
                      </th>
                      <td className="px-6 py-4">$521</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-300 mb-5">
                      <th
                        scope="row"
                        className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white uppercase"
                      >
                        Shipping
                      </th>
                      <td className="px-6 py-4">$521</td>
                    </tr>
                    <tr className="bg-white  mb-5">
                      <th
                        scope="row"
                        className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white uppercase"
                      >
                        total
                      </th>
                      <td className="px-6 py-4">$521</td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-3 text-center">
                  <Link to={"/checkout"}>
                    <button className=" text-white py-2.5 px-14 bg-primary hover:bg-secondary  text-base  rounded-md hover:text-textPrimary  capilatize ">
                      Proceed To checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
