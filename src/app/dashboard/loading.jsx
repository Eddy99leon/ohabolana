import React from 'react'

const loading = () => {
  return (
    <div className='container'>
      <div className='w-full h-[600px] flex items-center justify-center '>
        <p className="mx-auto inset-0 border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-indigo-600" />
      </div>
    </div>
  )
}

export default loading