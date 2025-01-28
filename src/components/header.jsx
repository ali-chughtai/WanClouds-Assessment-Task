import React, { useState } from "react";
import Logo from "./logo";
import { headerImages } from "../assets/images/headerImages/headerImages";
import SidebarNavigationLinks from "./sidebarNavigationLinks";

const Header = () => {
    const [openDrawer , setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        if(openDrawer == true) {
            setOpenDrawer(false);
        }
        else{
            setOpenDrawer(true);
        }
    }

    return(
        <div className="flex justify-between px-4  bg-gradient-to-r from-[#1B223C] via-[#0E1326] to-[#161C35] items-center py-3 ">
            <Logo/>
            <div className="flex gap-4 text-white text-md font-semibold hidden md:flex items-center">
                <h1 className="hover:cursor-pointer hover:underline">About Us</h1>
                <h1 className="hover:cursor-pointer hover:underline">Contact</h1>
                <h1 className="hover:cursor-pointer hover:underline">Services</h1>
                <h1 className="hover:cursor-pointer hover:underline">Team</h1>
                <h1 className="hover:cursor-pointer hover:border-white border border-2 border-gray-400 px-6 py-1 rounded-full">Login</h1>
            </div>
            <div className="md:hidden">
                {openDrawer ?
                <img src={headerImages.cross} className="w-8" onClick={toggleDrawer}/>
                :
                <img src={headerImages.drawer} className="w-8" onClick={toggleDrawer}/>
                 }
            </div>
            { openDrawer && <div className="bg-[#1B223C] absolute top-[8.5%] right-1 py-4 px-4 rounded-b-lg text-white z-50">
                <SidebarNavigationLinks/>
            </div>}
        </div>
    )
}

export default Header;