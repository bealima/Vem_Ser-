import './App.css';
import SayMyName from './components/SayMyName';
import Personal from './components/Personal';
import List from './components/List';

function App() {
  
  const url = 'https://via.placeholder.com/150';
  const name = 'JOÃOZINHO'
  return (
    <div className="App">
      {/* <SayMyName name="Fernanda"/> */}
      <List/>
    </div>
  )
}

export default App;
