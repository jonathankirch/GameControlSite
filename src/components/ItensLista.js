import { Link } from 'react-router-dom'

import styles from './ItensLista.module.css'

function ItensLista( { imgProduto, imgDescricao, nomeProduto, descricaoProduto, linkPage } ) {
  return (
    <div className={styles.container}>
        <Link to={linkPage}>
        <div className={styles.divImg}>
          <img src={imgProduto} alt={imgDescricao} />
        </div>
        <div>
          <h2>{nomeProduto}</h2>
          <p>{descricaoProduto}</p>
        </div>
        </Link>
      </div>
  )
}

export default ItensLista