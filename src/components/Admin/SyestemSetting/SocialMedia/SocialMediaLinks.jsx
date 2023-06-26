import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UpdatedApi from '../../../../APIHooks/UpdatedItem';
import GetAPI from '../../../../APIHooks/GetAPI';
import OnlyPostAPI from '../../../../APIHooks/OnlyPostAPI';

const SocialMediaLinks = () => {

    const {
        register,
        handleSubmit,
    } = useForm();
    const [socialLink, setSocialLink] = useState({})

    React.useEffect(() => {
        GetAPI(`socialMedia`, setSocialLink);
    }, []);

    const handleSocialMedia = (data) => {
        const updatedData = {
            facebookURL: data.facebookURL || socialLink[0]?.facebookURL,
            instagramURL: data.instagramURL || socialLink[0]?.instagramURL,
            youtubeURL: data.youtubeURL || socialLink[0]?.youtubeURL,
        };
        if (socialLink[0]?._id) {
            UpdatedApi(`socialMedia/${socialLink[0]?._id}`, setSocialLink, updatedData);
        }
        else {
            OnlyPostAPI('socialMedia', updatedData)
        }
    }
    return (
        <div className="  p-6 flex-auto w-full lg:w-3/4 mx-auto border-2 border-gray-200 rounded =">
            <form action="" onSubmit={handleSubmit(handleSocialMedia)}>
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Facebook URL
                    </label>

                    <input
                        type="text"
                        defaultValue={socialLink[0]?.facebookURL}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                        placeholder="facebook URL"
                        {...register("facebookURL", {
                        })}
                    />

                </div>
                {/* phone field */}
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        InstagramURL
                    </label>

                    <input
                        type="text"
                        defaultValue={socialLink[0]?.instagramURL}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                        placeholder="Instagram URL"
                        {...register("instagramURL", {
                        })}
                    />

                </div>


                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Youtube URL
                    </label>

                    <input
                        type="text"
                        defaultValue={socialLink[0]?.youtubeURL}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 border border-gray-300`}
                        placeholder=" Youtube URL"
                        {...register("youtubeURL", {
                        })}
                    />

                </div>


                <button
                    type="submit"
                    className="py-2 px-5  text-sm font-medium text-white bg-[#55c3c1f7] rounded-sm border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee] "
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SocialMediaLinks;