import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextTituloPagina } from '../../context/ContextTituloPagina';
import styles from '../header/Header.module.css';
import NavBar from './NavBar';

function Header(){
  const{tituloPagina} = useContext(ContextTituloPagina);
  return(
    <div className={styles.header}>
      <h1>{tituloPagina}</h1>
      <NavBar Link={Link}/>
    </div>
  );
}

export default Header;