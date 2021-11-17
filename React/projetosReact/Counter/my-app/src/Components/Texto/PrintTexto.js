import { useContext } from "react";
import {TextoContext} from "../../Context/TextoContext"

const PrintTexto = ()=> {
  const {texto}= useContext(TextoContext)
  return(
    <div>
      <p>{texto}</p>
    </div>
  );
}

export default PrintTexto;