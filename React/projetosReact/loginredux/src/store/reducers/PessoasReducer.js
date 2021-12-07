const INITIAL_STATE={
  listPessoas:[],
  isEdicao: false,
  initialValues: {
    nome: 'teste',
    cpf: 0,
    dataNascimento: '',
    email:'teste',
    id: 0
  }
}

const pessoasReducer = (state= INITIAL_STATE, action) => {
  
  if (action.type === 'GET_LIST') {
    return{
      ...state,
      listPessoas: action.listPessoas
  
    }
  }
  if (action.type === 'SET_EDIT') {
    console.log(action)
    return{
      ...state,
      isEdicao: action.isEdicao,
      initialValues: action.initialValues
    }
  }

  return state
}

export default pessoasReducer ;