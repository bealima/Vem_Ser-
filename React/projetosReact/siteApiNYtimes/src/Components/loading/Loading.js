import React from 'react';
import styles from '../loading/Loading.module.css';

function Loading() {
 return(
  <div className={styles.loading}>
    <img src='./logoLoading2.gif' alt='carregando'/>
  </div>
 )
}
export default Loading;