"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const UserInfo = ({quotes}) => {
  const router = useRouter()
  const session = useSession()
  const name = session?.data?.user.name

  useEffect(() => {
    router.push(`/profil?name=${name}`);
  }, [name, router])

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
            <div className=' rounded-full mr-1 overflow-hidden border-4 border-gray-300'>
                <Image src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${name}`} width={130} height={130} priority={true} alt='avatar' />
            </div>
            <div>
                <h1 className='font-semibold text-2xl text-indigo-800'>
                  {session?.data?.user.name}
                </h1>
                <p className='text-lg text-gray-500 font-semibold'>
                  {session?.data?.user.email}
                </p>
                <p className='text-lg text-gray-400 font-semibold'>
                    {quotes?.length} ohabolana
                </p>
            </div>
        </div>
        <div>
            <Link
                href='/profil/addQuote'
                className='bg-indigo-700 text-white font-semibold text-xl px-8 py-4'
            >
                Créer
            </Link>
        </div>
    </div>
  )
}

export default UserInfo