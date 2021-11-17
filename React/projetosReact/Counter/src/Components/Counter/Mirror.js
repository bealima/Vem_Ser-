import {useContext} from "react";

import {CountContext} from "../../Context/CounterContext"

const Mirror = () => {
  const {count} = useContext(CountContext);
    return(
    <div>
      <p>Espelho: {count}</p>
    </div>
  );
}

export default Mirror;