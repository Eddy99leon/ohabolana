import CardOhabolana from '@/components/CardOhabolana'
import Image from 'next/image'
import React from 'react'
import { getQuotesByUserId, getUser } from '@/lib/data'

export async function generateMetadata({ params }) {
  const user = await getUser(params.id)
  return {
    title: user?.name,
    description: "Auteur chez Ohabolana Malagasy",
  }
}

const Auteur = async ({params}) => {

  const user = await getUser(params.id);
  const userPosts = await getQuotesByUserId(user?.name)

  return (
    <div className='container pt-6 pb-20'>
      <div className='flex items-center space-x-4'>
          <div className=' rounded-full mr-1 overflow-hidden border-4 border-gray-300'>
              <Image src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user?.name}`} width={130} height={130} alt='avatar' />
          </div>
          <div>
              <h1 className='font-semibold text-4xl text-indigo-800'>
                  {user?.name}
              </h1>
              <p className='text-2xl text-gray-400 font-semibold'>
                  {userPosts?.length} ohabolana
              </p>
          </div>
      </div>
      <div className='container grid grid-cols-3 gap-6 pt-6'>
        { userPosts?.length == 0 ? 
          <div className='container col-span-full'>
            <div className='w-full h-[300px] flex items-center justify-center'>
              <div className='text-2xl text-gray-400 font-semibold'>
                Aucun ohabolana
              </div>
            </div>
          </div>
          : 
          userPosts?.map((post) => {
            return <CardOhabolana post={post} key={post?.id} />
          })
        }
      </div>
    </div>
  )
}

export default Auteur