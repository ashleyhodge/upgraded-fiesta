import React from "react";

function Nav() {
  return (
    <>
    <nav class="bg-white border-purple-100 dark:bg-purple-100">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white drop-shadow-lg shadow-black">Stanley Jane</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm font-medium text-white dark:text-white hover:underline hover:text-midgreen-50">Login</a>
        </div>
    </div>
</nav>
<nav class="bg-yellow-50 dark:bg-yellow-50">
    <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="#" class="drop-shadow-xl shadow-black text-white dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="drop-shadow-xl shadow-black text-white dark:text-white hover:underline">Shop</a>
                </li>
                <li>
                    <a href="#" class="drop-shadow-xl shadow-black text-white dark:text-white hover:underline">Blog</a>
                </li>
                <li>
                    <a href="#" class="drop-shadow-xl shadow-black text-white dark:text-white hover:underline">Book Astrological Reading!</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</>
  )
}
export default Nav;