import { createContext, useState } from "react";

const ContextSetores= createContext();

function SetorProvider({children}){

  const apiKey = 'qlm7CzLy8bgKtDt0nxsfu7YFz2965Vn4'
  return(
    <ContextSetores.Provider value={{apiKey}}>
      {children}
    </ContextSetores.Provider>
      
    
  );
}

export {SetorProvider, ContextSetores};