import React from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleForgotPassword = (data) => {
        console.log(data);
    }
    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit(handleForgotPassword)} className='w-11/12 md:w-3/4 lg:w-5/12  xl:w-1/3 mx-auto p-3 lg:p-10 bg-lightGray/10 shadow-gray-300 border border-gray-200 rounded-xl shadow-xl'>
                <h1 className='text-2xl font-semibold text-center my-5'>Reset Password Form</h1>

                <label className="block my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium ">
                        Email Address
                    </span>
                    <input
                        type="email"
                        className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder:text-gray-500 text-black  block w-full rounded-md sm:text-sm"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            }
                        })}
                        placeholder='abc@gmail.com'
                    />
                    {errors?.email && (
                        <p className="text-red-500 ">Your Email is required</p>
                    )}
                </label>

                <input
                    className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                    type="submit"
                    value={`Login`}
                />
            </form >
        </div>
    );
};

export default ForgotPassword;