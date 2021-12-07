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

function Routers({auth}) {

  // if (auth.loading){
  //   return <h1>Loading..</h1>
  // }

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