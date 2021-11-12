import styles from './Map.module.css'
function Map(){
  return(
    <div className={styles.mapa}>
      <h4>Endereço DBC</h4>
      <div >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7200844760846!2d-51.170870284885524!3d-30.01619288189264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636518729423!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
      </div>
      
    </div>
  )
}

export default Map;