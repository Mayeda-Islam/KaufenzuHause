import { useContext } from "react";
import { Context } from "../../ContextProvider/ContextProvider";
import { Link } from "react-router-dom";

const TotalOrder = ({ state }) => {
  const { cart, calculateSubTotal, calculateTotal } = useContext(Context);

  const handlePayment = () => {

  };
  return (
    <>
      {cart.length > 0 && (
        <div className="w-full md:w-full lg:w-4/12">
          <div className="m-4">
            <h3 className="text-2xl md:text-2xl font-medium text-textColor">
              Cart Total
            </h3>
            <div className="p-6 bg-white relative shadow shadow-gray-200 my-5">
              <table className=" w-full text-[13px] text-left text-gray-500 ">
                <tbody>
                  <tr className=" border-b border-gray-300 mb-5">
                    <th
                      scope="row"
                      className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap  uppercase"
                    >
                      SubTotal
                    </th>
                    <td className="px-6 py-4">${calculateSubTotal()}</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-300 mb-5">
                    <th
                      scope="row"
                      className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap  uppercase"
                    >
                      Shipping
                    </th>
                    <td className="px-6 py-4">$100</td>
                  </tr>
                  <tr className="bg-white  mb-5">
                    <th
                      scope="row"
                      className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap  uppercase"
                    >
                      total
                    </th>
                    <td className="px-6 py-4">${calculateTotal(100)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="my-3 text-center">
                {
                  state ?
                    <button
                      onClick={handlePayment}
                      className=" text-white py-2.5 px-14 bg-primary hover:bg-secondary  text-base  rounded-md hover:text-textPrimary  capitalize ">
                      Payment Proceed
                    </button>
                    :

                    <Link
                      // onClick={handlePayment}
                      to={'/checkout'}
                      className=" text-white py-2.5 px-14 bg-primary hover:bg-secondary  text-base  rounded-md hover:text-textPrimary  capitalize "
                    >
                      Proceed To checkout
                    </Link>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TotalOrder;
