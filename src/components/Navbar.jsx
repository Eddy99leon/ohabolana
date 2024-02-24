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
            <FcLightAtTheEndOfTunnel className='text-3xl mr-1' />
            <h1 className='text-xl font-semibold'>
                Ohabolana
            </h1>
        </Link>
        <div className='flex items-center space-x-4'>
            <Link 
                href="/auteurs"
                className='text-lg font-semibold'
            >
                Auteurs
            </Link>
            <BtnNavbar />
        </div>
    </div>
  )
}

export default Navbar