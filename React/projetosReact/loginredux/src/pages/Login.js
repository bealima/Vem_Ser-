import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { handleLogin} from '../store/actions/AuthActions';
import styles from './Login.module.css'
import { useNavigate } from 'react-router';


const Login = ({auth, dispatch}) => {
const navigate = useNavigate()

  
  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate)
    },
  });

  return (
    <div className='containerContent'>
      <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
          <label htmlFor="usuario">Usuário: </label>
          <input
            id="usuario"
            name="usuario"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.usuario}
          />
          </div>
          <div>
          <label htmlFor="senha">Senha: </label>
          <input
            id="senha"
            name="senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.senha}
          />
          </div>
          <div>
          <button type="submit">Submit</button>
          </div>
        </form>  
      </div>
    </div>
  )
}
const mapStateToProps = state =>({
})

export default connect(mapStateToProps) (Login);