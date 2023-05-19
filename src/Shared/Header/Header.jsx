import React from "react";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import engFlag from "../../images/header/eng.png";
import userImg from '../../images/user-images/1.jpg';
// mui import
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <header className="bg-darkNavy py-4 px-[25px] md:px-[40px]">
      {/* web nav */}
      <div className=" hidden md:hidden lg:flex items-center justify-between">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
          <div className="flex items-center gap-1">
            <img src={engFlag} alt="" className="w-[20px]" />
            <span className="text-base uppercase font-medium text-white">
              EN
            </span>
            <button className="text-sm text-gray-400">
              <AiOutlineCaretDown />
            </button>
          </div>
          {/* button group */}
          <button className="text-sm text-white bg-transparent  hover:text-darkNavy hover:bg-white border border-white py-2 px-6 rounded-sm ">
            Register
          </button>
          <button className="text-sm text-darkNavy bg-white hover:text-white hover:bg-transparent border border-white py-2 px-6 rounded-sm">
            Login
          </button>
          {/* shopping cart */}
          <span className="text-2xl text-white">
            <CgShoppingCart />
          </span>
        </div>
      </div>
      {/* mobile nav */}
      <div className="md:block block lg:hidden ">
        <div className=" flex items-center justify-between">
          {/* brand logo */}
          <span className="">
            <Link>
              <img src={logo} className="w-20" alt="" />
            </Link>
          </span>
          <div className="flex items-center gap-3">
            {/* language dropdown */}
            <div className="flex items-center gap-1">
              <img src={engFlag} alt="" className="w-[20px]" />
              <span className="text-base uppercase font-medium text-white">
                EN
              </span>
              {/* shopping cart */}
              <button className="text-sm text-gray-400">
                <AiOutlineCaretDown />
              </button>

            </div>
            {/* shopping cart */}
            <span className="text-2xl text-white mr-2">
              <CgShoppingCart />
            </span>
            {/* user dropdown */}
            <div>
              <button aria-describedby={id} onClick={handleClick}>
                <img src={userImg} className="w-[50px] h-[50px] rounded-full" alt="" />
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
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
        <form className="mt-4">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
