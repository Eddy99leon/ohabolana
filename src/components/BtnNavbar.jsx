"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdSettings } from 'react-icons/io';

const BtnNavbar = () => {
  const session = useSession();
  const [ open, setOpen] = useState(false)

  if (session.status === 'authenticated') {
    return(
      <div className='relative'>
        <button 
          className='rounded-full overflow-hidden w-[35px] md:w-[40px] h-[35px] md:h-[40px]'
          onClick={() => setOpen(!open)}
        >
          <Image src={`https://api.dicebear.com/7.x/bottts/svg?seed=${session?.data?.user.name}`} width={34} height={34} alt='avatar' />
        </button>
        <div className={`
          ${ open ? "block" : "hidden"}
          absolute top-10 sm:top-10 right-0 bg-gray-100 font-semibold py-2 sm:py-4 pl-3 pr-4 border border-gray-300 shadow-lg z-50
        `}>
          <Link 
            href="/profil" 
            className='flex items-center mb-3'
            onClick={() => setOpen(false)}
          >
            <IoMdSettings className='text-2xl mr-1 text-indigo-700' />
            <p className='text-sm md:text-base'>
              Profil
            </p>
          </Link>
          <button 
            className='flex items-center'
            onClick={signOut}
          >
            <BiLogOutCircle className='text-2xl mr-1 text-indigo-700' />
            <p className='text-sm md:text-base'>
              logout
            </p>
          </button>
        </div>
      </div>
    )
  }

  return (
    <Link href="/profil/login">
        <button className='bg-indigo-700 text-white text-xs sm:text-sm px-2 sm:px-3 py-2 rounded-sm'>
            Login
        </button>
    </Link>
  )
}

export default BtnNavbar