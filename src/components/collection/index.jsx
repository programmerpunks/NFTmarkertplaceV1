import React, { useState } from "react";
import CategoryNavbar from "./CategoryNavbar";
import GoTopBtn from "./GoToTop";
import NewNftCollection from "./newlyListNFT";
import NFTCart from "./NFTMarketplace";
import NFTCollections from "../../NFTCollectionAPI";

const NFTCollection = () => {
  const [SelectedBtn, setSelectedBtn] = useState("All");
  let filtered_NFTs = NFTCollections;
  const filter_NFTs = (SelectedBtn, NFTs) => {
    filtered_NFTs = [];
    if (SelectedBtn.SelectedBtn === "All") {
      filtered_NFTs = NFTCollections;
      return NFTs;
    } else {
      for (let index = 0; index < NFTs.length; index++) {
        if (NFTs[index]["category"] === SelectedBtn.SelectedBtn) {
          filtered_NFTs.push(NFTs[index]);
        }
      }
      return filtered_NFTs;
    }
  };
  console.log(filter_NFTs({ SelectedBtn }, NFTCollections));
  return (
    <React.Fragment>
      <div className="bg-[#F3F5FB]">
        <div>
          <h1 className="font-black text-[42px] flex justify-center p-10">
            Discover, collect and trade NFTs
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-black rounded-[25px] text-white justify-center flex py-2 px-8">
            Explore popular collections
          </div>
        </div>

        <CategoryNavbar setSelectedBtn={setSelectedBtn} />

        <div className="flex justify-center">
          <div className="w-[57%] pt-10 text-[#686868]">
            Newly listed collections
          </div>
        </div>
        <NewNftCollection />

        <div className="flex justify-center">
          <div className="w-[85%] text-[#686868]">
            {filtered_NFTs.length} collection listed
          </div>
        </div>
        <div className="flex flex-wrap md:mx-[5%]">
          <NFTCart NFTData={filtered_NFTs} />
        </div>

        <GoTopBtn />
      </div>
    </React.Fragment>
  );
};

export default NFTCollection;
