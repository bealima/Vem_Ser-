import api from "../../api";


// GET
export const getListPessoas = async (dispatch) =>{

  const token = localStorage.getItem('token'); 
  api.defaults.headers.common['Authorization'] = token;
   
  const {data} = await api.get('/pessoa');

  if (data){
    dispatch({
      type: 'GET_LIST',
      listPessoas: data
    })
    // console.log(dispatch.listPessoas)
  } else {
      console.log('get não autorizado')
  }
}

//CREATE
export const createPessoa = async(values, dispatch) =>{
  await api.post('/pessoa', values)
  getListPessoas(dispatch)
 
}

//DELETE
export const deletePessoa = async (idPessoa, dispatch) =>{
  
  await api.delete('/pessoa/' + idPessoa)
  getListPessoas(dispatch)

}

//DADOS EDIÇÃO NO FORM
export const formEdicao =  async(pessoa, dispatch, formik) =>{
  console.log('função formEdicao foi chamada')
  
  const dadosForm=({
    type: 'SET_EDIT',
    isEdicao: true, 
    initialValues:{
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      dataNascimento: pessoa.dataNascimento,
      email: pessoa.email,
      id: pessoa.idPessoa
      
    }
  })
  dispatch(dadosForm)
  formik.setValues(dadosForm.initialValues)
  window.scrollTo(0, 0);
}

export const editarPessoa = async(values,dispatch)=>{

  api.put(`/pessoa/${values.id}`, values)
  getListPessoas(dispatch)
}
