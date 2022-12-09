import React from "react";
import NFTCartItem from "./NFTCollectionCartItem";

const NFTCart = (props) => {
  const NFTCollectionData = props.NFTdata;
  return (
    <React.Fragment>
      {NFTCollectionData.map((NFTItem) => {
        return (
          <NFTCartItem
            category={NFTItem.category}
            image_link={NFTItem.img_url}
            title={NFTItem.title}
          />
        );
      })}
    </React.Fragment>
  );
};

export default NFTCart;
