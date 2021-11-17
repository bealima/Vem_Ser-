import {useContext} from "react"
import {CountContext} from "../../Context/CounterContext"


function Counter (){

  const {count, setCount} = useContext(CountContext)
  return(
    <>
    <p>Contador: {count}</p>
    <button type="button" onClick={() => setCount(count + 1 )}>Incrementar</button>
    <button type="button" onClick={() => setCount(count - 1 )}>Decrementar</button>
    </>

  );
}

export default Counter;