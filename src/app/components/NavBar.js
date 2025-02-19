import React from 'react'
import { CiSearch } from "react-icons/ci";
import {BsArrowDownShort} from 'react-icons/bs'
const NavBar = () => {
    return (
        <div className='container mx-auto'>
            <div className='container flex justify-between items-center'>
                <img src= "/assets/logo.svg" alt= "logo"/>
                <div className='flex gap-2 items-center border border-[#d0d5dd] px-0.5 pl-2 py-0.5 rounded-md'>
                    <CiSearch className='text-[#c3c5c9]' />
                    <input className='focus:outline-none' type="text" placeholder='Want to learn?'/>
                    <button className='flex items-center px-3 py-1 font-medium text-purple-600 capitalize rounded-md bg-purple-50 hover:bg-purple-200'>Explore
                    <BsArrowDownShort/>
                </button>
                </div>
                <div className="flex items-center gap-4 ">
                <p className='text-base font-medium cursor-pointer'>Program</p>
                <p className='text-base font-medium cursor-pointer'>Enterprise</p>
                <p className='text-base font-medium cursor-pointer'>Universities</p>
            </div>
            <div className="flex items-center gap-4">
                <p className='text-base font-medium cursor-pointer'>Sign In</p>
                <p className='text-base font-medium bg-purple-300 cursor-pointer border-solid rounded-lg btn btn-sm capitialize pl-0.1 pb-2 px-2 py-2.5'>Create Free Account</p>
             
            </div>

            </div>

        </div>
    )
}
export default NavBar;