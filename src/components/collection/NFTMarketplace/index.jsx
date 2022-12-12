import React from "react";
import NFTCartItem from "./NFTCollectionCartItem";

const NFTCart = ({ NFTData }) => {
  return (
    <>
      {NFTData.map((NFTItem) => {
        return (
          <NFTCartItem
            category={NFTItem.category}
            image_link={NFTItem.img_url}
            title={NFTItem.title}
          />
        );
      })}
    </>
  );
};

export default NFTCart;
