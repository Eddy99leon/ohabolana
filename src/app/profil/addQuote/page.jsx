"use client"
import AddQuoteForm from '@/components/AddQuoteForm'
import { useSession } from 'next-auth/react'
import React from 'react'

const AddQuote = () => {
  const session = useSession()
  const userId = session?.data?.user.name

  return (
    <div className='max-w-2xl mx-auto px-3 pt-10 pb-20'>
      <div className='mb-6'>
        <h1 className='font-semibold text-indigo-700 text-2xl'>
          Ajouter un nouveau Ohabolana:
        </h1>
        <p className='text-sm text-gray-500 font-medium'>
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <AddQuoteForm userId={userId} />
    </div>
  )
}

export default AddQuote