import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarNavigationLinks from "./sidebarNavigationLinks";
import ShortLogo from "./shortLogo";
import { SidebarImages } from "../assets/images/sidebarImages/sidebarImages";

const Sidebar = () => {
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    if (showSidebar == true) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };


  return (
    <div
      className={`bg-gray-800 min-h-screen h-full  flex-1 text-white bg-gradient-to-b from-[#1B223C] via-[#0F1428] to-[#161C34]
    transition-all duration-5000 transform ease-in-out
    ${showSidebar ? "w-full" : "w-20"}`}
    >
      <div className={`flex gap-1 pl-2 pr-6  items-center  ${showSidebar ? "pt-1":"py-4 pl-2 px-0 pr-0"}`}>
        <ShortLogo />
        <h1
          className={`text-xl font-bold pb-6  pt-7 ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          Quick Access
        </h1>
      </div>
      <hr className="pb-8 " />

      {showSidebar ? (
        <SidebarNavigationLinks />
      ) : (
        <SidebarNavigationLinks hidden={true} />
      )}
      <button
        onClick={toggleSidebar}
        className={`bg-white px-1 py-1 rounded-full fixed top-[50%] ${showSidebar? "left-[84%]" : "left-[57%]" } `}
      >
        {showSidebar ? 
        <img src={SidebarImages.closeSidebarArrow} className="w-6" />
        :
        <img src={SidebarImages.openSidebarArrow} className="w-6" />
        }
      </button>
    </div>
  );
};

export default Sidebar;
