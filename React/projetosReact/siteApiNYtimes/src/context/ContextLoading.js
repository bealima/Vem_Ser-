import { createContext, useState } from "react";

const ContextLoading= createContext()

function LoadingProvider ({children}){
  const[loading, setLoading] = useState(false)
  return(
    <ContextLoading.Provider value={{loading, setLoading}}>
      {children}
    </ContextLoading.Provider>
  )
}
export {LoadingProvider, ContextLoading}
