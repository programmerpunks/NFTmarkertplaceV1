import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div
        className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex justify-evenly flex-col w-[45%] mt-4 border border-gray-100 rounded-lg h-[60px] bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="pl-3 pr-4 border-b-4 flex h-[100%] items-center border-black text-lg rounded text-black md:p-0 dark:text-white font-roboto"
              aria-current="page"
            >
              Collections
            </a>
          </li>

          <li>
            <a
              href="#"
              className="pl-3 pr-4 flex h-[100%] items-center text-lg rounded md:p-0 dark:text-white font-roboto font-thin opacity-80"
              aria-current="page"
            >
              New listings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="pl-3 pr-4 flex h-[100%] items-center text-lg rounded text-black md:p-0 dark:text-white font-roboto font-thin opacity-80"
              aria-current="page"
            >
              Artists
            </a>
          </li>
          <li>
            <a
              href="#"
              className="pl-3 pr-4  flex h-[100%] items-center  text-lg rounded text-black md:p-0 dark:text-white font-roboto font-thin opacity-80"
              aria-current="page"
            >
              Teams
            </a>
          </li>
          <li>
            <a
              href="#"
              className="pl-3 pr-4 flex h-[100%] items-center  text-lg rounded text-black md:p-0 dark:text-white font-roboto font-thin opacity-80"
              aria-current="page"
            >
              Statistics
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
