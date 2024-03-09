"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { RiLoader4Fill } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AddStars = ({idQuote}) => {
    const session = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [note, setNote] = useState(0);
    const [commentaire, setCommentaire] = useState("");
    const [hover, setHover] = useState(null);

    //ajouter un star
    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
            await fetch("/api/stars", {
                method: "POST",
                body: JSON.stringify({
                    star: note,
                    coms: commentaire,
                    quoteId: idQuote,
                    userId: session?.data?.user.name,
                })
            })
        }catch(err){
            console.log(err)
        } finally {
            setLoading(false)
            setNote(0)
            setCommentaire("")
            router.refresh();
        }
    }

  return (
    <div className='bg-white border border-gray-300 hover:shadow-lg p-2'>
        {/* Etoile */}
        <div className='flex items-center gap-3 mb-3'>
            <div className='flex justify-center space-x-2'>
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return(
                        <label key={index}>
                            <input 
                                type="radio" 
                                name="rating" 
                                className='hidden'
                                onClick={() => setNote(currentRating)}
                            />
                            <AiFillStar
                                className={`${currentRating <= (hover || note) ? 'text-indigo-700' : 'text-gray-400'} cursor-pointer text-xl sm:text-2xl md:text-3xl`}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
            <div className='text-center text-base sm:text-lg md:text-xl text-gray-800 font-semibold'>
                ( {note}/5 )
            </div>
        </div>
        {/* commentaire */}
        <div className='mb-1'>
            <textarea 
                name="coms" 
                id='label'
                value={commentaire}
                cols="30" 
                rows="3"
                spellCheck="false"
                placeholder='Commentaire..'
                className='w-full bg-transparent outline-none border border-gray-300 text-gray-500 text-sm sm:text-base font-medium p-2'
                onChange={(e) => setCommentaire(e.target.value)}
            />
        </div>
        {/* button */}
        { session.status === 'authenticated' ? 
            <div className='flex justify-end'>
                <button 
                    className='w-[100px] py-2 bg-indigo-700 text-white text-sm rounded-sm'
                    onClick={handleClick}
                >
                    {loading ? 
                        <div className='flex justify-center'>
                            <RiLoader4Fill className='animate-spin text-xl' />
                        </div>
                        : 
                        "Publier"
                    }
                </button>
            </div> 
                : 
            <div className='text-center text-sm sm:text-base font-medium text-gray-500'>
                <Link 
                    href="/profil/login"
                    className='text-indigo-600 font-bold mr-1 hover:underline '
                >
                    Se connecter
                </Link>
                pour donner ton avis.
            </div>
        }
    </div>
  )
}

export default AddStars