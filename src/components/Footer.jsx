import React from 'react'
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-gray-200'>
      <div className='container flex justify-between py-14'>
        {/* logo */}
        <div>
          <div className='flex items-center mb-2'>
            <FcLightAtTheEndOfTunnel className='text-3xl mr-1' />
            <h1 className='text-xl font-semibold'>
                Ohabolana
            </h1>
          </div>
          <p className='text-sm font-medium text-gray-500'>
            Fanoma ipsum dolor.ipsum soate.
            <br />Lorem, fa nandeha ampiko dolor.
            <br />Nonorata ipsum fampatsiana tsisy.
          </p>
        </div>
        {/* lien */}
        <div>
          <h2 className='font-semibold mb-2'>
            Lien rapide
          </h2>
          <ul className='flex flex-col font-medium text-gray-700'>
            <Link href="/">
              Accueil
            </Link>
            <Link href="/auteurs">
              Auteurs
            </Link>
          </ul>
        </div>
        {/* compte */}
        <div>
          <h1 className='font-semibold  mb-2'>
            Compte
          </h1>
          <ul className='flex flex-col font-medium text-gray-700'>
            <Link href="/profil/registre">
              S'inscrire
            </Link>
            <Link href="/profil/login">
              Se Connecter
            </Link>
          </ul>
        </div>
        {/* securite */}
        <div>
          <h1 className='font-semibold  mb-2'>
            Securite
          </h1>
          <ul className='font-medium text-gray-700'>
            <li className='cursor-pointer'>
              Cookies
            </li>
            <li className='cursor-pointer'>
              Confidentialite
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-300'>
        <div className='container flex justify-between items-center py-6'>
          <h2 className='font-medium'>
            <span className='text-lg mr-1'>©</span>
            2024, 
            <Link href="/dashboard" className='font-semibold mx-1'>
              Eddy Andriamisaina.
            </Link>
            Tous droits réservés.
          </h2>
          <div className='flex items-center space-x-6'>
            <a 
              href="https://web.facebook.com/profile.php?id=100094137014767" 
              target='_blank'
              className='flex items-center cursor-pointer'
            >
              <CiFacebook className='text-2xl mr-1' />
              <span className='font-semibold'>
                Facebook
              </span>
            </a>
            <a 
              href="https://www.linkedin.com/in/eddy-andriamisaina-863431299"
              target='_blank'
              className='flex items-center cursor-pointer'
            >
              <CiLinkedin className='text-2xl mr-1' />
              <span className='font-semibold'>
                Linkedin
              </span>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer