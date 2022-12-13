
const NewListedNFTCartItem = ({category, image, title, total_nfts_count}) => {
  return (
    <>
      <div className="shadow-lg flex p-2 w-64 rounded-lg hover:-translate-y-4 duration-500 bg-white">
        <div>
          <img className="w-16 h-16 rounded-lg" src={image} alt="" />
        </div>
        <div className="flex-row my-auto mx-auto">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex space-x-4">
            <div className="bg-black font-bold text-white w-fit p-1 rounded-md text-xs">
              {category}
            </div>
            <p className="text-slate-400 text-sm">
              {total_nfts_count} NFTs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewListedNFTCartItem;
