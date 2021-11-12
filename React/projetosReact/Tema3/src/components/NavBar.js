import { Link } from 'react-router-dom';
import Menu from './Menu';
import styles from './NavBar.module.css';

function NavBar() {
  return(
    <div className={styles.navBar}>

      <img src="./cogumelo.jpeg" alt="figura cogumelo" className={styles.imgCogumelo}/>
      <h3 className={styles.h3NavBar}>Melhores alunos do VemSer de todos os tempos</h3>
      <Menu Link={Link}/>
    </div>
  );
}
export default NavBar;