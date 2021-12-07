import { useEffect } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { createPessoa, deletePessoa, getListPessoas, formEdicao, editarPessoa} from '../store/actions/PessoasActions';
import styles from './Pessoa.module.css'
import moment from "moment";
import {showLoader, hideLoader, setAuth } from "../store/actions/AuthActions";


const Pessoa =({listPessoas,initialValues,isEdicao, loading, auth, dispatch}) =>{
  
  
  useEffect( () => {

    // console.log('oi')
    // showLoader(dispatch)
    
    getListPessoas(dispatch)/*.then(res =>{
      console.log('tchau')
      hideLoader(dispatch)
    })*/    
    
  }, []);

 

  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      createPessoa(values, dispatch)
    },
  });
   
  return(

    <div>
        <div className='containerContent'>
        <div  className={styles.pessoa}>
          <form onSubmit={formik.handleSubmit}>
            <div>
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              name="nome"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nome}
            />
            </div>
            <div>
            <label htmlFor="cpf">CPF:</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cpf}
            />
            </div>
            <div>
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dataNascimento}
            />
            </div>
            <div>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            </div>
            <div>
            {!isEdicao && <button type="submit">Cadastrar</button>}
            {isEdicao && <button type="button" onClick={()=> editarPessoa(formik.values, dispatch)}>Salvar</button>}
            </div>
          </form>  
    
          <div>
            { listPessoas.map(pessoa =>(
              <div  key={pessoa.idPessoa} className={styles.card}> 
                <p>{pessoa.nome}</p>
                <p>{pessoa.cpf}</p>
                <p>{moment(pessoa.dataNascimento).format("DD/MM/YYYY")}</p>
                <p>{pessoa.email}</p>
                <div>
                  <button onClick={() => deletePessoa(pessoa.idPessoa, dispatch)}>Deletar</button>
                  
                  <button onClick={() => formEdicao(pessoa, dispatch,formik)}>Editar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    
  );
}


const mapStateToProps = state =>({
  listPessoas: state.pessoasReducer.listPessoas,
  initialValues: state.pessoasReducer.initialValues,
  isEdicao: state.pessoasReducer.isEdicao,
  auth: state.authReducer.auth
})

export default connect(mapStateToProps) (Pessoa);