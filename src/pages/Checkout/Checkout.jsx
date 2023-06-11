import React from "react";
import { Link } from "react-router-dom";
import TotalOrder from "../Cart/TotalOrder";

const Checkout = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-8 lg:pt-10 lg:pb-14 bg-[#f7f7f7] relative">
      <div className=" w-[95%] lg:w-[94%] mx-auto">

        <div className="flex justify-center flex-wrap">
          <div className="w-full md:w-full lg:w-7/12">
            <div className="m-4">
              <h2 className="text-2xl font-medium text-textColor mb-4">
                Billing Details
              </h2>
              <form onSubmit={""} className=" p-6 bg-white rounded-md">
                <div className="flex  justify-center items-center flex-wrap lg:flex-nowrap my-4">
                  <div className="w-full md:w-full lg:w-50% mx-0 md:mx-0 lg:mx-3 xxl:mx-3">
                    <label className="text-sm  font-medium">
                      First name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="w-full md:w-full lg:w-50% mx-0 md:mx-0 lg:mx-3 xxl:mx-3">
                    <label className="text-sm  font-medium">
                      Last name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 py-2 outline-0 w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Company name<span>(optional)</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="my-4">
                    <label className="text-sm  font-medium">
                      Country / Region<span className="text-red-400"> *</span>
                    </label>
                    <select className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                      <option disabled selected>
                        Choose District
                      </option>
                      <option>Dhaka</option>
                      <option>Dinajpur</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Street address<span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="House number and street name"
                      className="border text-xs border-gray box-border mb-4 px-4 leading-6 py-2 outline-0 w-full"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      className="border text-gray text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Town / City <span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      State<span className="text-red-400"> *</span>
                    </label>
                    <select className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                      <option disabled selected>
                        Choose District
                      </option>
                      <option>Dhaka</option>
                      <option>Dinajpur</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      State<span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      ZIP Code<span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Email address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold">
                    Additional information
                  </h1>
                  <div className="my-4">
                    <label className="text-sm font-medium text-blue-gray-500">
                      Order notes (optional)
                    </label>
                    <textarea
                      type="text"
                      name=""
                      id=""
                      placeholder="Notes about order, e.g special notes for delivery."
                      className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <TotalOrder state={'process'} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
