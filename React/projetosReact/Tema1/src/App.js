import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import PageFooter from './components/PageFooter';
import Map from './components/Map';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <Map/>
      <PageFooter/>
    </div>
  )
}

export default App;
