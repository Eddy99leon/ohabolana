import AddStars from '@/components/AddStars'
import ShowStars from '@/components/ShowStars'
import Simulaire from '@/components/Simulaire'
import { categoriesToColors } from '@/lib/staticData'
import { getPost } from '@/lib/data'
import React from 'react'
import Commentaire from '@/components/Commentaire'

export async function generateMetadata({ params }) {
  const post = await getPost(params.id)
  return {
    title: post?.quote,
    description: post?.desc,
  }
}

const DetailQuote = async ({params}) => {
  const post = await getPost(params.id);
  const categoryColor = categoriesToColors[post?.category];

  return (
    <div className='max-w-5xl mx-auto px-3 pt-6 pb-20'>

        <div className='flex items-center justify-between'>
          {/* categorie */}
          <div className='text-base sm:text-lg md:text-xl font-semibold text-indigo-950'>
              {post?.category}
          </div>
          {/* affichage d'etoile */}
          <div>
              <ShowStars idQuote={params.id} />
          </div>
        </div>

        {/* Ohabolana */}
        <div 
          style={{ backgroundColor: categoryColor }}
          className='font-semibold text-lg px-4 pt-8 pb-16 flex items-center justify-center'
        >
            <div className='w-[80%]'>
              <p className='text-2xl sm:text-4xl md:text-5xl font-semibold text-indigo-700'>
                  "
              </p>
              <p className='w-full text-center text-lg sm:text-2xl md:text-3xl'>
                  {post?.quote}
              </p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 my-8'>
          {/* left section */}
          <div className='md:col-span-3'>
            <div>
              <h1 className='text-xl sm:text-2xl md:text-4xl text-indigo-700 font-bold mb-1 sm:mb-2 md:mb-4'>
                Explication:
              </h1>
              <p className='text-justify text-gray-600 font-medium text-sm sm:text-base md:text-lg'>
                {post?.desc}
              </p>
            </div>
          </div>
          {/* right section */}
          <div className='md:col-span-2'>
            <div className='mb-6'>
              <h1 className='text-base md:text-lg text-indigo-950 font-semibold mb-1'>
                Donner ton avis:
              </h1>
              <AddStars idQuote={params.id} />
            </div>
            <div>
              <h1 className='text-base md:text-lg text-indigo-950 font-semibold mb-1'>
                  Simulaire:
              </h1>
              <Simulaire post={post}/>
            </div>
          </div>
        </div>

        <div>
          <Commentaire idQuote={params.id} />
        </div>

    </div>
  )
}

export default DetailQuote