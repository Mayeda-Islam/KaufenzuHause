import React from "react";
import { Link } from "react-router-dom";
import paymentSuccessLogo from "../../images/logo/paymentSuccessfull.png";

const PaymentSuccess = () => {
  return (
    <section className="flex h-screen items-center h-full sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
        <img src={paymentSuccessLogo} alt="" />
        <div>
          <h1 className="text-3xl mb-4 text-center font-extrabold text-gray-700 tracking-widest">
            Your payment is successful
          </h1>
          <h1 className="text-xl my-0 text-center font-semibold text-gray-700 ">
            Thank you for your payment.An automated payment receipt will be sent
            to your registered email.{" "}
          </h1>
          <p className="text-xl mt-11 text-center">
            <Link className="underline  text-primary font-bold " to={"/"}>
              Back to Home
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
