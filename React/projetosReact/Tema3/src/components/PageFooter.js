import { Link } from 'react-router-dom';
import Menu from './Menu';
import styles from './PageFooter.module.css'; 

function PageFooter(){
  return(
    <div className={styles.foooter}>
      <Menu Link={Link}/>   
    </div>
  )
}
export default PageFooter;