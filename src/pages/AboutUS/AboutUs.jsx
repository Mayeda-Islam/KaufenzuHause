import React, { useEffect, useState } from 'react';
import GetAPI from '../../APIHooks/GetAPI';

const AboutUs = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        GetAPI('aboutUs', setAbout)
    }, [])

    console.log(about[0]?.data)
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-10 bg-[bg-[#f7f7f7]'>
            <h1 className='text-3xl lg:text-5xl font-semibold text-darkNavy'>About Us</h1>

            <div className='my-5'>
                <p>
                    {about[0]?.data}
                </p>
            </div>
        </div>
    );
};

export default AboutUs;