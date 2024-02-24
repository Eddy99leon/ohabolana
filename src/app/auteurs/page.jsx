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
      <div className='min-h-[400px] grid grid-cols-4 gap-4 pt-8'>
        {users.map((user) => {
          return <CardAuteur user={user} key={user.id} />
        })}
      </div>
    </div>
  )
}

export default Auteurs