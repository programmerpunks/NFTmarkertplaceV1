import React from "react";

const CategoryNavbar = (props) => {
  return (
    <div className="shadow-lg rounded-full mx-auto w-[60%] h-[50px] bg-white">
      <div className="flex justify-evenly text-xl">
        <div
          className="bg-black text-white w-full rounded-full h-[100%] py-3 flex justify-center hover:cursor-pointer"
          onClick={() => props.setSelectedBtn("All")}
        >
          All
        </div>
        <div
          className="w-full flex justify-center items-center h-[100%] py-3 hover:cursor-pointer"
          onClick={() => props.setSelectedBtn("FTM")}
        >
          FTM
        </div>
        <div
          className="w-full flex justify-center h-[100%] py-3 hover:cursor-pointer"
          onClick={() => props.setSelectedBtn("BSC")}
        >
          BSC
        </div>
        <div
          className="w-full flex justify-center h-[100%] py-3 hover:cursor-pointer"
          onClick={() => props.setSelectedBtn("MATIC")}
        >
          MATIC
        </div>
        <div
          className="w-full flex justify-center h-[100%] py-3 hover:cursor-pointer"
          onClick={() => props.setSelectedBtn("ONE")}
        >
          ONE
        </div>
        <div
          className="w-full flex justify-center h-[100%] py-3 hover:cursor-pointer"
          onClick={() => props.setSelectedBtn("AVAX")}
        >
          AVAX
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
