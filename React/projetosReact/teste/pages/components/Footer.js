import Link from "next/link";
import styles from '../../styles/Footer.module.css'

function Footer(){
  return(
    <div className={styles.footer}>
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

export default Footer;