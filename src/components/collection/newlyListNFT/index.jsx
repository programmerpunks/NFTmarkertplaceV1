import React from "react";

import NewListedNFTCartItem from "./newlyListedNFTCartItem";
import NewNftsDetails from "./NewNftsDetails";

const NewNftCollection = () => {
  return (
    <>
      <div className="flex justify-center py-5">
        <div className="overflow-x-auto">
          <div className="w-[1100px]">
            <div className="flex justify-center gap-4 py-5">
              {NewNftsDetails.map((nft) => {
                return (
                  <NewListedNFTCartItem
                    image={nft.img_url}
                    category={nft.category}
                    title={nft.title}
                    total_nfts_count={nft.total_nfts_count}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNftCollection;
