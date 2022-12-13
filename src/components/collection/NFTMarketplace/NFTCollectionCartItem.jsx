import React from "react";

const NFTCartItem = ({ category, image_link, title }) => {
  return (
    <React.Fragment>
      {category && (
        <div className=" p-6 md:w-1/2 lg:w-1/4 sm:w-full hover:-translate-y-4 duration-500 hover:cursor-pointer">
          <div className="h-full border-2 relative border-gray-200 border-opacity-60 rounded-[15px] overflow-hidden shadow-lg bg-white">
            <div className="absolute top-0 right-0 bg-black px-4 rounded-l-lg text-white font-medium">
              {category}
            </div>
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={image_link}
              alt="blog"
            />
            <div className="p-4 flex items-center flex-col">
              <div className="">
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  {title}
                </h1>
              </div>
              <div className="">
                <p className="mb-3 border-2 rounded-[25px] p-1 px-3 text-xs">
                  Marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default NFTCartItem;
