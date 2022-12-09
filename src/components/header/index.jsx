import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-[#E3E6EE] flex py-5 justify-center">
        <div className="flex w-[65%] justify-between">
          <div>
            <img
              src={require("../../images/header/NFTlogo.svg").default}
              alt="/"
            />
          </div>

          <div className="flex justify-evenly w-[30%]">
            <div className="flex justify-center bg-white rounded-[50%] p-2">
              <img
                src={require("../../images/header/clockHeader.svg").default}
                alt="/"
              />
            </div>
            <div className="flex justify-center bg-white rounded-[50%] p-2">
              <img
                src={require("../../images/header/searchHeader.svg").default}
                alt="/"
              />
            </div>
            <div className="flex justify-center bg-white rounded-full p-1 px-2 items-center text-lg">
              Connect Wallet
            </div>
            <div className="flex justify-center bg-white rounded-[50%] p-2">
              <img
                src={require("../../images/header/nightModeHeader.svg").default}
                alt="/"
              />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
