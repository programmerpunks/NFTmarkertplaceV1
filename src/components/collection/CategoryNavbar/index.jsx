import React from "react";

const CategoryNavbar = (props) => {

  return (
    <div className="shadow-lg rounded-full mx-auto w-[60%] h-[50px] bg-white">
      <div className="flex justify-evenly text-xl">
        <div className="bg-black text-white w-full rounded-full h-[100%] py-3 flex justify-center">All</div>
        <div className="w-full flex justify-center items-center h-[100%] py-3">FTM</div>
        <div className="w-full flex justify-center h-[100%] py-3">BSC</div>
        <div className="w-full flex justify-center h-[100%] py-3">MATIC</div>
        <div className="w-full flex justify-center h-[100%] py-3">ONE</div>
        <div className="w-full flex justify-center h-[100%] py-3">AVAX</div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
