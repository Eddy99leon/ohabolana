"use client"
import { categorys, regions } from '@/lib/staticData'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { RiLoader4Fill } from 'react-icons/ri'

const AddQuoteForm = ({userId}) => {
  const [ loading, setLoading ] = useState()
  const router = useRouter()

  //ajouter un blog
  const addQuote = async (e) => {
    e.preventDefault();
    const quote = e.target[0].value;
    const region = e.target[1].value;
    const category = e.target[2].value;
    const desc = e.target[3].value;
    setLoading(true)
    try{
      await fetch("/api/quotes", {
        method: "POST",
        body: JSON.stringify({
          quote,
          region,
          category,
          desc,
          userId,
        })
      })
    }catch(err){
      console.log(err)
    } finally {
      e.target.reset()
      setLoading(false)
      router?.push('/profil');
    }
  }


  return (
    <form onSubmit={addQuote} className='space-y-4 sm:space-y-6'>
        {/* Ohabolana input */}
        <div>
          <label 
            htmlFor="quote"
            className='text-gray-700 font-medium text-sm sm:text-base'
          >
            Ohabolana :
          </label>
          <textarea 
            name="quote"
            id="quote" 
            cols="30" 
            rows="3"
            spellCheck="false"
            className='w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm sm:text-base p-2'
          />
        </div>

        {/* Select */}
        <div className='flex justify-between items-center gap-2'>
          <div>
            <select 
              name='region'
              className='h-[40px] sm:h-[50px] bg-transparent font-medium text-sm sm:text-base text-gray-700 outline-none border border-gray-300 px-1 sm:px-2'
            >
              <option defaultValue>Région</option>
              {regions.map((region, index) => (
                <option key={index} value={region} className='text-sm sm:text-base'>{region}</option>
              ))}
            </select>
          </div>
          <div>
            <select 
              name='category'
              className='h-[40px] sm:h-[50px] bg-transparent font-medium text-sm sm:text-base text-gray-700 outline-none border border-gray-300 px-1 sm:px-2'
            >
              <option defaultValue>Catégorie</option>
              {categorys.map((category, index) => (
                <option key={index} value={category} className='text-sm sm:text-base'>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Explication */}
        <div>
          <label 
            htmlFor="explication"
            className='text-gray-700 font-medium text-sm sm:text-base'
          >
            Explication :
          </label>
          <textarea 
            name="desc"
            id="explication"
            cols="30" 
            rows="5"
            spellCheck="false"
            className='w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium p-2'
          />
        </div>

        {/* button */}
        <div className='flex justify-end mb-6'>
          <button className='bg-indigo-700 text-xs sm:text-sm text-white font-medium w-[80px] sm:w-[100px] py-2 sm:py-3'>
            {loading ? 
              <div className='flex justify-center'>
                <RiLoader4Fill className='animate-spin text-xl sm:text-2xl' />
              </div>
                : 
              "Ajouter"
            }
          </button>
        </div>

      </form>
  )
}

export default AddQuoteForm