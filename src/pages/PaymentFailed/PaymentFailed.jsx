import React from "react";
import { Link } from "react-router-dom";

import errorLogo from "../../images/logo/error.png";

const PaymentFailed = () => {
  return (
    <section className="flex items-center h-screen  sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
        <img src={errorLogo} className="w-1/5" alt="" />
        <div>
          <h1 className="text-5xl mb-8 text-center font-extrabold text-gray-700 tracking-widest">
            Payment Failed.
          </h1>
          <h1 className="text-xl my-4 text-center font-semibold text-gray-700 ">
            Your payment was not successfully processed.{" "}
            <Link
              className="underline text-primary font-bold "
              to={"/payment"}
            >
              Try again
            </Link>{" "}
            again later or use another payment method.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PaymentFailed;
