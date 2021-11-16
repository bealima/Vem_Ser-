import { useState } from "react";
import Card from "./Card";
import styles from "../Components/Form.module.css"

function Form(){
  const[id,setId]= useState(1)
  const[nome, setNome]= useState('')
  const[email, setEmail]= useState('')
  const[profissao, setProfissao]= useState('')
  const[lista, setLista]= useState([])


  function cadastrarTrabalhor(){

    setLista([...lista, {id,nome, email, profissao}])
    setId(id + 1)

  }

  const handleDelete = (id) =>{
    const listadelete = lista.filter(user => user.id !== id)
    setLista(listadelete)
  } 

  return(
   
    <div className={styles.form}>
      <h1>Trabalhadores</h1>
      <form>
        <div>
          <input type="text" placeholder="Digite o seu nome completo" onChange={e => setNome(e.target.value)} />
        </div>
        <div>
          <input type="e-mail" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="text" placeholder="Digite sua profissão" onChange={e => setProfissao(e.target.value)}/>
        </div>
        <button type="button" onClick={cadastrarTrabalhor} >Adicionar Usuário</button>
      </form>
      <div className={styles.divCard}>
        <Card lista={lista} onDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default Form;