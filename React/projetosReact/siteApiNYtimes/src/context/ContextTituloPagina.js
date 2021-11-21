import { createContext, useState } from "react";

const ContextTituloPagina= createContext()

function TituloPaginaProvider ({children}){
  const[tituloPagina, setTituloPagina] = useState([])
  return(
    <ContextTituloPagina.Provider value={{tituloPagina, setTituloPagina}}>
      {children}
    </ContextTituloPagina.Provider>
  )
}
export {TituloPaginaProvider, ContextTituloPagina}
