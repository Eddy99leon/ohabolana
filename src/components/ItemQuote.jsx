import React from 'react'
import { MdDelete } from "react-icons/md";

const ItemQuote = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            ohabolana titre
        </div>
        <div>
            Categorie
        </div>
        <div>
            Auteurs
        </div>
        <div>
            <button>
                <MdDelete className='text-xl' />
            </button>
        </div>
    </div>
  )
}

export default ItemQuote