import CardAuteur from '@/components/CardAuteur'
import Search from '@/components/Search';
import { getUsers } from '@/lib/data';
import React from 'react'

export const metadata = {
  title: 'Auteurs',
  description: 'Auteurs des Ohabolana Malagasy',
}

const Auteurs = async ({searchParams}) => {
  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  const users = await getUsers(search)

  return (
    <div className='container pt-6 pb-20'>
      {/* Recherche */}
      <Search />
      {/* auteurs */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 pt-6 sm:pt-8'>
        { users?.length === 0 ? 
            <div className="w-full min-h-[200px] grid-cols-2 sm:grid-cols-3 md:col-span-4 lg:col-span-5 flex justify-center items-center">
              <div className="text-center text-base sm:text-xl md:text-2xl text-gray-400 font-semibold">
                Aucun Auteur correspond à cette <br />recherche.
              </div>
            </div>
              :
            users.map((user) => {
              return <CardAuteur user={user} key={user.id} />
            })
        }
      </div>
    </div>
  )
}

export default Auteurs