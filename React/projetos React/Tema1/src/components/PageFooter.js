import styles from './PageFooter.module.css'; 

function PageFooter(){
  return(
    <div className={styles.foooter}>
        <ul className={styles.menuFotter}>
          <li><a href="/" className={styles.linkLista}>Home</a></li>
          <li><a href="/" className={styles.linkLista}>Sobre</a></li>
          <li><a href="/" className={styles.linkLista}>Contato</a></li>
        </ul>
    </div>
  )
}
export default PageFooter;