import React from "react";
import { SidebarImages } from "../assets/images/sidebarImages/sidebarImages";
import { useNavigate } from "react-router-dom";
import ActiveScreenIdentifier from "../utils/activeScreenIdentifier";

const SidebarNavigationLinks = ({ hidden }) => {
  const navigate = useNavigate();
  var url = ActiveScreenIdentifier();

  return (
    <div className="flex flex-col gap-2 pl-2">
      <div
        className={`flex items-center gap-2  hover:cursor-pointer ${
          hidden ? "pl-3" : "pl-2"
        }`}
        onClick={() => navigate("/addUser")}
        >
        <div
          className={`
          ${url.includes("add") && hidden ? "w-full border-r-4" : ""}
          `}
        >
          <img
            src={SidebarImages.form}
            className={`${hidden ? "w-7" : "w-6"}`}
          />
        </div>
        <h1
          className={`font-semibold hover:underline ${
            hidden ? "hidden" : "block"
          } ${url.includes("add") ? "underline" : ""}`}
          onClick={() => navigate("/addUser")}
        >
          User Registration
        </h1>
      </div>

      <div
        className={`flex items-center gap-2  hover:cursor-pointer ${
          hidden ? "pl-2" : "pl-1"
        }`}
        onClick={() => navigate("/allUsers")}

      >
        <div
          className={`
          ${url.includes("all") && hidden ? "w-full border-r-4" : ""}
          `}
        >
          {" "}
          <img
            src={SidebarImages.users}
            className={` ${hidden ? "w-9" : "w-8"}`}
          />
        </div>

        <h1
          className={`font-semibold hover:underline ${
            hidden ? "hidden" : "block"
          } ${url.includes("all") ? "underline" : ""}`}
          onClick={() => navigate("/allUsers")}
        >
          Total Users
        </h1>
      </div>
    </div>
  );
};

export default SidebarNavigationLinks;
