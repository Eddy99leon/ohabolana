"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import login from "../../../../public/login2.jpg"
import github from "../../../../public/github1.png"
import google from "../../../../public/google.png"
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { RiLoader4Fill } from 'react-icons/ri'


const Login = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    setLoading(true)
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (!response.error) {
        router.push('/profil')
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      setError('An error occurred')
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
                Connecter à votre compte,
              </h1>
              <h2 className='font-semibold text-xs sm:text-sm md:text-base text-gray-500'>
                Choisi votre méthode de connection:
              </h2>
            </div>
            {/* methode reseau sociaux */}
            <div className='flex items-center justify-between gap-2 w-full mb-8'>
              <div 
                onClick={() => signIn("google")}
                className='flex items-center gap-2 font-semibold text-sm sm:text-base border border-gray-200 py-3 px-10 cursor-pointer hover:shadow-md hover:border-gray-300'
              >
                <Image src={google} width={30} height={30} alt='google connecte' className='w-[20px] sm:w-[30px]' />
                Google
              </div>
              <div 
                onClick={() => signIn("github")}
                className='flex items-center gap-2 font-semibold text-sm sm:text-base  border border-gray-200 py-3 px-10 cursor-pointer hover:shadow-md hover:border-gray-300'
              >
                <Image src={github} width={30} height={30} alt='facebook connecte' className='w-[20px] sm:w-[30px]' />
                Github
              </div>
            </div>
            {/* separateur */}
            <div className='relative font-semibold mb-6'>
              <hr className='h-1 w-full bg-gray-300' />
              <div className='absolute text-xs md:text-sm text-gray-500 -mt-3 bg-gray-50 pr-2'>
                Continu avec Email
              </div>
            </div>
            {/* formulaire */}
            <div className='space-y-4 mb-4'>
              <div className='relative w-full h-[50px]'>
                <div className='absolute flex items-center left-0 h-full px-3'>
                  <HiOutlineMail className='text-xl text-gray-500' />
                </div>
                <input 
                  type="email" 
                  spellCheck="false"
                  className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm md:text-base pl-10'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='relative w-full h-[50px]'>
                <div className='absolute flex items-center left-0 h-full px-3'>
                  <CgLock className='text-xl text-gray-500' />
                </div>
                <input 
                  type="password"
                  className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium text-sm md:text-base pl-10'
                  placeholder='Mot de passe'
                  required
                />
              </div>
              <div className='text-end'>
                <p className='text-sm font-semibold text-indigo-600 cursor-pointer'>
                  Mot de passe oublier?
                </p>
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
                  "Se connecter"
                }
              </button>
            </div>
            {/* pas encore de compte */}
            <div className='text-center text-xs sm:text-sm'>
              <p className='font-semibold text-gray-500'>
                Vous n'avez pas un compte?
                <Link 
                  href="/profil/registre"
                  className='font-bold text-indigo-600 ml-1'
                >
                  Créer un compte.
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

export default Login