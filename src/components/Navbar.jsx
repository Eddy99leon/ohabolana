import React from 'react'
import Link from 'next/link';
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
import BtnNavbar from './BtnNavbar';

const Navbar = () => {
  return (
    <div className='container flex justify-between items-center py-6'>
        <Link 
            href="/"
            className='flex items-center'
        >
            <FcLightAtTheEndOfTunnel className='text-2xl sm:text-3xl mr-1' />
            <h1 className='text-base sm:text-lg lg:text-xl font-semibold'>
                Ohabolana
            </h1>
        </Link>
        <div className='flex items-center space-x-2 sm:space-x-4'>
            <Link 
                href="/auteurs"
                className='text-base lg:text-lg font-semibold'
            >
                Auteurs
            </Link>
            <BtnNavbar />
        </div>
    </div>
  )
}

export default Navbar