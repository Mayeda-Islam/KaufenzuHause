import React, { useContext, useEffect, useRef, useState } from "react";
// import logo from "../../images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import engFlag from "../../images/header/eng.png";
import germanFlag from "../../images/header/ger2.png";
import userImg from "../../images/user-images/1.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";

import Sidenav from "./Sidenav";
import GetAPI from "../../APIHooks/GetAPI";
import { Context } from "../../ContextProvider/ContextProvider";



const Header = () => {
  const { cart, removeFromCart, increment, decrement, calculateTotal } =
    useContext(Context);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  //sticky nav on scroll
  const [logo, setLogo] = useState([]);
  //sticky nav
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    GetAPI("logo", setLogo);
  }, []);
  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const handleClickUser = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // language state large screen
  const handleClickLang = (event) => {
    setAnchorE2(event.currentTarget);
  };
  // language state mobile screen
  const handleClickLangMobile = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseLangMobile = () => {
    setAnchorE3(null);
  };

  const handleCloseUser = () => {
    setAnchorEl(null);
  };

  const handleCloseLang = () => {
    setAnchorE2(null);
  };

  // user dropdown
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // language dropdown
  const open2 = Boolean(anchorE2);
  const id2 = open2 ? "simple-popover" : undefined;

  //mobile language
  const open3 = Boolean(anchorE3);
  const id3 = open3 ? "simple-popover" : undefined;

  //cart sidebar display
  const wrapper = useRef();
  const [display, setDisplay] = useState(false);
  const handleToggle = () => {
    //alert('clicked')
    display === true ? setDisplay(false) : setDisplay(true);
  };

  //close sidenav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        display &&
        wrapper.current &&
        !wrapper.current.contains(event.target)
      ) {
        setDisplay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //return wrapper.current;
  }, [display]);

  // mui sidenav
  const cateWrapper = useRef();
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    sidebar === true ? setSidebar(false) : setSidebar(true);
  };

  //search text state

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/categoryProducts", { state: { searchState: search } });
    setSearch("");
  };

  return (
    <header className="bg-darkNavy ">
      {/* web nav */}

      <nav
        className={`py-4 px-[25px] md:px-[40px] w-full  top-0 right-0 left-0 z-[10]  md:py-2 text-[#FFF]  hidden md:hidden lg:flex items-center justify-between   ${
          stickyNav
            ? "transition-all delay-700 ease-in-out bg-darkNavy fixed shadow-md shadow-gray-200"
            : "bg-darkNavy"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* hamburger icon */}
          <button onClick={toggleSidebar} className="border-none outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* brand logo */}
          <span className="">
            <Link>
              <img src={logo[0]?.headerLogoURL} className="w-36" alt="" />
            </Link>
          </span>
        </div>
        {/* category sidebar */}
        <Sidenav
          cateWrapper={cateWrapper}
          sidebar={sidebar}
          setSidebar={setSidebar}
          toggleSidebar={toggleSidebar}
        />

        {/* search bar */}
        <form onSubmit={handleSearchSubmit}>
          <div className="flex ">
            <div className="relative w-full rounded-lg">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                className="block p-2.5 w-[600px] rounded-lg z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg outline-none"
                placeholder="Search for products, brands and more..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#7ED957] rounded-r-lg  hover:bg-[#7ed9579a]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center gap-5">
          {/* language dropdown */}

          <div>
            <button
              className="flex items-center gap-1"
              aria-describedby={id}
              onClick={handleClickLang}
            >
              <img src={engFlag} alt="" className="w-[20px]" />
              <span className="text-base uppercase font-medium text-white">
                EN
              </span>
              {/* shopping cart */}
              <p className="text-sm text-gray-400 cursor-pointer">
                <AiOutlineCaretDown />
              </p>
            </button>
            <Popover
              id={id2}
              open={open2}
              anchorEl={anchorE2}
              onClose={handleCloseLang}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography>
                <ul className="p-0 m-0">
                  <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                    <Link to={""} className="flex items-center gap-3">
                      <img src={engFlag} className="w-[16px]" alt="" />
                      <span> English</span>
                    </Link>
                  </li>
                  <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-9 w-full py-3 text-center">
                    <Link to={""} className="flex items-center gap-2">
                      <img src={germanFlag} className="w-[23px]" alt="" />
                      <span> German</span>
                    </Link>
                  </li>
                </ul>
              </Typography>
            </Popover>
          </div>
          {/* button group */}

          <Link to={"/admin/dashboard"}>
            <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
              Dashboard
            </button>
          </Link>

          <Link>
            <button className="text-sm text-darkNavy bg-white hover:text-white hover:bg-transparent border border-white py-2 px-6 rounded-sm">
              Logout
            </button>
          </Link>

          {/* <Link to={'/register'}>
            <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
              Register
            </button>
          </Link> */}

          {/* <Link to={'/login'}>
            <button className="text-sm text-darkNavy bg-white hover:text-white hover:bg-transparent border border-white py-2 px-6 rounded-sm">
              Login
            </button>
          </Link> */}
          {/* shopping cart */}
          <span
            onClick={handleToggle}
            className="text-2xl text-white cursor-pointer"
          >

            <CgShoppingCart />

          </span>
        </div>
      </nav>
      {/* cart sidebar */}
      <div
        ref={wrapper}
        className={`cart_nav shadow-lg shadow-gray-300 ${
          display == true ? "active" : ""
        }`}
      >
        <button
          className="absolute right-[15px] top-[15px] bg-none outline-none border-none text-[#444] hover:text-[#111] text-[2rem] p-[0.5rem] cursor-pointer transition-all duration-[0.3s] "
          onClick={handleToggle}
        >
          <AiFillCloseCircle />
        </button>
        <div className=" px-5">
          <h2 className="text-xl font-medium text-textColor capitalize my-4">
            Shopping cart
          </h2>

          {cart.length > 0 &&
            cart.map((item) => {
              const { _id, images, productTitle, quantity, productPrice } =
                item;
              return (
                <div key={_id} className="flex  gap-6 justify-center my-2 ">
                  {/* product image */}
                  <img
                    src={images[0]}
                    className="w-[65px] h-[70px] rounded-md"
                    alt=""
                  />
                  {/* title and increment decrement button */}
                  <div className="">
                    <span className="text-sm text-textColor mb-3 block">
                      {productTitle.slice(0, 30)}
                    </span>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => increment(_id)}
                        className="w-8 h-8 rounded  bg-gray-100 border border-gray-300"
                      >
                        +
                      </button>
                      <span className="w-8 h-8 rounded border border-gray-300 bg-bgOne flex items-center justify-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => decrement(_id)}
                        className="w-8 h-8 rounded  bg-gray-100 border border-gray-300"
                      >
                        -
                      </button>
                    </div>
                    {/* subtotal price */}
                    {/* <span className="flex items-center gap-2">
                  <span className="text-sm text-textColor">1</span>
                  <span className="text-sm text-textColor"></span>
                </span> */}
                  </div>

                  <span className="text-sm text-textColor mb-3">
                    $ {productPrice * quantity}
                  </span>
                  <AiOutlineClose
                    onClick={() => removeFromCart(_id)}
                    className="text-xl text-gray-500 cursor-pointer"
                  />
                </div>
              );
            })}


          <hr className="my-4 border-0.5 border-gray-300" />
          {/* subtotal amount */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-textColor">Subtotal</span>
            <span className="text-lg font-medium text-textColor">
              ${calculateTotal()}
            </span>
          </div>
          {/* button group */}
          <hr className="my-4 border-0.5 border-gray-300" />
          <div className="flex items-center justify-center flex-col">
            <Link to={"/cart"}>
              <button
                onClick={() => setDisplay(false)}
                className="mb-3 block text-white py-2.5 w-[270px] bg-primary hover:bg-secondary  text-base  rounded hover:text-textPrimary  capilatize "
              >
                Go To Cart
              </button>
            </Link>
            <Link to={"/checkout"}>
              <button
                onClick={() => setDisplay(false)}
                className="block text-white py-2.5 w-[270px] bg-secondary hover:bg-primary  text-base  rounded hover:text-textPrimary  capilatize "
              >
                Proceed To checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <nav
        className={`md:block block lg:hidden pt-3 pb-4 px-[25px] md:px-[35px] top-0 right-0 left-0 z-[10]  ${
          stickyNav
            ? "transition-all delay-700 ease-in-out bg-darkNavy fixed shadow-md shadow-gray-200"
            : "bg-darkNavy"
        }`}
      >
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* hamburger icon */}
            <button
              onClick={toggleSidebar}
              className="border-none outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {/* brand logo */}
            <span className="">
              <Link>
                <img src={logo} className="w-20" alt="" />
              </Link>
            </span>
          </div>

          {/* category sidebar */}
          <Sidenav
            cateWrapper={cateWrapper}
            sidebar={sidebar}
            setSidebar={setSidebar}
            toggleSidebar={toggleSidebar}
          />

          <div className="flex items-center gap-3">
            {/* language dropdown */}
            <div>
              <button
                className="flex items-center gap-1"
                aria-describedby={id}
                onClick={handleClickLangMobile}
              >
                <img src={engFlag} alt="" className="w-[20px]" />
                <span className="text-base uppercase font-medium text-white">
                  EN
                </span>
                {/* shopping cart */}
                <p className="text-sm text-gray-400 cursor-pointer">
                  {/* <AiOutlineCaretDown /> */}
                </p>
              </button>
              <Popover
                id={id3}
                open={open3}
                anchorEl={anchorE3}
                onClose={handleCloseLangMobile}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography>
                  <ul className="p-0 m-0">
                    <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                      <Link to={""} className="flex items-center gap-3">
                        <img src={engFlag} className="w-[16px]" alt="" />
                        <span> English</span>
                      </Link>
                    </li>
                    <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-9 w-full py-3 text-center">
                      <Link to={""} className="flex items-center gap-2">
                        <img src={germanFlag} className="w-[23px]" alt="" />
                        <span> German</span>
                      </Link>
                    </li>
                  </ul>
                </Typography>
              </Popover>
            </div>
            {/* <div className="">



            </div> */}
            {/* shopping cart */}
            <span className="text-2xl text-white mr-2">
              <Link to={"/cart"}>

                <CgShoppingCart />

              </Link>
            </span>

            {/* user dropdown */}
            <div>
              <button aria-describedby={id} onClick={handleClickUser}>
                <img
                  src={userImg}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseUser}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Typography>
                  <ul className="p-0 m-0">
                    <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                      <Link>Logout</Link>
                    </li>
                    {/* <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                      <Link to={'/register'}>
                        Register
                      </Link>
                    </li>
                    <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                      <Link to={'/login'}>
                        Login
                      </Link>
                    </li> */}
                  </ul>
                </Typography>
              </Popover>
            </div>
          </div>
        </div>
        {/* search form */}
        {/* search bar */}
        <form className="mt-2">
          <div className="flex ">
            <div className="relative w-full rounded-lg bg-gray-50">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full  rounded-lg z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg outline-none"
                placeholder="Search for products, brands and more..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#7ED957] rounded-r-lg  hover:bg-[#7ed9579a]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </nav>
    </header>
  );
};

export default Header;
