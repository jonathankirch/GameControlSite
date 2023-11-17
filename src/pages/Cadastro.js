import styles from './Cadastro.module.css'

function Cadastro() {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="nome">Nome:</label>
        <br />
        <input id="nome" type="text" />
        <br />
        <label htmlFor="cpf">CPF:</label>
        <br />
        <input id="cpf" type="number" />
        <br />
        <label htmlFor="cep">CEP:</label>
        <br />
        <input id="cep" type="number" />
        <br />
        <label htmlFor="rua">Rua:</label>
        <br />
        <input id="rua" type="text" />
        <br />
        <label htmlFor="nCasa">N° Casa:</label>
        <br />
        <input id="nCasa" type="number" />
      </form>
    </div>
  )
}

export default Cadastro
