import React, { useEffect, useState } from "react";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import engFlag from "../../images/header/eng.png";
import germanFlag from "../../images/header/ger2.png";
import userImg from '../../images/user-images/1.jpg';
// mui import
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';



const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  //sticky nav on scroll

  //sticky nav
  const [stickyNav, setStickyNav] = useState(false);

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
  const id = open ? 'simple-popover' : undefined;
  const id4 = open ? 'simple-popover' : undefined;

  // language dropdown
  const open2 = Boolean(anchorE2);
  const id2 = open2 ? 'simple-popover' : undefined;

  //mobile language
  const open3 = Boolean(anchorE3);
  const id3 = open3 ? 'simple-popover' : undefined;

  return (
    <header className="bg-darkNavy ">
      {/* web nav */}
      {/* className="  items-center justify-between" */}
      <nav className={`py-4 px-[25px] md:px-[40px] w-full  top-0 right-0 left-0 z-[10]  md:py-2 text-[#FFF]  hidden md:hidden lg:flex items-center justify-between   ${stickyNav ? 'transition-all delay-700 ease-in-out bg-darkNavy fixed shadow-md shadow-gray-200' : 'bg-darkNavy'}`} >
        {/* brand logo */}
        <span className="">
          <Link>
            <img src={logo} className="w-36" alt="" />
          </Link>
        </span>
        {/* search bar */}
        <form>
          <div className="flex ">
            <div className="relative w-full rounded-lg">
              <input
                type="search"
                id="search-dropdown"
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
            <button className="flex items-center gap-1"
              aria-describedby={id} onClick={handleClickLang}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography >
                <ul className="p-0 m-0">
                  <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                    <Link to={''} className="flex items-center gap-3">
                      <img src={engFlag} className="w-[16px]" alt="" />
                      <span> English</span>
                    </Link>
                  </li>
                  <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-9 w-full py-3 text-center">
                    <Link to={''} className="flex items-center gap-2">
                      <img src={germanFlag} className="w-[23px]" alt="" />
                      <span> German</span>
                    </Link>
                  </li>
                </ul>
              </Typography>
            </Popover>
          </div>
          {/* button group */}
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
          {/* shopping cart */}
          <span className="text-2xl text-white">
            <CgShoppingCart />
          </span>
        </div>
      </nav>
      {/* mobile nav */}

      <div className={`md:block block lg:hidden pt-3 pb-4 px-[25px] md:px-[40px] top-0 right-0 left-0 z-[10]  ${stickyNav ? 'transition-all delay-700 ease-in-out bg-darkNavy fixed shadow-md shadow-gray-200' : 'bg-darkNavy'}`}>
        <div className=" flex items-center justify-between">
          {/* brand logo */}
          <span className="">
            <Link>
              <img src={logo} className="w-20" alt="" />
            </Link>
          </span>
          <div className="flex items-center gap-3">
            {/* language dropdown */}
            <div>
              <button className="flex items-center gap-1"
                aria-describedby={id} onClick={handleClickLangMobile}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Typography >
                  <ul className="p-0 m-0">
                    <li className="text-sm border-b border-gray-200 text-textColor bg-white hover:bg-[#f2f2f2] px-10 w-full py-3 text-center">
                      <Link to={''} className="flex items-center gap-3">
                        <img src={engFlag} className="w-[16px]" alt="" />
                        <span> English</span>
                      </Link>
                    </li>
                    <li className="text-sm text-textColor bg-white hover:bg-[#f2f2f2] px-9 w-full py-3 text-center">
                      <Link to={''} className="flex items-center gap-2">
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
              <CgShoppingCart />
            </span>
            {/* user dropdown */}
            <div>
              <button aria-describedby={id} onClick={handleClickUser}>
                <img src={userImg} className="w-[50px] h-[50px] rounded-full" alt="" />
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseUser}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <Typography >
                  <ul className="p-0 m-0">
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
      </div>


    </header>
  );
};

export default Header;
