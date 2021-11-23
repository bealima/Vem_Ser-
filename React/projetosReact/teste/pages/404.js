import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import styles from '../styles/404.module.css'

function Error404(){
  const router= useRouter()
  useEffect(()=> {
    setTimeout(()=>{
      router.push('/')
    },3000)
  })
  
  return(
    <div className={styles.error404}>
      <h1>Pagina não encontrada</h1>
      <p>Em instantes você será redirecionado para a Home</p>
    </div>
  );
}

export default Error404;