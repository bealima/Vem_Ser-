import { useContext } from 'react';
import {ContextNoticias} from '../../context/ContextNoticias'
import styles from '../card/Card.module.css'

function Card(){

  const{noticias} = useContext(ContextNoticias)

  return(

    <div className={styles.card}>
      <ul >
        {noticias.map((noticia, index) => (
          <li key={index} >
            {noticia.byline.length > 0 && 
            <a>
              <img src={noticia.multimedia ? noticia.multimedia[0].url : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Ffpae.pt%2Fbackup%2F20181025%2Fwp%2Fwp-content%2Fplugins%2Fpost-slider-carousel%2Fimages%2Fno-image-available-grid.jpg&imgrefurl=http%3A%2F%2Ffpae.pt%2Fbackup%2F20181025%2Fwp%2Fwp-content%2Fplugins%2Fpost-slider-carousel%2Fimages%2F&tbnid=L-EcGCchauR_PM&vet=12ahUKEwif87623qf0AhVLN7kGHXJ8DUQQMygHegUIARCwAQ..i&docid=2A1w7IVMo5GPPM&w=1024&h=768&itg=1&q=no%20image%20available&hl=pt-BR&ved=2ahUKEwif87623qf0AhVLN7kGHXJ8DUQQMygHegUIARCwAQ'  } alt="" />
              <span>
                <h3>{noticia.title}</h3>
                <p className={styles.autor}>{noticia.byline}</p>
                <p className={styles.abstract}>{noticia.abstract}</p>
                
              </span>
            </a>
          }
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Card;