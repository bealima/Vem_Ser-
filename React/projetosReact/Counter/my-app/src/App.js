import Texto from "./Components/Texto/Texto";
import PrintTexto from "./Components/Texto/PrintTexto";

import TextoProvider from "./Context/TextoContext";

function App() {

  return (
    <div >
      <TextoProvider>
        <Texto/>
        <br />
        <PrintTexto/>
      </TextoProvider>
    </div>
  );
}

export default App;
