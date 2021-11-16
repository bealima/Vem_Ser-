import Lista from "./Lista";
import styles from "../Components/Card.module.css"

function Card({lista, onDelete}){
  return(
    <div className={styles.card}>
      {lista.map((e, id) => (
        <div key={id}>
          <Lista trabalhador= {e}/>
          <button type="button" onClick={()=> onDelete(e.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default Card;