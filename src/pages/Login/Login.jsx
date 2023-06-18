import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginData = (data) => {
        console.log(data)
    }

    const [showPassword, setShowPassword] = useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='my-10 flex justify-center items-center'>

            <form onSubmit={handleSubmit(handleLoginData)} className='w-11/12 md:w-3/4 lg:w-5/12  xl:w-1/3 mx-auto p-3 lg:p-10 bg-lightGray/10 shadow-gray-300 border border-gray-200 rounded-xl shadow-xl'>
                <h1 className='text-2xl font-semibold text-center my-5'>Login With Kaufenzu Hause</h1>

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



                <label className="block my-3 ">
                    <div className='flex items-center justify-between'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium ">
                            Password
                        </span>
                        <p onClick={() => setShowPassword(!showPassword)} className=' px-2 rounded-md py-1  cursor-pointer  font-medium rounded-r-md border-none'>
                            {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}

                        </p>
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder:text-gray-500 text-black  block w-full rounded-md sm:text-sm"
                        {...register('password', {
                            required: true,
                            pattern: {
                                value: /^.{8,}$/,
                                message: "Password should be at least 8 character"
                            },
                        })}
                        placeholder='Password must be 8 character or more'

                    />
                    {errors?.password && (
                        <p className="text-red-500 ">Password should be 8 character or more</p>
                    )}


                </label>



                <input
                    className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                    type="submit"
                    value={`Login`}
                />
            </form >

        </div >
    )
}

export default Login;