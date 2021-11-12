import styles from './Form.module.css'

function Form(){
  return(
    <div className={styles.form}>
      <h1>Fale com a gente</h1>
      <form>
        <div>
          <label htmlFor="nome">Digite seu nome completo:</label>
          <input type="text" placeholder="Nome Completo" />
        </div>
        <div>
          <label htmlFor="email">Digite seu e-mail:</label>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
        <label for="motivoContato">Qual o motivo do contato? </label>
        <select name="motivoContato" id="motivoContato">
            <option value="m1">HTML é easy demais</option>
            <option value="m2">Porque sim </option>
            <option value="m3">Queria bater um papo com alguém...</option>
        </select>
        </div>
      </form>
    </div>
  )
}

export default Form;