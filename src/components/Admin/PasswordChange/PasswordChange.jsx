import React from 'react';
import { useForm } from 'react-hook-form';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import serverUrl from '../../../config/Config';
import swal from 'sweetalert';
import { useContext } from 'react';
import { Context } from '../../../ContextProvider/ContextProvider';

const PasswordChange = () => {
    const { user } = useContext(Context)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPassword1, setShowPassword1] = React.useState(false);

    const handlePasswordChange = (value) => {

        const formData = {
            _id: user?._id,
            ...value
        }

        fetch(`${serverUrl}/users/change-password`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.status === "success") {
                    swal("Congrats!", data?.message, "success");
                    reset()
                } else {
                    swal("Oops!", data?.message, "error");
                }
            });
    }

    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit(handlePasswordChange)} className='w-full lg:w-2/4 mx-auto'>

                <h1 className='text-2xl lg:text-4xl font-semibold my-5'>

                    Hello <span className='font-semibold text-primary'> {user?.fullName},
                    </span> <br />
                    Do You Want To Change Your Password?</h1>

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
                        {...register("oldPassword", {
                            required: true,

                        })}
                        placeholder='Type Your Old Password'
                    />
                    {errors?.oldPassword && (
                        <p className="text-red-500 ">Your old password is required</p>
                    )}
                </label>



                <label className="block my-3 ">
                    <div className='flex items-center justify-between'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium ">
                            New  Password
                        </span>
                        <p onClick={() => setShowPassword1(!showPassword1)} className=' px-2 rounded-md py-1  cursor-pointer  font-medium rounded-r-md border-none'>
                            {showPassword1 ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}

                        </p>
                    </div>
                    <input
                        type={showPassword1 ? 'text' : 'password'}
                        className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder:text-gray-500 text-black  block w-full rounded-md sm:text-sm"
                        {...register('newPassword', {
                            required: true,
                            pattern: {
                                value: /^(?!.*\s)(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/,
                                message: "Password should be at least 8 character with Capital Letter, Number and Symbol"
                            },
                        })}
                        placeholder='Type Your New Password'

                    />


                    {errors?.newPassword &&
                        <p className="text-red-500 ">New Password should be at least 8 character with Capital Letter, Number and Symbol</p>

                    }


                </label>



                <input
                    className="py-3 w-full bg-secondary hover:bg-primary my-3 border-2 border-white rounded-md text-white font-medium cursor-pointer"
                    type="submit"
                    value={`Submit`}
                />
            </form >
        </div>
    );
};

export default PasswordChange;