"use client"
import React, {createContext} from "react"
import { useSession } from 'next-auth/react'


export const UserContext = createContext()

const UserProvider = ({children}) => {
    const session = useSession()
    
    return (
      <UserContext.Provider value={{ session }}>
        {children}
      </UserContext.Provider>
    )
}

export default UserProvider;