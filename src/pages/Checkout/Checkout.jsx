import React from 'react'
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <section className="py-8 lg:pt-10 lg:pb-14 bg-[#f7f7f7] relative">
            <div className=" w-[95%] lg:w-[94%] mx-auto">
                {/* login and coupon request */}
                <div className="m-4">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[15px] font-medium text-textColor">Returning Customer?</span>
                        <span className="text-[15px] font-medium text-blue-400 underline">
                            <Link>
                                Click here to login
                            </Link>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-[15px] font-medium text-textColor">Have a  Coupon?</span>
                        <span className="text-[15px] font-medium text-blue-400 underline">
                            <Link>
                                Click here to Enter your Code?
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap">
                    <div className="w-full md:w-full lg:w-7/12">
                        <div className="m-4">
                            <h2 className="text-2xl font-medium text-textColor mb-4">Billing Details</h2>
                            <form onSubmit={''} className=' p-6 bg-white rounded-md'>

                                <div className="flex  justify-center items-center flex-wrap lg:flex-nowrap my-4">
                                    <div className='w-full md:w-full lg:w-50% mx-0 md:mx-0 lg:mx-3 xxl:mx-3'>
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
                                    <div className='w-full md:w-full lg:w-50% mx-0 md:mx-0 lg:mx-3 xxl:mx-3'>
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
                                    <h1 className="text-2xl font-semibold">Additional information</h1>
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

                    <div className="w-full md:w-full lg:w-5/12">
                        <div className="m-4 ">
                            <h3 className="text-2xl md:text-2xl font-medium text-textColor">Total Order</h3>
                            <div className="p-6 bg-white relative shadow shadow-gray-200 my-4 rounded-md">

                                <table className=' w-full text-[13px] text-left text-gray-500 dark:text-gray-400 '>
                                    <tbody>
                                        <tr className=" border-b border-gray-300 mb-5">
                                            <th scope="row" className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white capitalize text-base">
                                                SubTotal
                                            </th>
                                            <td className="px-6 py-4">
                                                $521
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b border-gray-300 mb-5">
                                            <th scope="row" className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white capitalize text-base">
                                                Shipping
                                            </th>
                                            <td className="px-6 py-4">
                                                $521
                                            </td>


                                        </tr>
                                        <tr className="bg-white  mb-5">
                                            <th scope="row" className=" px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white capitalize text-base">
                                                total
                                            </th>
                                            <td className="px-6 py-4">
                                                $521
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                                <div className="my-3 text-center">
                                    <button className=" text-white py-2.5 px-14 bg-primary hover:bg-secondary  text-base  rounded-md hover:text-textPrimary  capilatize " >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Checkout