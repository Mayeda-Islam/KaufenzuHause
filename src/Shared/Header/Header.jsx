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
import { Badge } from "@mui/material";

const Header = () => {
  const { verified, setHasUser, hasUser, user, setUser, cart, removeFromCart, increment, decrement, calculateSubTotal, changeLanguage, language } =
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



  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    setHasUser(false)
  }


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
        className={`py-4 px-[25px] md:px-[40px] w-full  top-0 right-0 left-0 z-[10]  md:py-2 text-[#FFF]  hidden md:hidden lg:flex items-center justify-between   ${stickyNav
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
            <Link to={'/'}>
              <img src={logo[0]?.headerLogoURL} className="w-36 cursor-pointer" alt="logo" />
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
              {
                language === 'english' ?
                  <>
                    <img src={engFlag} alt="" className="w-[20px]" />
                    <span className="text-base uppercase font-medium text-white">
                      EN
                    </span>
                  </>
                  :
                  <>
                    <img src={germanFlag} alt="" className="w-[23px]" />
                    <span className="text-base uppercase font-medium text-white">
                      DE
                    </span>
                  </>
              }
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
                <ul className="p-0 m-0 cursor-pointer">
                  <li onClick={() => changeLanguage('english')} className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                    <div className="flex items-center gap-3">
                      <img src={engFlag} className="w-[16px]" alt="" />
                      <span> English</span>
                    </div>
                  </li>
                  <li onClick={() => changeLanguage('german')} className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-9 w-full py-3 text-center">
                    <div className="flex items-center gap-2">
                      <img src={germanFlag} className="w-[23px]" alt="" />
                      <span> German</span>
                    </div>
                  </li>
                </ul>
              </Typography>
            </Popover>
          </div>
          {/* button group */}


          {
            (hasUser || user?.email) && verified ?
              <>
                {
                  user?.role === 'admin' ?
                    <Link to={"/dashboard"}>
                      <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
                        Dashboard
                      </button>
                    </Link>
                    :
                    <Link to={"/dashboard/myOrders"}>
                      <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
                        Dashboard
                      </button>
                    </Link>

                }
                <Link>
                  <button onClick={handleLogout} className="text-sm text-darkNavy bg-white hover:text-white hover:bg-transparent border border-white py-2 px-6 rounded-sm">
                    Logout
                  </button>
                </Link>
              </>

              :
              <>
                <Link to={'/register'}>
                  <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
                    Register
                  </button>
                </Link>

                <Link to={'/login'}>
                  <button className="text-sm text-darkNavy bg-white hover:text-white hover:bg-transparent border border-white py-2 px-6 rounded-sm">
                    Login
                  </button>
                </Link>
              </>
          }

          {/* shopping cart */}
          <span
            onClick={handleToggle}
            className="text-2xl text-white cursor-pointer"
          >
            <Badge badgeContent={cart?.length} color="primary">
              <CgShoppingCart color="action" />
            </Badge>
          </span>
        </div>
      </nav>
      {/* cart sidebar */}
      <div
        ref={wrapper}
        className={`cart_nav shadow-lg shadow-gray-300 ${display == true ? "active" : ""
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
          {cart?.length > 0 ? (
            cart?.map((item) => {
              const { _id, images, productTitle, quantity, productPrice } =
                item;
              return (
                <>
                  <div
                    key={_id}
                    className="flex gap-5 w-11/12 mx-auto items-center justify-between my-2 "
                  >

                    <div className="flex gap-x-4 item-center justify-center">
                      {
                        images &&
                        <img
                          src={images[0]}
                          className="w-20 h-20 rounded-md"
                          alt=""
                        />
                      }

                      <div className="flex flex-col items-center justify-center text-start">
                        <div>
                          <p className="text-sm  text-textColor  ">
                            {productTitle.slice(0, 30)}
                          </p>
                          <p className="text-sm text-textColor ">
                            ${productPrice * quantity}
                          </p>

                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                      <div className="flex  justify-center gap-1">
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

                      <AiOutlineClose
                        onClick={() => removeFromCart(_id)}
                        className="text-xl text-red-500  cursor-pointer "
                      />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <section className="flex items-center h-full sm:p-16">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-40 h-40 text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                  ></path>
                  <rect
                    width="176"
                    height="32"
                    x="168"
                    y="320"
                    fill="currentColor"
                  ></rect>
                  <polygon
                    fill="currentColor"
                    points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                  ></polygon>
                  <polygon
                    fill="currentColor"
                    points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                  ></polygon>
                </svg>
                <div>
                  <h1 className="text-3xl my-4 text-center font-extrabold text-gray-700 tracking-widest">
                    Cart is empty.
                  </h1>
                  <h1 className="text-xl my-4 text-center font-semibold text-gray-700 ">
                    Please add some{" "}
                    <Link
                      onClick={handleToggle}
                      className="underline text-primary font-bold "
                      to={"/products"}
                    >
                      Products
                    </Link>
                  </h1>
                </div>
              </div>
            </section>
          )}

          {cart?.length > 0 && (
            <>
              <hr className="my-4 border-0.5 border-gray-300" />
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-textColor">
                  Subtotal
                </span>
                <span className="text-lg font-medium text-textColor">
                  ${calculateSubTotal()}
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
            </>
          )}
        </div>
      </div>

      {/* mobile nav */}
      <nav
        className={`md:block block lg:hidden pt-3 pb-4 px-[25px] md:px-[35px] top-0 right-0 left-0 z-[10]  ${stickyNav
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
              <Link to={'/'}>
                <img src={logo[0]?.headerLogoURL} className="w-20" alt="" />
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
                  <AiOutlineCaretDown />
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
                <Badge badgeContent={cart?.length} color="primary">
                  <CgShoppingCart color="action" />
                </Badge>
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
                    {
                      (hasUser || user?.email) && verified ?
                        <>
                          {
                            user?.role === 'admin' ?
                              <Link to={"/dashboard"}>
                                <button className="text-sm  bg-transparent  hover:text-darkNavy  border border-white py-2 px-6 rounded-sm ">
                                  Dashboard
                                </button>
                              </Link>
                              :
                              <Link to={"/dashboard/myOrders"}>
                                <button className="text-sm  bg-transparent  hover:text-darkNavy  border border-white py-2 px-6 rounded-sm ">
                                  Dashboard
                                </button>
                              </Link>

                          }
                          <li className="text-sm text-textColor  px-10 w-full py-3 text-start " onClick={handleLogout}>
                            Logout
                          </li>
                        </>
                        :
                        <>
                          <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                            <Link to={'/register'}>
                              Register
                            </Link>
                          </li>
                          <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                            <Link to={'/login'}>
                              Login
                            </Link>
                          </li>
                        </>
                    }


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
