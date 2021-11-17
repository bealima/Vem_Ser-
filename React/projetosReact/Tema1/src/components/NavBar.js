import styles from './NavBar.module.css';

function NavBar() {
  return(
    <div >
      <header className={styles.navBar}>
          <img src="./cogumelo.jpeg" alt="figura cogumelo" className={styles.imgCogumelo}/>
          <h3 className={styles.h3NavBar}>Melhores alunos do VemSer de todos os tempos</h3>
          <div>
            <ul className={styles.menu}>
              <li><a href="/" className={styles.linkLista}>Home</a></li>
              <li><a href="/" className={styles.linkLista}>Sobre</a></li>
              <li><a href="/" className={styles.linkLista}>Contato</a></li>
            </ul>
          </div>
        </header>
    </div>
  );
}
export default NavBar;