import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
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
                        <p className='cursor-pointer hover:text-black'>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NavBar