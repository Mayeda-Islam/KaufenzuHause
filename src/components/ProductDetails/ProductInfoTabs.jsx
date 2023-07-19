import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import userImage from "../../images/user-images/2.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { ImReply } from "react-icons/im";
import { useForm } from "react-hook-form";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductInfoTabs = () => {
  const [value, setValue] = React.useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            className=""
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Description"
              sx={{
                fontSize: { xs: "12px", sm: "12px", md: "13px" },
                color: "#191919",
                fontWeight: "500",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Reviews"
              sx={{
                fontSize: { xs: "12px", sm: "12px", md: "13px" },
                color: "#191919",
                fontWeight: "500",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label="Shipping and Delivery"
              sx={{
                fontSize: { xs: "12px", sm: "12px", md: "13px" },
                color: "#191919",
                fontWeight: "500",
              }}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <p className="text-sm text-gray-500 leading-7 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit
          </p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="pt-5 flex flex-wrap lg:flex-nowrap">
            <div className="w-full sm:w-full lg:w-6/12">
              <div className="flex items-start justify-between pb-5 rounded-t bg-transparent">
                <h3 className="text-xl  text-textColor font-semibold">
                  All Reviews
                </h3>
              </div>
              <div className="mx-2 border-b border-blue-500 shadow-md px-5 py-4 rounded-md  mb-4">
                <div className="m-4 flex  md:flex-row md:space-x-6 justify-between ">
                  <div className="flex justify-center">
                    <img
                      className="object-cover w-20 lg:w-16 lg:h-16 rounded-full bg-gray-500"
                      src={userImage}
                      alt="profile img"
                    />
                    {/* {userImage ? (
                                        <img
                                            className="object-cover w-20 md:w-16 md:h-16 rounded-full bg-gray-500"
                                            src={userImage}
                                            alt="profile img"
                                        />
                                    ) : (
                                        <FaUserCircle className="text-3xl text-[#6069d3ef]" />
                                    )} */}

                    <div className="flex  justify-between ml-4">
                      <div className="flex flex-col my-4 md:my-0">
                        <div className="flex flex-col ">
                          <h4 className="font-bold">Jakia Sultana</h4>
                          <span className="text-xs text-gray-400">
                            1 days ago
                          </span>
                        </div>

                        <div className="hidden md:block lg:block mt-3">
                          <p className="text-sm text-gray-600">
                            {
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti"
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-around gap-4">
                      {/* <span className="mr-3 cursor-pointer">
                                <EditTwoToneIcon color='yellow' fontSize='small' />
                            </span> */}
                      {/* reply icon */}
                      <span
                        className=" cursor-pointer text-lg text-blue-500"
                        title="Reply Comment "
                        // onClick={handleReplyModalOpen}
                      >
                        <ImReply />
                      </span>
                      {/* deleteIcon icon */}
                      <span
                        className="cursor-pointer text-lg text-red-500"
                        // onClick={() => handlecommentDelete(_id)}
                      >
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block md:hidden lg:hidden mt-3">
                  <p className="text-sm text-gray-600">
                    {
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti"
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-full lg:w-6/12">
              <div className="mx-4  border-0 rounded-md sm:w-[95%]  lg:w-[97%] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between pb-5 rounded-t bg-transparent">
                  <h3 className="text-[22px]  text-textColor font-semibold">
                    Please Leave your Review here
                  </h3>
                </div>
                {/*body*/}
                <div className=" px-6 py-8   w-full shadow-sm shadow-gray-200 border border-gray-200 rounded-md">
                  <form action="" onSubmit={""}>
                    {/* user full name */}
                    <div className="mb-3 w-full ">
                      <label
                        htmlFor="repeat-password"
                        className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
                      >
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        className="bg-[#fff] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5"
                        placeholder="Full name"
                        {...register("fullName", {
                          required: "Your name is required",
                        })}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 mt-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    {/* user email */}
                    <div className="mb-3 w-full ">
                      <label
                        htmlFor="repeat-password"
                        className="block mb-2 text-[13px] font-normal text-gray-900 dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="text"
                        className="bg-[#fff] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                        placeholder=" Email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Your Review
                      </label>
                      <textarea
                        rows="4"
                        className=" mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-lightGray"
                        value={""}
                        // onChange={handleReplyChange}
                        placeholder="Write your Review here..."
                        required
                      ></textarea>
                    </div>
                    <button
                      className=" my-2 px-4 md:px-8 py-2 md:text-lg font-medium text-white bg-primary hover:bg-secondary rounded-lg  
                                               flex items-center"
                      //onClick={handleOpen}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="pt-5 flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-6/12">
              <div className="m-3">
                <h2 className="text-lg text-textColor font-semibold">
                  MAECENAS IACULIS
                </h2>
                <p className="text-sm text-gray-500 leading-7 px-0 mx-0 pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint? Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum. Perspiciatis minima nesciunt
                  dolorem! Officiis iure rerum voluptates a cumque velit
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="m-3">
                <h2 className="text-lg text-textColor font-semibold">
                  MAECENAS IACULIS
                </h2>
                <p className="text-sm text-gray-500 leading-7 px-0 mx-0 pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint? Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum. Perspiciatis minima nesciunt
                  dolorem! Officiis iure rerum voluptates a cumque velit
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProductInfoTabs;
