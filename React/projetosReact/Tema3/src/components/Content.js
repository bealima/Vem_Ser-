import styles from './Content.module.css';

function Content(){
  return(
    <div className={styles.content}>
      <h1>Estamos aprendendo REACT com o melhor professor de todos</h1>
      <div className={styles.cogumelos}>
        <img src="./cogumelo.jpeg" alt="figura cogumelo"/>
        <img src="./cogumelo.jpeg" alt="figura cogumelo"/>
        <img src="./cogumelo.jpeg" alt="figura cogumelo"/>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate nesciunt sed excepturi, quas quia officiis minus saepe ipsa dolor laborum quam iste Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate nesciunt sed excepturi, quas quia officiis minus saepe ipsa dolor laborum quam iste recusandae accusamus, optio iure ratione. Quod, sit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate nesciunt sed excepturi, quas quia officiis minus saepe ipsa dolor laborum quam iste recusandae accusamus, optio iure ratione. Quod, sit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate nesciunt sed excepturi, quas quia officiis minus saepe ipsa dolor laborum quam iste recusandae accusamus, optio iure ratione. Quod, sit!Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  );
}

export default Content;