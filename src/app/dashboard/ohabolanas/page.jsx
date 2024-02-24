import ItemQuote from '@/components/ItemQuote'
import { categorys, regions } from '@/lib/staticData'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Ohabolanas = async () => {

  return (
    <div>
      {/* filter */}
      <div>

        {/* Recherche */}
        <div className='relative w-[400px] h-[40px] mx-auto inset-x-0 mb-3'>
          <div className='absolute flex items-center left-0 h-full px-3'>
            <FiSearch className='text-lg text-gray-800' />
          </div>
          <input 
            type="text" 
            className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-10'
            placeholder='cherche ohabolana...'
          />
          <button className='absolute right-0 h-full px-4 bg-indigo-700 text-white'>
            Cherche
          </button>
        </div>

        <div className='max-w-xl flex justify-between items-center mx-auto'>
          {/* Filtre par region */}
          <div>
            <select 
              name='region'
              className='h-[40px] bg-transparent font-medium text-gray-700 outline-none border border-gray-300 px-2'
            >
              <option defaultValue>Région</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>{region}</option>
              ))}
            </select>
          </div>
          {/* Filtre par categorie */}
          <div>
            <select 
              name='categorie'
              className='h-[40px] bg-transparent font-medium text-gray-700 outline-none border border-gray-300 px-2'
            >
              <option defaultValue>Catégorie</option>
              {categorys.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

      </div>
      {/* affichage des ohabolana */}
      <div className='py-4'>
        <ItemQuote />
        <ItemQuote />
        <ItemQuote />
      </div>
    </div>
  )
}

export default Ohabolanas