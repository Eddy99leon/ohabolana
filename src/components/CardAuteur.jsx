import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '@/lib/data'

const CardAuteur = async ({user}) => {
  const posts = await getPosts()
  const userPosts = posts?.filter((post) => post?.userId === user?.name);

  return (
    <div>
        <Link 
            href={`/auteurs/${user?.id}`}
            className='flex items-center bg-white space-x-4 py-2 px-1 sm:px-4 border border-gray-300 hover:shadow-lg hover:border-gray-400'
        >
            <div className=' rounded-full mr-0 sm:mr-1 overflow-hidden w-10 sm:w-50 md:w-70 h-10 sm:h-50 md:h-70'>
                <Image src={`https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name}`} width={70} height={70} alt='avatar' />
            </div>
            <div>
                <h1 className='font-semibold text-indigo-800 text-sm sm:text-base'>
                    {user?.name}
                </h1>
                <p className='text-xs sm:text-sm text-gray-400 font-semibold'>
                    {userPosts?.length} ohabolana
                </p>
            </div>
        </Link>
    </div>
  )
}

export default CardAuteur