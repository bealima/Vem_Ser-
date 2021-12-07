import styles from '../../components/navBar/NavBar.module.css';
import { connect } from 'react-redux';
import { handleLogout } from '../../store/actions/AuthActions';
import { useNavigate } from 'react-router';

const NavBar = ({auth, dispatch})=> {

  const navigate = useNavigate()

  return(
    <nav className={styles.navBar}>
      <ul>
        <li><a href='/login'>Login</a></li>
        <li><a href='/pessoa'>Pessoa</a></li>
        <li><a href='/endereco'>Endereço</a></li>
      </ul>
      {auth.auth && <button type='button' onClick={()=> {handleLogout(dispatch, navigate)}}>Sair</button>}
    </nav>
  );
}

const mapStateToProps = state =>({
    auth: state.authReducer.auth,
  // listPessoas: state.pessoasReducer.listPessoas
})

export default connect(mapStateToProps) (NavBar);