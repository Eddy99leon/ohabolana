import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categoriesToColors } from '@/lib/staticData'

const CardOhabolana = async ({post}) => {

  const categoryColor = categoriesToColors[post?.category];

  return (
    <div
        className='max-w-[400px] w-full bg-white shadow-md hover:shadow-xl px-3 py-4 border border-gray-300 hover:border-gray-400'
    >
        <Link 
            href={`/${post?._id}`}
            style={{ backgroundColor: categoryColor }}
            className={`font-semibold text-lg px-4 pt-8 pb-12 w-full min-h-[200px] flex items-center rounded-sm`}
        >
            <div className='w-full'>
                <p className='text-3xl font-semibold text-indigo-700'>
                    "
                </p>
                <div className='w-full text-center'>
                    {post?.quote}
                </div>
            </div>
        </Link>
        <div className='flex justify-between items-center pt-4'>
            <Link
                href="/auteurs"
                className='flex items-center'
            >
                <div className=' rounded-full mr-1 overflow-hidden border-4 border-gray-300'>
                    <Image src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${post?.userId}`} width={40} height={40} alt='avatar' />
                </div>
                <div>
                    <h2 className='text-sm font-semibold text-indigo-900'>
                        {post?.userId}
                    </h2>
                    <p className='text-sm font-semibold text-gray-400'>
                        {post?.createdAt.toString().slice(4,16)}
                    </p>
                </div>
            </Link>
            <Link 
                href={`/${post?._id}`}
                className='bg-indigo-200 text-indigo-700 text-sm font-semibold py-1 px-2'
            >
                {post?.category}
            </Link>
        </div>
    </div>
  )
}

export default CardOhabolana