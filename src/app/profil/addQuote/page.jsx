"use client"
import AddQuoteForm from '@/components/AddQuoteForm'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const AddQuote = () => {
  const session = useSession()
  const router = useRouter()
  const userId = session?.data?.user.name

  if (session.status === 'unauthenticated') {
    router?.push('/profil/login');
  }

  if (session.status === 'authenticated') {
    return (
      <div className='max-w-2xl mx-auto px-3 pt-6 sm:pt-10 pb-20'>
        <div className='mb-6'>
          <h1 className='font-semibold text-indigo-700 text-lg sm:text-xl md:text-2xl'>
            Ajouter un nouveau Ohabolana:
          </h1>
          <p className='text-xs sm:text-sm text-gray-500 font-medium'>
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

  return (
    <div className='container'>
      <div className='w-full h-[600px] flex items-center justify-center '>
        <p className="mx-auto inset-0 border-gray-300 h-12 sm:h-16 w-12 sm:w-16 animate-spin rounded-full border-8 border-t-indigo-600" />
      </div>
    </div>
  )
}

export default AddQuote