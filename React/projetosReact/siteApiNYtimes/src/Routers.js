import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
  
} from 'react-router-dom';

import Header from './Components/header/Header';
import Home from './pages/Home' 
import Ciencia from './pages/Ciencia' 
import Mundo from './pages/Mundo' 
import Politica from './pages/Politica' 
import Saude from './pages/Saude' 

function Routers(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/ciencia' element={<Ciencia/>}/>
        <Route path='/mundo' element={<Mundo/>}/>
        <Route path='/politica' element={<Politica/>}/>
        <Route path='/saude' element={<Saude/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;