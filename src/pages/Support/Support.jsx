import React, { useEffect } from 'react';
import GetAPI from '../../APIHooks/GetAPI';

const Support = () => {
    const [information, setInformation] = React.useState([])


    useEffect(() => {
        GetAPI('footer-Info', setInformation)
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='my-16 w-11/12 mx-auto lg:w-10/12'>
            <h1 className='text-2xl lg:text-5xl text-center text-textColor font-semibold'>Get Our Support 24/7</h1>
            <div className='my-8'>
                <h2 className='text-lg lg:text-3xl inline-block border-b-2 border-primary'>
                    Contact Us For Any Query or Support
                </h2>
                <div className='my-5'>

                    <p className='text-lg my-2'>Address: <span className='font-semibold'>{information[0]?.address}</span></p>
                    <p className='text-lg my-2'>Phone: <span className='font-semibold'>{information[0]?.phone}</span></p>
                    <p className='text-lg my-2' >Whatsapp: <span className='font-semibold'>{information[0]?.phone}</span></p>
                    <p className='text-lg my-2'>Email: <span className='font-semibold'>{information[0]?.email}</span></p>
                </div>

            </div>
        </div>
    );
};

export default Support;