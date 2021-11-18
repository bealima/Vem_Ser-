import { createContext, useContext } from 'react';
import './App.css';

const ContextTheme = createContext();

function App() {
  const theme ='dark';
  return (
    <div className="App">
      <header className="App-header">
        <ContextTheme.Provider value={{theme}}>
          <Login/>
        </ContextTheme.Provider>
      </header>
    </div>
  );
}

function Login(){

  return(
    <Button/>
  );
}

function Button(){
  const {theme}= useContext(ContextTheme)
  return(
    <Button>huhh</Button>
  );
}
export default App;
