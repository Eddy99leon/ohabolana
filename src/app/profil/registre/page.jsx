"use client"
import Image from 'next/image'
import login from "../../../../public/login2.jpg"
import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { CgLock, CgProfile } from "react-icons/cg";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { RiLoader4Fill } from 'react-icons/ri'


const Registre = () => {

  const [ err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const session = useSession();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const picture = e.target[3].value
    setLoading(true)
    try{
      const res = await fetch("/api/auth/registre",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          picture,
        })
      })
      res.status === 201 && router.push("/profil/login?success=Account has been created");
    }catch(err){
      setErr(true)
    } finally {
      setLoading(false)
    }
  }

  if (session.status === 'authenticated') {
    router?.push('/profil');
  }

  if(session.status === "unauthenticated"){
    return (
      <div className='max-w-5xl mx-auto px-3 pt-10 sm:pt-15 md:pt-20 pb-20'>
        <div className='grid grid-cols-2 items-center justify-items-center'>

          {/* section gauche: formulaire */}
          <form onSubmit={handleSubmit} className='max-w-[420px] w-full col-span-2 md:col-span-1'>
            {/* titre */}
            <div className='mb-3'>
              <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl text-indigo-800 mb-1'>
                Créer un compte,
              </h1>
            </div>
            {/* separateur */}
            <div className='relative font-semibold mb-6'>
              <hr className='h-1 w-full bg-gray-300' />
              <div className='absolute text-xs md:text-sm text-gray-500 -mt-3 bg-gray-50 pr-2'>
                Continu avec Email
              </div>
            </div>
            {/* formulaire */}
            <div className='space-y-4 mb-7'>
              {/* pseudo */}
              <div className='relative w-full h-[50px]'>
                <div className='absolute flex items-center left-0 h-full px-3'>
                  <CgProfile className='text-xl text-gray-500' />
                </div>
                <input 
                  type="text"
                  spellCheck="false"
                  className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm md:text-base pl-10'
                  placeholder='Pseudo'
                  pattern="^.{4,}$"
                  title="Le pseudo doit contenir au moins 4 caractères."
                  required
                />
              </div>
              {/* email */}
              <div className='relative w-full h-[50px]'>
                <div className='absolute flex items-center left-0 h-full px-3'>
                  <HiOutlineMail className='text-xl text-gray-500' />
                </div>
                <input 
                  type="email" 
                  spellCheck="false"
                  className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm md:text-base pl-10'
                  placeholder='Email'
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
              </div>
              {/* mot de passe */}
              <div className='relative w-full h-[50px]'>
                <div className='absolute flex items-center left-0 h-full px-3'>
                  <CgLock className='text-xl text-gray-500' />
                </div>
                <input 
                  type="password"
                  className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm md:text-base pl-10'
                  placeholder='Mot de passe'
                  pattern="^.{3,}$"
                  title="Le pseudo doit contenir au moins 3 caractères."
                  required
                />
              </div>
            </div>
            
            {/* button */}
            <div className='mb-6'>
              <button className='w-full bg-indigo-700 text-sm text-white font-medium py-2'>
                {loading ? 
                  <div className='flex justify-center'>
                    <RiLoader4Fill className='animate-spin text-xl sm:text-2xl' />
                  </div>
                    : 
                  "Registre"
                }
              </button>
            </div>
            {/* pas encore de compte */}
            <div className='text-center text-sm'>
              <p className='font-semibold text-xs sm:text-sm text-gray-500'>
                Vous avez déjà un compte?
                <Link 
                  href="/profil/login"
                  className='font-bold text-indigo-600 ml-1'
                >
                  Se connecter.
                </Link>
              </p>
            </div>
          </form>

          {/* section droite: image */}
          <div className='hidden md:block'>
            <Image src={login} width={400} height={400} priority={true} alt='photo de login' />
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='w-full h-[600px] flex items-center justify-center '>
        <p className="mx-auto inset-0 border-gray-300 h-12 sm:h-16 w-12 sm:w-16 animate-spin rounded-full border-8 border-t-indigo-600" />
      </div>
    </div>
  )
}

export default Registre