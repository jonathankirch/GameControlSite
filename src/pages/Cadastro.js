import { Link } from 'react-router-dom';
import styles from "./Cadastro.module.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";

function Cadastro() {

	function concluida() {
		alert("Compra concluida!!!")
	}

	return (
		<div className={styles.container}>
			<div className={styles.iconBack}>
        <button onClick={() => {window.history.back()}}><IoArrowBackCircleOutline size='50' color='white' /></button>
			</div>
			<section>
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
				<Link to="/SaibaMais">
				<button className={styles.btnCompra} onClick={concluida}>
					Finalizar Compra
				</button>
				</Link>
			</section>
		</div>
	);
}

export default Cadastro;
