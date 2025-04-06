import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const [visible, setVisible] = useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-36' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink className='flex flex-col items-center gap-1' to='/'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden opacity-25' />
            </NavLink>

            <NavLink className='flex flex-col items-center gap-1' to='/collection'>
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden opacity-25' />
            </NavLink>

            <NavLink className='flex flex-col items-center gap-1' to='/about'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden opacity-25' />
            </NavLink>

            <NavLink className='flex flex-col items-center gap-1' to='/contact'>
            <p>CONTACTS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden opacity-25' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />

            <div className='group relative'>
                <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to={'/cart'} className='relative'>
            <img src={assets.cart_icon} alt="" className='w-5 cursor-pointer' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white leading-4 aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Sidebar Menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=> setVisible(false)} className="flex items-center justify-end gap-4 p-3 cursor-pointer absolute right-0 top-5 ">
                <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180 " />
                <p>back</p>
                </div>
                <div className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden">
                <div className="flex items-center justify-center gap-10 flex-col">
                <NavLink onClick={()=> setVisible(false)} className='text-7xl' to='/'>HOME</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='text-7xl' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='text-7xl' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='text-7xl' to='/contact'>CONTACTS</NavLink>
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NavBar