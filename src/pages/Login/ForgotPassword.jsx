import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import serverUrl from '../../config/Config';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../ContextProvider/ContextProvider';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const ForgotPassword = () => {
    const { user } = useContext(Context)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = React.useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const [otpMatched, setOtpMatched] = useState(null)
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleForgotPassword = (data) => {
        setIsLoading(true)
        const formData = {
            email: data?.email
        }
        fetch(`${serverUrl}/users/forgetPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === "success") {
                    setCurrentUser(data?.data?.email)
                    swal("Congrats!", data?.message, "success");
                    setSuccess(true)
                    setIsLoading(false)
                } else {
                    swal("Oops!", data?.message, "error");
                }
            });

    }

    const handleOTP = (event) => {
        event.preventDefault()
        const formData = {
            email: currentUser,
            otp: event.target.otp.value
        }

        setIsLoading(true)
        fetch(`${serverUrl}/users/verifyForgetOTP`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === 'success') {
                    swal("Success!", data?.message, "success");
                }
                else {
                    swal("Oops!", data?.message, "error");
                }
                setOtpMatched(data?.isForgetOTPMatch)
                setIsLoading(false)
            });

    }


    const handleResendOTP = () => {
        setIsLoading(true)

        const formData = {
            email: user?.email
        }
        fetch(`${serverUrl}/users/resendOTP`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === "success") {
                    swal("Congrats!", data?.message, "success");
                    setIsLoading(false)

                } else {
                    swal("Oops!", data?.message, "error");
                }
            });
    }

    const handlePasswordChange = (data) => {
        const formData = {
            isForgetOTPMatch: otpMatched,
            email: currentUser,
            newPassword: data?.newPassword
        }
        setIsLoading(true)

        fetch(`${serverUrl}/users/updatePassword`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === 'success') {
                    swal("Success!", data?.message, "success");
                    setIsLoading(false)
                    navigate('/login')

                }
                else {
                    swal("Oops!", data?.message, "error");
                }

            });

    }

    return (
        <div className='my-10'>
            {!otpMatched ?
                <>
                    {
                        success ? <>
                            <form onSubmit={handleOTP} className='w-11/12 md:w-3/4 lg:w-5/12  xl:w-1/3 mx-auto p-3 lg:p-10 bg-lightGray/10 shadow-gray-300 border border-gray-200 rounded-xl shadow-xl'>
                                <h1 className='text-2xl font-semibold text-center my-5'>
                                    Login With Kaufenzu Hause</h1>
                                <label className="block my-3">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium ">
                                        Verify Your OTP <span className='text-xs text-gray-600'>(Check Your Email)</span>
                                    </span>
                                    <input
                                        name='otp'
                                        type="number"
                                        className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder:text-gray-500 text-black  block w-full rounded-md sm:text-sm"

                                        placeholder=''
                                    />

                                </label>

                                <div className='w-full flex justify-end mt-3'>
                                    <p
                                        onClick={handleResendOTP}
                                        className=' cursor-pointer hover:text-blue-500 underline font-semibold '>Resend OTP</p>
                                </div>

                                <button
                                    className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                                    type="submit"
                                >
                                    {isLoading ? <CircularProgress size={20} /> : 'Verify Now'}
                                </button>

                            </form >
                        </>
                            :
                            <>
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


                                    <button
                                        className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                                        type="submit"
                                    >
                                        {isLoading ? <CircularProgress size={20} /> : 'Submit'}
                                    </button>
                                </form >
                            </>
                    }
                </>
                :
                <>
                    <form onSubmit={handleSubmit(handlePasswordChange)} className='w-11/12 md:w-3/4 lg:w-5/12  xl:w-1/3 mx-auto p-3 lg:p-10 bg-lightGray/10 shadow-gray-300 border border-gray-200 rounded-xl shadow-xl'>
                        <h1 className='text-2xl font-semibold text-center my-5'>Reset Password Form</h1>

                        <label className="block my-3">
                            <div className='flex items-center justify-between'>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium ">
                                    Old  Password
                                </span>
                                <p onClick={() => setShowPassword(!showPassword)} className=' px-2 rounded-md py-1  cursor-pointer  font-medium rounded-r-md border-none'>
                                    {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}

                                </p>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder:text-gray-500 text-black  block w-full rounded-md sm:text-sm"
                                {...register("newPassword", {
                                    required: true,
                                    pattern: {
                                        value: /^(?!.*\s)(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/,
                                        message: "Password should be at least 8 character with Capital Letter, Number and Symbol"
                                    },
                                })}
                                placeholder='Type Your Old Password'
                            />
                            {errors?.newPassword && (
                                <p className="text-red-500 ">Password should be at least 8 character with Capital Letter, Number and Symbol</p>
                            )}
                        </label>

                        <button
                            className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                            type="submit"
                        >
                            {isLoading ? <CircularProgress size={20} /> : 'Submit'}
                        </button>
                    </form >
                </>
            }

        </div>
    );
};

export default ForgotPassword;