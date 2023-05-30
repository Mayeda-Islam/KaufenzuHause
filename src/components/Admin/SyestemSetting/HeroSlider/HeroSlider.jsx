import React, { useState } from 'react'
import HeroSliderTable from '../../../../Shared/DataTable/HeroSliderTable/HeroSliderTable'
import HeroBannerTable from '../../../../Shared/DataTable/HeroBannerTable/HeroBannerTable'
import { useForm } from 'react-hook-form';
const HeroSlider = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sliderImage, setSliderImage] = useState('');


    const handleImageChange = (e) => {

    }
    console.log(sliderImage)
    const handleSliderImageSubmit = (data) => {
        // const image = data.sliderImage[0];
        // console.log(image)

        // const formData = new FormData();
        // formData.append('sliderImage', image);


    }
    return (
        <>
            {/* hero slider image form */}
            <section className="py-6">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        <div className="m-4">
                            <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-primary pl-4">
                                Add Hero Slider image Here
                            </h2>
                            {/* slider image form */}
                            <form
                                // onSubmit={handleSubmit(handleSliderImageSubmit)}
                                className="">

                                <div className="flex items-center   ">
                                    <div className=" w-full">

                                        <input
                                            type="file"
                                            // value={sliderImage}
                                            onChange={handleImageChange}
                                            className="w-full p-2 border-[1px] border-gray-300  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                                            placeholder="Add Hero Slider image..."
                                            required
                                        />
                                        {errors.sliderImage && <p className='text-red-500 mt-1'>{errors.sliderImage.message}</p>}
                                    </div>
                                    <button type="submit" className="py-2 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border-[3px] border-primary hover:bg-secondary hover:border-secondary ">
                                        Add
                                    </button>
                                </div>

                            </form>

                            {/* divider border */}

                            <hr className="my-8 border-0.5 border-gray-300" />
                            {/* slider image table */}
                            <h2 className="mb-6 text-xl lg:text-2xl  font-medium text-textColor  border-l-2 border-primary pl-4">
                                All Hero Slider Images
                            </h2>

                            {/* slider data table */}
                            <HeroSliderTable />
                        </div>

                        <div className="m-4">
                            <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-primary pl-4">
                                Add Hero Banner image Here
                            </h2>
                            {/* banner image form */}
                            <form className="">

                                <div className="flex items-center   ">
                                    <div className=" w-full">

                                        <input
                                            type="file"

                                            className="w-full p-2 border-[1px] border-gray-300  rounded-lg z-20 text-sm text-gray-900 bg-gray-50  "
                                            placeholder="Add Hero Banner image..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="py-2 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border-[3px] border-primary hover:bg-secondary hover:border-secondary ">
                                        Add
                                    </button>
                                </div>

                            </form>

                            {/* divider border */}

                            <hr className="my-8 border-0.5 border-gray-300" />
                            {/* slider image table */}
                            <h2 className="mb-6 text-xl lg:text-2xl  font-medium text-textColor  border-l-2 border-primary pl-4">
                                All Hero Banner Images
                            </h2>

                            {/* banner data table */}
                            <HeroBannerTable />
                        </div>
                    </div>

                </div>
            </section>

            {/* hero slider image table */}
            <section className="py-6">
                <div className="mx-auto w-[95%]">

                </div>
            </section>
        </>

    )
}

export default HeroSlider