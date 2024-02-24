import React from 'react'
import { MdDelete } from "react-icons/md";

const ItemAuteur = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            Nom
        </div>
        <div>
            Email
        </div>
        <div>
            05
        </div>
        <div>
            <button>
                <MdDelete className='text-xl' />
            </button>
        </div>
    </div>
  )
}

export default ItemAuteur