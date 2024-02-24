"use client"
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  const router = useRouter()
  const [search, setSearh] = useState("")
  const [ query ] = useDebounce(search, 750)

  useEffect(() => {
    if (search.length == 0) {
        router.push(`/auteurs`);
    }
  }, [search, router])
  
  const handleSearch = () => {
    if (search.length == 0) {
        router.push(`/auteurs`);
    }else{
        router.push(`/auteurs?search=${query}`);
    }
  };

  return (
    <div className='relative w-[400px] h-[40px] mx-auto'>
        <div className='absolute flex items-center left-0 h-full px-3'>
            <FiSearch className='text-lg text-gray-800' />
        </div>
        <input 
            type="text" 
            className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-10'
            placeholder='cherche auteurs...'
            spellCheck="false"
            onChange={(e) => setSearh(e.target.value)}
        />
        <button 
            className='absolute right-0 h-full px-4 bg-indigo-700 text-white'
            onClick={handleSearch}
        >
            Cherche
        </button>
    </div>
  )
}

export default Search