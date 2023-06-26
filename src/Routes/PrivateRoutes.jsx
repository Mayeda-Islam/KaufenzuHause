import React from 'react';
import { Context } from '../ContextProvider/ContextProvider';
import { Box, CircularProgress } from '@mui/material';
import notFoundLogo from "../images/logo/notFound.png";
import { Link } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, hasUser } = React.useContext(Context)
    // if (hasUser) {
    //     return (
    //         <div className="text-center h-screen flex justify-center items-center">
    //             <Box sx={{ display: "flex" }}>
    //                 <CircularProgress />
    //             </Box>
    //         </div>
    //     )

    // }

    if (user?.email) {
        return children;
    }
    return (
        <div>
            <section className="flex h-screen items-center sm:p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
                    <img src={notFoundLogo} alt="" />
                    <div>
                        <h1 className="text-5xl uppercase mb-8 text-center font-extrabold text-gray-700 tracking-widest">
                            Something Fishy!
                        </h1>
                        <h1 className="text-xl my-4 text-center font-semibold text-gray-700 ">
                            Seems Like you are not logged in.{" "}
                        </h1>
                        <p className="text-xl mt-11 text-center">
                            <Link className="underline  text-primary font-bold" to={"/login"}>
                                Login Now
                            </Link>{" "}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivateRoutes;