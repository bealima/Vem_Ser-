import {useContext} from "react";
import {TextoContext} from "../../Context/TextoContext"


function Texto (){

  const {setTexto} = useContext(TextoContext)

  return(
    <div>
      <div>
        <label htmlFor="texto">Digite um texto:</label>
        <input type="text"  onChange={(e) => setTexto(e.target.value)}/>
      </div>
    </div>
  );
}

export default Texto;