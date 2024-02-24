import { getStarsByQuotesId } from '@/lib/data'
import React from 'react'
import CardCommentaire from './CardCommentaire'

const Commentaire = async ({idQuote}) => {

  const stars = await getStarsByQuotesId(idQuote)
  // console.log(stars)

  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-3 '>
          <h1 className='text-4xl text-indigo-700 font-bold mb-4'>
            Commentaire:
          </h1>
          <div className='divide-y-2 text-gray-700'>
            {stars?.map((star) => {
              return <CardCommentaire key={star?.id} star={star} />
            })}
          </div>
        </div>
    </div>
  )
}

export default Commentaire