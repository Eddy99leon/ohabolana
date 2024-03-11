"use client"
import { categorys, regions } from '@/lib/staticData';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";

const Filter = ({page}) => {

  const router = useRouter()
  const [search, setSearh] = useState("")
  const [region, setRegion] = useState('')
  const [category, setCategory] = useState('')


  // useEffect(() => {
  //   // Cas: tous n'existe pas
  //   if (search.length === 0 && region === '' && category === '') {
  //     router.push(`/`);
  //   }

  //   // Cas: recherche existe
  //   if (search.length > 0 && region === '' && category === '') {
  //     router.push(`/?search=${search}`);
  //   }
  //   if (search.length > 0 && region !== '' && category === '') {
  //     router.push(`/?search=${search}&region=${region}`);
  //   }
  //   if (search.length > 0 && region === '' && category !== '') {
  //     router.push(`/?search=${search}&categorie=${category}`);
  //   }

  //   // Cas: region existe
  //   if (search.length === 0 && region !== '' && category === '') {
  //     router.push(`/?region=${region}`);
  //   }
  //   if (search.length === 0 && region !== '' && category !== '') {
  //     router.push(`/?region=${region}&categorie=${category}`);
  //   }

  //   // Cas: category existe
  //   if (search.length === 0 && region === '' && category !== '') {
  //     router.push(`/?categorie=${category}`);
  //   }
    
  //   // Cas: tous existe
  //   if (search.length > 0 && region !== '' && category !== '') {
  //     router.push(`/?search=${search}&region=${region}&categorie=${category}`);
  //   }
  // }, [search, router, region, category])


  useEffect(() => {
    let queryParams = [];
  
    if (page > 1) {
      queryParams.push(`page=${page}`);
    }
    if (search.length > 0) {
      queryParams.push(`search=${search}`);
    }
    if (region !== '') {
      queryParams.push(`region=${region}`);
    }
    if (category !== '') {
      queryParams.push(`category=${category}`);
    }
  
    const queryString = queryParams.join('&');

    if (queryString.length === 0) {
      router.push('/');
    } else {
      router.push(`/?${queryString}`);
    }

  }, [search, region, category, router]);


  return (
    <div className='container lg:flex items-center justify-between bg-white py-10'>
      {/* Recherche */}
      <div className='relative mx-auto lg:mx-0 w-[300px] sm:w-[350px] lg:w-[400px] h-[37px] lg:h-[40px] mb-6 lg:mb-0'>
        <div className='absolute flex items-center left-0 h-full px-3'>
          <FiSearch className='text-base sm:text-lg text-gray-800' />
        </div>
        <input 
          type="text" 
          value={search}
          className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm sm:text-base pl-9 sm:pl-10'
          placeholder='cherche ohabolana...'
          spellCheck="false"
          onChange={(e) => setSearh(e.target.value)}
        />
        <button 
          className='absolute right-0 h-full px-4 bg-indigo-700 text-white text-sm sm:text-base'
        >
          Cherche
        </button>
      </div>
      <div className=' max-w-[500px] mx-auto lg:mx-0 flex justify-between items-center gap-2 md:gap-10 lg:gap-20'>
        {/* Filtre par region */}
        <div>
          <select 
            name='region'
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className='h-[40px] bg-transparent font-medium text-gray-700 outline-none border border-gray-300 px-1 sm:px-2 text-sm sm:text-base'
          >
            <option value={""}>Région</option>
            {regions.map((region, index) => (
              <option key={index} value={region} className='text-xm sm:text-base'>{region}</option>
            ))}
          </select>
        </div>
        {/* Filtre par categorie */}
        <div>
          <select 
            name='categorie'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='h-[40px] bg-transparent font-medium text-gray-700 outline-none border border-gray-300 px-1 sm:px-2 text-sm sm:text-base'
          >
            <option value={""}>Catégorie</option>
            {categorys.map((category, index) => (
              <option key={index} value={category} className='text-xm sm:text-base'>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter