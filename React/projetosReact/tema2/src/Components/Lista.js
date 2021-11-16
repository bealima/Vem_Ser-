import style from "../Components/Lista.module.css"

function Lista({trabalhador}){
  return(
    <div>
      <ul className={style.lista}>
        <li><h3>Nome: {trabalhador.nome}</h3></li>
        <li>Profissão: {trabalhador.profissao}</li>
        <li>E-mail: {trabalhador.email}</li>
      </ul>
    </div>
  );
}

export default Lista;