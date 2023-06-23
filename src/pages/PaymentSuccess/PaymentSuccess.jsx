import React from "react";
import { Link } from "react-router-dom";
import paymentSuccessLogo from "../../images/logo/paymentSuccessfull.png";

const PaymentSuccess = () => {
  return (
    <section className="flex  items-center h-full p-5">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-4 space-y-8 ">
        <img src={paymentSuccessLogo} alt="success image" />
        <div>
          <h1 className="text-3xl mb-4 text-center font-extrabold text-gray-700 tracking-widest">
            Your payment is successful
          </h1>
          <h1 className="text-xl my-0 text-center font-semibold text-gray-700 ">
            Thank you for your payment.An automated payment receipt will be sent
            to your registered email.{" "}
          </h1>

          <div className="flex justify-center items-center gap-10">
            <p className="text-xl mt-11 text-center">
              <Link className="underline  text-primary font-bold " to={"/"}>
                Back to Home
              </Link>{" "}
            </p>
            <p className="text-xl mt-11 text-center">
              <Link className="underline  text-primary font-bold " to={"/dashboard/myOrders"}>
                Check Progress
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
