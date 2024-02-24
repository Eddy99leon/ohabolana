import ItemAuteur from '@/components/ItemAuteur'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Auteurs = () => {
  return (
    <div>
      {/* Recherche */}
      <div className='relative w-[400px] h-[40px] mx-auto inset-x-0 mb-3'>
        <div className='absolute flex items-center left-0 h-full px-3'>
          <FiSearch className='text-lg text-gray-800' />
        </div>
        <input 
          type="text" 
          className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-10'
          placeholder='cherche auteurs...'
        />
        <button className='absolute right-0 h-full px-4 bg-indigo-700 text-white'>
          Cherche
        </button>
      </div>
      <div>
        <ItemAuteur />
        <ItemAuteur />
        <ItemAuteur />
      </div>
    </div>
  )
}

export default Auteurs