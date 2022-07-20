
import React, { useState } from "react";
import { FaTiktok } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'


function Nav() {
  const [showNav, setShowNav] = useState(false);
  return (
<>
    <nav className="bg-purple-200 border-purple-100 text-white">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 py-2.5">
        <a href="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white drop-shadow-lg shadow-black">Stanli Jane</span>
        </a>
        <div className="flex items-center">
          <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"><BsFacebook className="fill-purple-50 " /></a>
          <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"><BsInstagram className="fill-purple-50 " /></a>
          <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"><FaTiktok className="fill-purple-50 "/></a>
          <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"><BsYoutube className="fill-purple-50 "/></a>
          <a href="#" className="text-sm font-medium text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Login</a>
          {showNav ? (
          <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            className="sm:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            className="sm:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
        </div>
    </div>
</nav>
<nav className="bg-purple-100 ">
    <div className="py-1 px-4 mx-auto max-w-screen-xl sm:px-6 ">
        <div className="flex items-center w-full sm:block ">
            <ul className={
          (showNav ? "left-0" : "-left-full") +
          " sm:justify-between sm:static fixed rounded-xl bottom-15 top-12 sm:flex sm:space-x-7 items-center sm:bg-transparent bg-purple-100  sm:w-full w-full sm:text-purple-100 text-white sm:space-y-0 space-y-5 p-2 transition-left"
        }>
                <li>
                    <Link to="/" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/shop" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Shop</Link>
                </li>
                <li>
                    <Link to="/gallery" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Gallery</Link>
                </li>
                <li>
                    <Link to="/blog" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Blog</Link>
                </li>
                <li>
                    <Link to="/booking" className="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Book Astrological Reading!</Link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</>
  );
}


export default Nav;

