import CardOhabolana from '@/components/CardOhabolana'
import React from 'react'
import { getQuotesByUserId } from '@/lib/data'
import UserInfo from '@/components/UserInfo'


export const metadata = {
  title: 'Profil',
  description: 'Profil sur Ohabolana Malagasy',
}

const Profil = async ({ searchParams }) => {
  const name = typeof searchParams.name === 'string' ? searchParams.name : undefined
  const quotes = await getQuotesByUserId(name)

  return (
    <div className='container pt-6 pb-20'>

      <UserInfo quotes={quotes} />

      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 pt-8'>
        {quotes?.length == 0 ?
          <div className='container col-span-full'>
            <div className='w-full h-[300px] flex items-center justify-center'>
              <div className='text-base sm:text-xl md:text-2xl text-gray-400 font-semibold'>
                Aucun ohabolana
              </div>
            </div>
          </div>
          :
          quotes?.map((post) => {
            return <CardOhabolana post={post} key={post?._id} />
          })
        }
      </div>

    </div>
  )
}

export default Profil