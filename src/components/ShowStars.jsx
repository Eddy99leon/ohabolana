import React from 'react'
import { getStarsByQuotesId } from '@/lib/data';
import { AiFillStar } from 'react-icons/ai';

const ShowStars = async ({idQuote}) => {
  const stars = await getStarsByQuotesId(idQuote)
  
  // calcul de la moyenne
  let SommeStars = stars?.length > 0 ? stars?.reduce((acc, star) => acc + star.star, 0) : 0;
  let Moyenne = stars?.length > 0 ? (SommeStars / stars?.length).toFixed(2) : "0.00";

  return (
    <div className='flex items-center gap-1 sm:gap-3'>
      <div className="flex space-x-1">
        {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
                <AiFillStar
                    key={index}
                    className={`
                        ${ currentRating <= Moyenne ? 'text-indigo-700' : 'text-gray-300' } 
                        text-lg sm:text-xl md:text-2xl
                    `}
                />
            );
        })}
      </div>
      <div className='text-center text-sm sm:text-base md:text-lg text-gray-800 font-semibold'>
        ({ Moyenne })
      </div>
    </div>
  )
}

export default ShowStars