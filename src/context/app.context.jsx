import { createContext } from "react";
import React, { useState } from 'react'
export const AppContext = createContext()

export const AppContextProvider = (props) => {
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  const value = {
    backendUrl,
    isLoggedin, setIsLoggedin,
    userData, setUserData
  }

  return (
    <AppContextProvider value={value}>
      {props.children}
    </AppContextProvider>
  )
} 