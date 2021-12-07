import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Pessoa from './pages/Pessoa';
import Endereco from './pages/Endereco';
import NotFound  from './pages/NotFound';
import Loading from "./components/loading/Loading";
import { setAuth } from "./store/actions/AuthActions";
import { useEffect } from "react";

function Routers({auth,dispatch}) {

  const localToken = localStorage.getItem('token')
  
  useEffect (()=>{
    if (localToken){
      console.log('token')
      setAuth(dispatch)
    }
    console.log(auth.auth)
  
    if (auth.loading){
      return <Loading/>
    }
  },[])
  


  return (
    <BrowserRouter>
      <Header />
      {auth.auth && (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pessoa' element={<Pessoa />} />
          <Route path='/endereco' element={<Endereco/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      )
      }
      {!auth.auth &&(
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      
      )}
      
      <Footer />
    </BrowserRouter>
  )
}

const mapStateToProps = state =>({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps) (Routers);