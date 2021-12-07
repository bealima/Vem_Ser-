const INITIAL_STATE={
  auth:{
    token: '',
    auth: false,
    loading: false
  }
}

const authReducer = (state= INITIAL_STATE, action) => {

  // console.log(state.auth.auth)
  if (action.type === 'SET_LOGADO'){
    return{
      ...state,
      auth: {
        ...state.auth,
        token: action.token,
        auth: action.auth,
        loading: action.loading,
      }
    }

  } 
  if (action.type === 'SET_DESLOGADO'){
    return{
      ...state,
      auth:{
        ...state.auth,
        token: action.token,
        auth: action.auth,
        loading: action.loading,
      }
    }
  }
  if (action.type === 'SET_LOADING'){
    return{
      ...state,
      auth:{
        ...state.auth,
        loading: action.loading
      }
    }
  }
  return state
}

export default authReducer;