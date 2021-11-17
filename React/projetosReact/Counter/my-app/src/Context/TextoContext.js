import { createContext, useState } from "react";
export const TextoContext = createContext();

function TextoProvider({children}){

  const[texto, setTexto]= useState('')

  return(

    <TextoContext.Provider value={{texto, setTexto}}>
      {children}
    </TextoContext.Provider>
  );
}

export default TextoProvider;