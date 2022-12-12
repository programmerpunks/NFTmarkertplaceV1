import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const GoTopBtn = () => {
  const [isVisible, setisVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolledHeight > heightToHidden) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <div className="my-20 flex justify-end pr-10 fixed right-7 bottom-5 hover:cursor-pointer">
          <div
            className="shadow-2xl bg-white p-2 rounded-full"
            onClick={goToBtn}
          >
            <MdKeyboardArrowUp size={40} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GoTopBtn;
