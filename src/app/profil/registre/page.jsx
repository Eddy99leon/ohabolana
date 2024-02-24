"use client"
import Image from 'next/image'
import login from "../../../../public/login2.jpg"
import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { CgLock, CgProfile } from "react-icons/cg";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// export const metadata = {
//   title: "S'inscrire",
//   description: "S'inscrire à Ohabolana Malagasy",
// }

const Registre = () => {

  const [ err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
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

  return (
    <div className='max-w-5xl mx-auto px-3 pt-16 pb-20'>
      <div className='grid grid-cols-2 items-center justify-items-center'>

        {/* section gauche: formulaire */}
        <form onSubmit={handleSubmit} className='max-w-[420px] w-full'>
          {/* titre */}
          <div className='mb-3'>
            <h1 className='font-semibold text-3xl text-indigo-800 mb-1'>
              Créer un compte,
            </h1>
          </div>
          {/* separateur */}
          <div className='relative font-semibold mb-6'>
            <hr className='h-1 w-full bg-gray-300' />
            <div className='absolute text-sm text-gray-500 -mt-3 bg-gray-50 pr-2'>
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
                className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-10'
                placeholder='Pseudo'
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
                className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-10'
                placeholder='Email'
              />
            </div>
            {/* mot de passe */}
            <div className='relative w-full h-[50px]'>
              <div className='absolute flex items-center left-0 h-full px-3'>
                <CgLock className='text-xl text-gray-500' />
              </div>
              <input 
                type="password"
                className='absolute w-full h-full bg-transparent outline-none border border-gray-300 text-gray-500 font-medium pl-10'
                placeholder='Mot de passe'
              />
            </div>
            {/* photo de profil */}
            <div className='bg-transparent border border-gray-300 text-gray-500 font-medium py-4'>
              <label 
                htmlFor="uploadFile"
                className="bg-white text-gray-400 cursor-pointer mx-auto "
              >
                <div className='flex items-center justify-center'>
                  <AiOutlineCloudUpload className='text-gray-400 text-4xl mr-2' />
                  <p>
                    Photo de profil
                  </p>
                </div>
                <p className='text-center'>
                  ( facultatif )
                </p>
                <input type="file" id='uploadFile' className="hidden" />
              </label>
            </div>
          </div>
          
          {/* button */}
          <div className='mb-6'>
            <button className='w-full bg-indigo-700 text-sm text-white font-medium py-2'>
              S'inscrire
            </button>
          </div>
          {/* pas encore de compte */}
          <div className='text-center text-sm'>
            <p className='font-semibold text-gray-500'>
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
        <div>
          <Image src={login} width={400} height={400} priority={true} alt='photo de login' />
        </div>

      </div>
    </div>
  )
}

export default Registre