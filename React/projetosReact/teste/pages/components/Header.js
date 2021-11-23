import Link from 'next/link'
import styles from '../../styles/Header.module.css'

function Header(){
  return (
    <div className={styles.header}>
      <p>logo</p>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contatos">Contatos</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;