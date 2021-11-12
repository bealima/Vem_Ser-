import styles from './Menu.module.css';

function Menu ({Link}){
  return(
    <div >
      <ul className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;