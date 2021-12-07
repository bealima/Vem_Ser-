import api from '../../api';

export const handleLogin = async(values, dispatch, navigate) =>{
  
 
  const {data} = await api.post('/auth', values)

  if (data){
    localStorage.setItem('token', data);
    api.defaults.headers.common['Authorization'] = data;
    const logado = {
      type:'SET_LOGADO',
      token: data,
      auth: true,
      loading: false
    }
    dispatch(logado);    

    navigate('/pessoa')
  }else {
    alert('Deu erro no login')
  }
}

export const handleLogout = async(dispatch, navigate) => {
  localStorage.removeItem('token');
  api.defaults.headers.common['Authorization'] = '';

  const deslogado = {
    type:'SET_DESLOGADO',
    token: '',
    auth: false,
    loading: false
  }
  dispatch(deslogado);
  navigate('/login')
}

export const showLoader = (dispatch) =>{
  dispatch({
    type:'SHOW_LOADER'
  })
}

export const hideLoader = (dispatch) =>{
  dispatch({
    type:'HIDE_LOADER'
  })
}

export const setAuth = (dispatch) =>{
  dispatch({
    type:'SET_AUTH'
  })
}

