import React from "react";
import { useState } from "react";

import CategoryNavbar from "./CategoryNavbar";
import get_NFTs_Filtered from "./helping_functions/NFTsListingFunctions";
import GoTopBtn from "./GoToTop";
import NewNftCollection from "./newlyListNFT";
import NFTCart from "./NFTMarketplace";
import NFTCollections from "../../NFTCollectionAPI";

const NFTCollection = () => {
  const [noOfElements, setnoOfElements] = useState(30);
  const [SelectedBtn, setSelectedBtn] = useState("All");
  let filtered_NFTs = get_NFTs_Filtered({ SelectedBtn }, NFTCollections);
  const sliced_NFTs = filtered_NFTs.slice(0, noOfElements);

  return (
    <>
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

        <CategoryNavbar
          setSelectedBtn={setSelectedBtn}
          selectedBtn={SelectedBtn}
          setnoOfElements={setnoOfElements}
        />

        <div className="flex justify-center">
          <div className="w-[57%] pt-10 text-[#686868]">
            Newly listed collections
          </div>
        </div>
        <NewNftCollection />

        <div className="flex flex-wrap md:mx-[5%]">
          <NFTCart NFTData={sliced_NFTs} />
        </div>
        {noOfElements < filtered_NFTs.length && (
          <div className="flex justify-center pt-10 pb-14">
            <div className="flex justify-center py-3 mr-4 text-[#686868]">
              {sliced_NFTs.length} / {filtered_NFTs.length} NFTs
            </div>
            <button
              className="bg-black text-lg text-white rounded-lg p-3"
              onClick={() => setnoOfElements(noOfElements + 30)}
            >
              Load More
            </button>
          </div>
        )}

        <GoTopBtn />
      </div>
    </>
  );
};

export default NFTCollection;
