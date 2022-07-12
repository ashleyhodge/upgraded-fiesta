
import React, { useState } from "react";
import { Navbar } from 'flowbite-react'
import { AiOutlineMenu } from "react-icons/ai";


function Nav() {
  const [showNav, setShowNav] = useState(false);
  return (
<>
    <nav class="bg-purple-200 border-purple-100 text-white">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white drop-shadow-lg shadow-black">Stanli Jane</span>
        </a>
        <div class="flex items-center">
          <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
          <a href="#" class="text-sm font-medium text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Login</a>
          {showNav ? (
          <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
        </div>
    </div>
</nav>
<nav class="bg-purple-100">
    <div class="py-3 px-4 mx-auto max-w-screen-xl">
    
        <div class="flex items-center w-full md:block ">
            <ul className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-15 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-purple-100  md:w-full w-full md:text-purple-100 text-white md:space-y-0 space-y-5 p-2 transition-left"
        }>
                <li>
                    <a href="#" class="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Shop</a>
                </li>
                <li>
                    <a href="#" class="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Blog</a>
                </li>
                <li>
                    <a href="#" class="drop-shadow-lg shadow-black text-purple-50 dark:text-purple-50 hover:underline hover:text-white">Book Astrological Reading!</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</>
  );
}


export default Nav;

