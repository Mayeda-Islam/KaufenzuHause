import { Box, Modal } from '@mui/material';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import UpdatedApi from '../../../APIHooks/UpdatedItem';
import { useEffect } from 'react';
import GetAPI from '../../../APIHooks/GetAPI';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { md: "60%", xs: "98%" },
    maxHeight: { md: "80%", xs: "98%" },
    boxShadow: 24,
    overflowY: "auto",
    bgcolor: "white",
};

const TakeActionModal = ({ open, setOpen, setOrders, singleId }) => {
    const [singleData, setSingleData] = React.useState({})

    useEffect(() => {
        GetAPI(`orders/${singleId}`, setSingleData)
    }, [singleId])

    const handleUpdate = (event) => {
        event.preventDefault()

        const formData = {
            status: event.target.status.value,
            courierLink: event.target.courierLink.value,
            deliveryDate: new Date()
        }
        UpdatedApi(`orders/${singleId}`, setOrders, formData)
        setOpen(false)
        event.target.reset()
    }

    return (
        <Modal
            keepMounted
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="outline-none focus:outline-none ">

                    <div className="  border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center justify-between p-4 border-b-0.5 border-gray-300">
                            <h1 className='text-gray-900 font-semibold text-2xl'>
                                Take an Action
                            </h1>
                            <button
                                className="text-center flex items-center justify-center w-[40px] h-[40px] rounded-lg ml-auto bg-gray-800 text-white text-xl font-medium hover:bg-red-500"
                                onClick={() => setOpen(false)}
                            >
                                <IoClose />
                            </button>
                        </div>
                        <hr className='h-1 bg-blue-400' />

                        <div className='my-5'>
                            <div className=" p-6 flex-auto w-full  mt-[0.5rem]">
                                <form onSubmit={handleUpdate} >



                                    <div className="flex flex-col items-start gap-4 mb-4">

                                        <label className="font-semibold text-lg md:text-xl">
                                            Product Status :
                                        </label>
                                        <div className="flex flex-col w-full">
                                            <select
                                                name="status"
                                                className="border-2 text-gray-900 mb-4 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-[#55c3c1f7] bg-transparent"
                                            >
                                                <option
                                                    selected={singleData?.status === 'pending'}
                                                    value="pending">
                                                    Pending
                                                </option>
                                                <option
                                                    selected={singleData?.status === 'on-Process'}
                                                    value="on-Process">
                                                    On-Process
                                                </option>
                                                <option
                                                    selected={singleData?.status === 'delivered'}
                                                    value="delivered">
                                                    Delivered
                                                </option>

                                                <option
                                                    selected={singleData?.status === 'canceled'}
                                                    value="canceled">
                                                    Canceled
                                                </option>
                                            </select>
                                        </div>


                                        <label className="font-semibold text-lg md:text-xl">
                                            Courier Tracking Link :
                                        </label>
                                        <div className="flex flex-col w-full">
                                            <input
                                                name='courierLink'
                                                type="text"
                                                defaultValue={singleData?.courierLink}
                                                className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-[#55c3c1f7] bg-transparent placeholder-slate-400 w-full rounded-md sm:text-sm"
                                                placeholder="Courier Service Tracking Link"
                                            />

                                        </div>
                                    </div>



                                    <button
                                        type="submit"
                                        className="py-2 mt-5 px-7 w-full bg-[#55c3c1f7]  text-sm font-medium text-white rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee]"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </Box>
        </Modal>
    );
};

export default TakeActionModal;