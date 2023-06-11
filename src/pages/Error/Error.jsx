import React from "react";
import notFoundLogo from "../../images/logo/notFound.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex h-screen items-center sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
        <img src={notFoundLogo} alt="" />
        <div>
          <h1 className="text-5xl uppercase mb-8 text-center font-extrabold text-gray-700 tracking-widest">
            Page not found.
          </h1>
          <h1 className="text-xl my-4 text-center font-semibold text-gray-700 ">
            Are you sure the website URL is correct.{" "}
          </h1>
          <p className="text-xl mt-11 text-center">
            <Link className="underline  text-primary font-bold " to={"/"}>
              Go Back
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
