import { useContext, useEffect } from 'react';
import api from '../api';
import Card from '../Components/card/Card';
import Loading from '../Components/loading/Loading';
import { ContextLoading } from '../context/ContextLoading';
import { ContextNoticias } from '../context/ContextNoticias';
import { ContextSetores } from '../context/ContextSetores';
import { ContextTituloPagina } from '../context/ContextTituloPagina';


const Ciencia = () => {
  
  const {apiKey} = useContext(ContextSetores);
  const {setNoticias} = useContext(ContextNoticias);
  const {setTituloPagina} = useContext(ContextTituloPagina);
  const {loading, setLoading} = useContext(ContextLoading);
  

  useEffect(() => {
    (async () => {

      setLoading(true)
      
      setTituloPagina('Ciência')
      const{data} = await api.get( `science.json?api-key=${apiKey}`)
      setNoticias(data.results)

      setLoading(false)

      
    })();
  }, []);
  
  return (
    <div>
      {loading && <Loading/>}
      {!loading && <Card/>}
    </div>
  )
}

export default Ciencia;