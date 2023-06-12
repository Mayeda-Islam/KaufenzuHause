import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../ContextProvider/ContextProvider";

const Checkout = () => {
  const { calculateSubTotal, calculateTotal } = useContext(Context);
  const navigate = useNavigate()
  const [countries, setCountries] = useState([])
  const uri = `https://restcountries.com/v3.1/all`;
  fetch(uri)
    .then((res) => res.json())
    .then((data) => setCountries(data));

  const handleForm = (event) => {
    event.preventDefault()
    const form = event.target;

    const formData = {
      fullName: `${form.firstName.value} ${form.lastName.value}`,
      country: form.country.value,
      streetAddress: form.streetAddress.value,
      city: form.city.value,
      zipCode: form.zipCode.value,
      phoneNumber: form.phoneNumber.value,
      email: form.email.value,
      additional: form.additional.value
    }

    console.log(formData);
    localStorage.setItem('info', JSON.stringify(formData))

    navigate('/payment')
  }


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section className="py-8 lg:pt-10 lg:pb-14 bg-[#f7f7f7] relative">
      <form onSubmit={handleForm} className=" w-[95%] lg:w-[94%] mx-auto">
        <div className="flex justify-center flex-wrap">
          <div className="w-full md:w-full lg:w-7/12">
            <div className="m-4">
              <h2 className="text-2xl font-medium text-textColor mb-4">
                Billing Details
              </h2>
              <div className=" p-6 bg-white rounded-md">
                <div className="flex  justify-center items-center flex-wrap lg:flex-nowrap my-4">
                  <div className="w-full md:w-full lg:w-50% mx-0 md:mx-0 lg:mx-3 xxl:mx-3">
                    <label className="text-sm  font-medium">
                      First name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                      required
                    />
                  </div>
                  <div className="w-full md:w-full lg:w-50% mx-0 md:mx-0 lg:mx-3 xxl:mx-3">
                    <label className="text-sm  font-medium">
                      Last name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id=""
                      className="border border-gray box-border px-4 py-2 outline-0 w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="my-4">
                    <label className="text-sm  font-medium">
                      Country / Region<span className="text-red-400"> *</span>
                    </label>
                    <select
                      name="country"
                      className="border text-sm border-gray box-border px-4 leading-6 py-2 outline-0 w-full">
                      {countries.map((country) => (
                        <>
                          {" "}
                          <option
                            selected={country?.name?.common === 'Germany'}
                            value={country?.name?.common}>
                            {country?.name?.common}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Street address<span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      id=""
                      placeholder="House number and street name"
                      className="border text-sm border-gray box-border mb-4 px-4 leading-6 py-2 outline-0 w-full"
                      required
                    />

                  </div>
                  <div className="my-4">
                    <label className="text-sm font-medium">
                      Town / City <span className="text-red-400"> *</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      id=""
                      className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                      required
                    />
                  </div>
                  <div className="my-4">
                    <div className="my-4">
                      <label className="text-sm font-medium">
                        ZIP Code<span className="text-red-400"> *</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        id=""
                        className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                        required
                      />
                    </div>
                    <div className="my-4">
                      <label className="text-sm font-medium">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id=""
                        className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                        required
                      />
                    </div>
                    <div className="my-4">
                      <label className="text-sm font-medium">
                        Email address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id=""
                        className="border border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                        required
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
                        name="additional"
                        id=""
                        placeholder="Notes about order, e.g special notes for delivery."
                        className="border text-xs border-gray box-border px-4 leading-6 py-2 outline-0 w-full"
                      />
                    </div>
                  </div>
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
                  {/* <Link
                  to={'/payment'}
                  > */}
                  <button
                    type="submit"
                    className=" text-white py-2.5 px-14 bg-primary hover:bg-secondary  text-base  rounded-md hover:text-textPrimary  capitalize ">
                    Payment Proceed
                  </button>
                  {/* </Link> */}


                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </section >
  );
};

export default Checkout;
