import React from "react";

const NewListedNFTCartItem = (props) => {
  return (
    <>
      <div className="shadow-lg flex p-2 w-64 rounded-lg hover:-translate-y-4 duration-500 hover:cursor-pointer">
        <div>
          <img className="w-16 h-16 rounded-lg" src={props.image} alt="" />
        </div>
        <div className="flex-row my-auto mx-auto">
          <h3 className="font-semibold">{props.title}</h3>
          <div className="flex space-x-4">
            <div className="bg-black font-bold text-white w-fit p-1 rounded-md text-xs">
              {props.category}
            </div>
            <p className="text-slate-400 text-sm">
              {props.total_nfts_count} NFTs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewListedNFTCartItem;
