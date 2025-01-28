import React from 'react'
import { SidebarImages } from '../assets/images/sidebarImages/sidebarImages'
import { useNavigate } from 'react-router-dom'

const BackButtonWithCustomPath = ({path}) => {
    const navigate = useNavigate();
    console.log(path)
  return (
    <button 
          onClick={()=>navigate(path)}
          className="bg-gray-300 p-1 rounded-full hover:bg-gray-400">
            <img src={SidebarImages.closeSidebarArrow} className="w-8" />
          </button>
  )
}

export default BackButtonWithCustomPath