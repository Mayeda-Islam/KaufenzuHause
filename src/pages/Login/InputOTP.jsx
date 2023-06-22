import React from 'react';
import { useContext } from 'react';
import { Context } from '../../ContextProvider/ContextProvider';
import swal from 'sweetalert';
import serverUrl from '../../config/Config';
import { useNavigate } from 'react-router-dom';

const InputOTP = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(Context)

    const handleOTP = (event) => {
        event.preventDefault()
        const formData = {
            email: user?.email,
            otp: event.target.otp.value
        }
        fetch(`${serverUrl}/users/verifyOTP`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === "success") {
                    localStorage.setItem("user", JSON.stringify(data?.data));
                    setUser(data?.data)
                    navigate('/')
                    swal("Congrats!", data?.message, "success");
                } else {
                    swal("Oops!", data?.message, "error");
                }
            });

    }


    const handleResendOTP = () => {
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
                } else {
                    swal("Oops!", data?.message, "error");
                }
            });
    }

    return (
        <div className='my-10 flex justify-center items-center'>
            
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

                <input
                    className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                    type="submit"
                    value={`Verify Now`}
                />
            </form >

        </div >
    );
};

export default InputOTP;