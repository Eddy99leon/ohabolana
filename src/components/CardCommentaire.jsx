import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const CardCommentaire = ({star}) => {

  const NbrStar = star?.star

  return (
    <div className='py-4 px-2'>
        <div className='flex justify-between items-center mb-0 sm:mb-1'>
            <div className='flex items-center'>
                <div className='rounded-full mr-2 overflow-hidden border-4 border-gray-300'>
                    <Image src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${star?.userId}`} width={50} height={50} alt='avatar' />
                </div>
                <div>
                    <h2 className='font-semibold text-sm sm:text-base md:text-lg text-indigo-950'>
                        { star?.userId }
                    </h2>
                    <p className='text-gray-500 font-medium text-xs sm:text-sm'>
                        { star?.createdAt.toString().slice(4,16) }
                    </p>
                </div>
            </div>
            <div className="flex space-x-1">
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <AiFillStar
                            key={index}
                            className={`
                                ${ currentRating <= NbrStar ? 'text-indigo-700' : 'text-gray-300' }
                                text-lg sm:text-xl md:text-2xl
                            `}
                        />
                    );
                })}
            </div>
        </div>
        <div className='text-gray-600 font-medium text-xs sm:text-sm md:text-base ml-16'>
            {star?.coms}
        </div>
    </div>
  )
}

export default CardCommentaire