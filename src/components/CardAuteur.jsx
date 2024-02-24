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
            className='flex items-center bg-white space-x-4 py-2 px-4 border border-gray-300 hover:shadow-lg hover:border-gray-400'
        >
            <div className=' rounded-full mr-1 overflow-hidden border-4 border-gray-300'>
                <Image src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user?.name}`} width={70} height={70} alt='avatar' />
            </div>
            <div>
                <h1 className='font-semibold text-indigo-800'>
                    {user?.name}
                </h1>
                <p className='text-sm text-gray-400 font-semibold'>
                    {userPosts?.length} ohabolana
                </p>
            </div>
        </Link>
    </div>
  )
}

export default CardAuteur