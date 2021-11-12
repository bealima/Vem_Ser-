import styles from './SobreContent.module.css';

function SobreContent(){
  return(
    <div className={styles.sobreContent}>
      <h1>Sobre a DBC</h1>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h9HiHkEar-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga! Sint voluptatibus nihilipsum adipisci. Tempora exercitationem tempore ratione neque laudantium, cupiditate eligendi illumiure consectetur odio ipsa veritatis delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga! Sint voluptatibus nihi ipsum adipisci. Tempora exercitationem tempore ratione neque laudantium, cupiditate eligendi illum,iure consectetur odio ipsa veritatis delectus?</p>
    </div>
  );
}

export default SobreContent;