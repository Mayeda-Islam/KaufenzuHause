import React, { useContext, useEffect } from 'react';
import serverUrl from '../../config/Config';
import parse from "html-react-parser";
import { Context } from '../../ContextProvider/ContextProvider';

const ReturnAndPlacement = () => {
    const { language } = useContext(Context);
    const [refund, setRefund] = React.useState({})
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
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='my-16 w-11/12 mx-auto lg:w-10/12'>
            <h1 className='text-2xl lg:text-5xl text-center text-textColor font-semibold'>Return And Placement Policy</h1>

            <div className="pt-5">
                {language === "english" ? (
                    <>{parse(`${refund?.refundPolicy}`)}</>
                ) : (
                    <>{parse(`${refund?.refundPolicyGerman}`)}</>
                )}
            </div>

        </div>
    );
};

export default ReturnAndPlacement;