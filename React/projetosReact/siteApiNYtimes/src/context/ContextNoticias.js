import { createContext, useState } from "react";

const ContextNoticias= createContext()

function NoticiasProvider ({children}){
  const[noticias, setNoticias] = useState([])
  return(
    <ContextNoticias.Provider value={{noticias, setNoticias}}>
      {children}
    </ContextNoticias.Provider>
  )
}
export {NoticiasProvider, ContextNoticias}
