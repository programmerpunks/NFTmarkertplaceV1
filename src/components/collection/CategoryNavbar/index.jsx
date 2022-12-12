import React from "react";

const CategoryNavbar = (props) => {
  return (
    <div className="shadow-lg rounded-full mx-auto w-[60%] h-[50px] bg-white">
      <div className="flex justify-evenly text-xl">
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            props.selectedBtn === "All"
              ? "bg-black text-white rounded-full"
              : ""
          }`}
          onClick={() => props.setSelectedBtn("All")}
        >
          All
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            props.selectedBtn === "FTM"
              ? "bg-black text-white rounded-full"
              : ""
          }`}
          onClick={() => props.setSelectedBtn("FTM")}
        >
          FTM
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            props.selectedBtn === "BSC"
              ? "bg-black text-white rounded-full"
              : ""
          }`}
          onClick={() => props.setSelectedBtn("BSC")}
        >
          BSC
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            props.selectedBtn === "MATIC"
              ? "bg-black text-white rounded-full"
              : ""
          }`}
          onClick={() => props.setSelectedBtn("MATIC")}
        >
          MATIC
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            props.selectedBtn === "ONE"
              ? "bg-black text-white rounded-full"
              : ""
          }`}
          onClick={() => props.setSelectedBtn("ONE")}
        >
          ONE
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            props.selectedBtn === "AVAX"
              ? "bg-black text-white rounded-full"
              : ""
          }`}
          onClick={() => props.setSelectedBtn("AVAX")}
        >
          AVAX
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
