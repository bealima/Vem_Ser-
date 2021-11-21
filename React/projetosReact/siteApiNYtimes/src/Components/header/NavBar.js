import styles from '../header/NavBar.module.css'
function NavBar({Link}){
  return(
    <nav>
      <ul className={styles.navBar}>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/ciencia'>Ciencia</Link>
        </li>
        <li>
          <Link to='/mundo'>Mundo</Link>
        </li>
        <li>
          <Link to='/politica'>Política</Link>
        </li>
        <li>
          <Link to='/saude'>Saúde</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;