import React from "react";
import {TbMoon} from "react-icons/tb"
import {IoSearchSharp} from "react-icons/io5"

const Header = () => {
  return (
    <>
      <header className="bg-slate-200 flex justify-center px-4 sm:px-10 dark:bg-black dark:text-white">
        <div className="max-w-[1400px] w-full py-3 sm:py-5">
          <div className="flex justify-between items-center">
              <div>
              <img
                src={require("../../images/header/NFTlogo.svg").default}
                alt="/"
              />
              
              </div>
            <div className="flex gap-2 sm:gap-5">
              <button className="rounded-full bg-white p-2 dark:bg-neutral-800">
                <IoSearchSharp size={25} />
              </button>
              
              <button
              
                className="rounded-full bg-white p-2 dark:bg-neutral-800"
              >
              
                  <TbMoon size={25} />
                
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
