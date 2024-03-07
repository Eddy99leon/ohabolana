import React from 'react'
import Link from 'next/link'

const CardSimulaire = ({quote}) => {
  return (
    <div>
        <Link 
            href={`/${quote?.id}`}
            className='flex items-center bg-white p-4 border border-gray-300 hover:shadow-lg'
        >
            <div className='font-medium text-sm md:text-base text-gray-500'>
              <span className='text-indigo-600 text-base sm:text-lg font-bold mr-1'>
                "
              </span>
              {quote?.quote}
            </div>
        </Link>
    </div>
  )
}

export default CardSimulaire