import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const Layout = () => {
   


  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='flex md:min-h-screen'>
            <div  className=' hidden md:block'>
            <Sidebar/>
            </div>
            <div className='flex-[4]  '>
            <Outlet/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        
    </div>
)
}

export default Layout