import React from "react";
import Logo from "./logo";
import { useNavigate } from "react-router-dom";
import ActiveScreenIdentifier from "../utils/activeScreenIdentifier"


const Footer = () => {
    const navigate = useNavigate();
    var url = ActiveScreenIdentifier();
    
  return (
    <div className="grid grid-cols-1 gap-8 place-items-center justify-center md:grid-cols-3 py-10 md: bg-[#0C0D0E]">
      <div className="flex flex-col items-center justify-center text-center text-white ">
        <Logo />
        <h1 className="italic">the cloud and rain you need in your life</h1>
      </div>
      <div className="text-white">
        <h1 className="font-semibold text-lg">Quick Links</h1>
        <ul className="flex flex-col gap-1 text-gray-300 justify-center items-center">
          <li className={`hover:cursor-pointer hover:text-white ${url === "/" ? "text-white":""}`} onClick={()=> navigate("/")} >Home</li>
          <li className={`hover:cursor-pointer hover:text-white ${url.includes("add") ? "text-white":""}`} onClick={()=> navigate("/addUser")}>Registration</li>
          <li className={`hover:cursor-pointer hover:text-white ${url.includes("all") ? "text-white":""}`} onClick={()=> navigate("/allUsers")}>Users</li>
          <li className="hover:cursor-pointer hover:text-white">About</li>
          <li className="hover:cursor-pointer hover:text-white">Services</li>
        </ul>
      </div>
      <div className="text-white flex flex-col items-center justify-center text-center gap-1">
        <h1 className="text-lg font-semibold">Contact</h1>
        <ul className="flex flex-col gap-2 text-gray-300">
          <li>+92 051 7320025</li>
          <li>
            Office # 201, 2nd Floor, Capital Technology Park (Former Cubator
            1ne), Sunrise Avenue, Park Road, Islamabad.
          </li>
          <li className="text-blue-400 hover:cursor-pointer">
            <a href="https://www.wanclouds.net/" target="_blank">
              wancloud.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
