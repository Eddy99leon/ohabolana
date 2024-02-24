import Link from 'next/link'
import React from 'react'
import { IoIosStats } from "react-icons/io";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

export default function RootLayout({ children }) {
    return (
        <div className='max-w-5xl mx-auto px-3 grid grid-cols-4 py-4'>
            <div className='col-span-1 py-10 border-r border-gray-300'>
                <ul className='flex flex-col space-y-4 font-semibold text-gray-500 text-xl'>
                    <Link href="/dashboard" className='flex items-center hover:text-gray-700'>
                        <IoIosStats className='text-2xl mr-2' />
                        Statistiques
                    </Link>
                    <Link href="/dashboard/ohabolanas" className='flex items-center hover:text-gray-700'>
                        <BsChatSquareQuoteFill className='text-2xl mr-2' />
                        Ohabolana
                    </Link>
                    <Link href="/dashboard/auteurs" className='flex items-center hover:text-gray-700'>
                        <FaCircleUser className='text-2xl mr-2' />
                        Auteurs
                    </Link>
                </ul>
            </div>
            <div className='min-h-[550px] col-span-3 px-4'>
                {children}
            </div>
        </div>
    )
}