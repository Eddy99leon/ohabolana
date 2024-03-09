"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserInfo = ({quotes}) => {
  const router = useRouter()
  const session = useSession()
  const name = session?.data?.user.name


  if (session.status === 'unauthenticated') {
    router?.push('/profil/login');
  }

  if (session.status === 'authenticated') {

    if(name == undefined){
      router.push(`/profil`);
    }else{
      router.push(`/profil?name=${name}`);
    }

    return (
      <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
              <div className=' rounded-full mr-0 md:mr-1 overflow-hidden w-[50px] md:w-[130px] h-[50px] md:h-[130px]'>
                  <Image src={`https://api.dicebear.com/7.x/bottts/svg?seed=${name}`} width={130} height={130} priority={true} alt='avatar' />
              </div>
              <div>
                  <h1 className='font-semibold text-base sm:text-xl md:text-2xl text-indigo-800'>
                    {session?.data?.user.name}
                  </h1>
                  <p className='text-xs sm:text-base md:text-lg text-gray-500 font-semibold'>
                    {session?.data?.user.email}
                  </p>
                  <p className='text-xs sm:text-base md:text-lg text-gray-400 font-semibold'>
                      {quotes?.length} ohabolana
                  </p>
              </div>
          </div>
          <div>
              <Link
                  href='/profil/addQuote'
                  className='bg-indigo-700 text-white font-semibold text-sm sm:text-base md:text-xl px-4 sm:px-8 py-2 sm:py-4'
              >
                  Créer
              </Link>
          </div>
      </div>
    )
  }

  return(
    <div className='container'>
      <div className='w-full h-[600px] flex items-center justify-center '>
        <p className="mx-auto inset-0 border-gray-300 h-12 sm:h-16 w-12 sm:w-16 animate-spin rounded-full border-8 border-t-indigo-600" />
      </div>
    </div>
  )
}

export default UserInfo