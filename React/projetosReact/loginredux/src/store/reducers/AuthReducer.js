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
  if (action.type === 'SHOW_LOADER'){
    return{
      ...state,
      auth:{
        ...state.auth,
        loading: true
      }
    }
  }
  if (action.type === 'HIDE_LOADER'){
    return{
      ...state,
      auth:{
        ...state.auth,
        loading: false
      }
    }
  }
  if (action.type === 'SET_AUTH'){
    return{
      ...state,
      auth:{
        ...state.auth,
        auth: true
      }
    }
  }


  return state
}

export default authReducer;