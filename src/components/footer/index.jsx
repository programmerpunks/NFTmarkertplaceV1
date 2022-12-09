import React from "react";
import { TbBrandDiscord } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F3F5FB]">
        <div className="shadow-2xl mx-5 px-5 py-10 lg:mx-[15%] bg-white">
          <h1 className="text-3xl text-center font-bold">
            NFTKEY integration criteria for NFT collections
          </h1>
          <div className="pl-10 md:flex md:justify-evenly md:mt-7">
            <ul className="list-disc space-y-3 mt-10 md:mt-3">
              <li>High standard of art and design</li>
              <li>Consists of an NFT collection</li>
              <li>Utilises an accepted NFT standard</li>
            </ul>

            <ul className="list-disc space-y-3 mt-3">
              <li>Has a following and collector base</li>
              <li>We trust your NFT smart contract</li>
              <li>Keen to collaborate with us</li>
            </ul>
          </div>
          <div className="md:flex md:justify-center">
            <button className="bg-black text-lg text-white rounded-lg py-3 mt-10 w-[100%] md:w-[40%] lg:w-[40%]">
              We'd love to hear from you
            </button>
          </div>
        </div>

        <div className="bg-black text-white flex justify-center py-10 mt-[150px]">
          <div className="flex-row md:flex md:justify-between md:w-[100%] md:mx-5 lg:mx-[10%]">
            <div className="flex">
              <div className="mr-4">
                <TbBrandDiscord size={30} />
              </div>
              <div>NFTKEY © 2022</div>
            </div>
            <div className="hidden lg:block">
              Your Decentralized NFT Marketplace
            </div>
            <div className="flex w-[100%] mt-4 md:mt-0 justify-between md:justify-end md:space-x-3 md:w-fit">
              <TbBrandDiscord size={30} />
              <TbBrandDiscord size={30} />
              <TbBrandDiscord size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
