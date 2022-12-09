import React from "react";
import CategoryNavbar from "./CategoryNavbar";
import GoTopBtn from "./GoToTop";
import NewNftCollection from "./newlyListNFT";
import NFTCart from "./NFTMarketplace";
import NFTCollections from "../../NFTCollectionAPI";

const NFTCollection = () => {
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

        <CategoryNavbar />

        <div className="flex justify-center">
          <div className="w-[57%] pt-10 text-[#686868]">
            Newly listed collections
          </div>
        </div>
        <NewNftCollection />

        <div className="flex justify-center">
          <div className="w-[85%] text-[#686868]">988 collection listed</div>
        </div>
        <div className="flex flex-wrap md:mx-[5%]">
          {NFTCollections.map((nftData) => {
            return <NFTCart NFTdata={nftData} />;
          })}
        </div>

        <GoTopBtn />
      </div>
    </React.Fragment>
  );
};

export default NFTCollection;
