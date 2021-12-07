import api from '../../api';

export const handleLogin = async(values, dispatch, navigate) =>{
  
  const {data} = await api.post('/auth', values);
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

export const handleLoading =(valorLoading, dispatch) => {
  const setLoading ={
    type: 'SET_LOADING',
    loading: valorLoading
  }
  dispatch(setLoading)
}



