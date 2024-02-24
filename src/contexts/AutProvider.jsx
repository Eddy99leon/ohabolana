"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AutProvider = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AutProvider