"use client"
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  const router = useRouter()
  const [search, setSearh] = useState("")
  const [ query ] = useDebounce(search, 1000)

  useEffect(() => {
    if (query?.length == 0) {
        router.push(`/auteurs`);
    }else{
      router.push(`/auteurs?search=${query}`);
    }
  }, [ router, query ])

  return (
    <div className='relative w-[300px] sm:w-[350px] lg:w-[400px] h-[37px] lg:h-[40px] mx-auto'>
        <div className='absolute flex items-center left-0 h-full px-3'>
            <FiSearch className='text-base sm:text-lg text-gray-800' />
        </div>
        <input 
            type="text" 
            className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-9 sm:pl-10 text-sm sm:text-base'
            placeholder='cherche auteurs...'
            spellCheck="false"
            onChange={(e) => setSearh(e.target.value)}
        />
        <button className='absolute right-0 h-full px-4 bg-indigo-700 text-white text-sm sm:text-base'>
            Cherche
        </button>
    </div>
  )
}

export default Search