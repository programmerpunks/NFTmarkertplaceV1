import React from "react";

const set_states = (setnoOfElements, count, setSelectedBtn, value) => {
  setnoOfElements(count);
  setSelectedBtn(value);
};

const CategoryNavbar = ({ setSelectedBtn, selectedBtn, setnoOfElements }) => {
  return (
    <div className="shadow-lg rounded-full mx-auto w-[60%] h-[50px] bg-white">
      <div className="flex justify-evenly text-xl">
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            selectedBtn === "All" && "bg-black text-white rounded-full"
          }`}
          onClick={() => set_states(setnoOfElements, 30, setSelectedBtn, "All")}
        >
          All
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            selectedBtn === "FTM" && "bg-black text-white rounded-full"
          }`}
          onClick={() => set_states(setnoOfElements, 30, setSelectedBtn, "FTM")}
        >
          FTM
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            selectedBtn === "BSC" && "bg-black text-white rounded-full"
          }`}
          onClick={() => set_states(setnoOfElements, 30, setSelectedBtn, "BSC")}
        >
          BSC
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            selectedBtn === "MATIC" && "bg-black text-white rounded-full"
          }`}
          onClick={() =>
            set_states(setnoOfElements, 30, setSelectedBtn, "MATIC")
          }
        >
          MATIC
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            selectedBtn === "ONE" && "bg-black text-white rounded-full"
          }`}
          onClick={() => set_states(setnoOfElements, 30, setSelectedBtn, "ONE")}
        >
          ONE
        </div>
        <div
          className={`w-full h-[100%] py-3 flex justify-center hover:cursor-pointer ${
            selectedBtn === "AVAX" && "bg-black text-white rounded-full"
          }`}
          onClick={() =>
            set_states(setnoOfElements, 30, setSelectedBtn, "AVAX")
          }
        >
          AVAX
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
