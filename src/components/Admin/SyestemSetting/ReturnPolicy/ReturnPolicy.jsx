import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react';
import OnlyPostAPI from '../../../../APIHooks/OnlyPostAPI';
import UpdatedApi from '../../../../APIHooks/UpdatedItem';
import serverUrl from '../../../../config/Config';

const ReturnPolicy = () => {
    const [content, setContent] = React.useState("");
    const [content1, setContent1] = React.useState("");
    const editor = useRef(null);
    const editor1 = useRef(null);
    const [refund, setRefund] = useState({})
    useEffect(() => {
        fetch(`${serverUrl}/refund`)
            .then((response) => response.json())
            .then((result) => {
                if (result.status == "success") {
                    setRefund(result?.data[0]);
                }
            });
    }, [])
    useEffect(() => {
        setContent(refund?.refundPolicy)
    }, [refund?.refundPolicy])

    useEffect(() => {
        setContent1(refund?.refundPolicyGerman)
    }, [refund?.refundPolicyGerman])

    const handleRefund = () => {
        const formData = {
            refundPolicy: content || refund?.refundPolicy,
            refundPolicyGerman: content1 || refund?.refundPolicyGerman
        }
        if (refund?._id) {
            UpdatedApi(`refund/${refund._id}`, setRefund, formData)
        } else {
            OnlyPostAPI('refund', formData)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=''>
            <div className="m-4">
                <h2 className="text-xl lg:text-2xl  font-medium text-textColor my-5 border-l-2 border-[#55c3c1f7] pl-4">
                    Return And Placement Policy
                </h2>
            </div>
            <div className='w-full my-5'>
                <h1 className='text-xl my-2'>Return Policy in English</h1>
                <JoditEditor

                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                />
            </div>
            <div className='w-full my-5'>
                <h1 className='text-xl my-2'>Return Policy in German</h1>
                <JoditEditor
                    ref={editor1}
                    value={content1}
                    onChange={(newContent) => setContent1(newContent)}
                />
            </div>
            <button
                onClick={handleRefund}
                className="py-2 px-5  text-sm font-medium text-white bg-[#55c3c1f7]  border-[3px] border-[#55c3c1f7] hover:bg-[#031f4bee] hover:border-[#031f4bee] rounded-lg block ml-auto my-5"
            >
                Save changes
            </button>

        </div>
    );
};

export default ReturnPolicy;