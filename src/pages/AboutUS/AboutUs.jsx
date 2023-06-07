import React, { useEffect, useState } from 'react';
import GetAPI from '../../APIHooks/GetAPI';
import serverUrl from '../../config/Config';
import { SingleImageUploader } from '../../APIHooks/SingleImageUploader';

const AboutUs = () => {
    const [about, setAbout] = useState([])
    const [image, setImage] = useState(null)
    useEffect(() => {
        GetAPI('aboutUs', setAbout)
    }, [])

    console.log(about[0]?.data)

    const handleImageChange = async (event) => {
        const imageData = event.target.files[0];
        const formData = new FormData();
        formData.append("image", imageData);

        SingleImageUploader(formData, setImage)
    }

    console.log('image', image)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-10 bg-[bg-[#f7f7f7]'>
            <h1 className='text-3xl lg:text-5xl font-semibold text-darkNavy'>About Us</h1>

            <div className='my-5'>
                <p>
                    {about[0]?.data}
                </p>
            </div>

            <div>
                <img src={image} alt="" />
                <form>
                    <input type="file" name="image" id=""
                        onChange={handleImageChange} accept='png' />
                    <input type="button" value="Upload" />
                </form>
            </div>
        </div>
    );
};

export default AboutUs;