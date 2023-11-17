import styles from './PageProduto.module.css'

import { Link } from 'react-router-dom'

import { IoArrowBackCircleOutline } from "react-icons/io5";

function PageProduto({
  produtoNome,
  produtoImg,
  produtoImgDescricao,
  produtoValor,
  produtoFrete,
  produtoFrete2,
  clicouMais,
  clicouMenos,
  tradePink,
  tradeBaby,
  tradePinkBaby
}) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.iconBack}>
        <Link to='/SaibaMais'>
        <button><IoArrowBackCircleOutline size='50' /></button>
        </Link>
        </div>
        <h1>{produtoNome}</h1>
        <div className={styles.divImg}>
          <img src={produtoImg} alt={produtoImgDescricao} />
        </div>
        <div className={styles.divInformacoes}>
          <div>
            <h3 id="valorProduto">{produtoValor}</h3>
            <p>{produtoFrete}</p>
            <p>{produtoFrete2}</p>
          </div>
          <div className={styles.inputColors}>
            <p>Cor:</p>
            <input className={styles.pink} type="radio" name="color" onClick={tradePink} />
            <input className={styles.baby} type="radio" name="color" onClick={tradeBaby} />
            <input className={styles.pinkBaby} type="radio" name="color" onClick={tradePinkBaby} />
          </div>
          <div className={styles.quantidadeProduto}>
            <button className={styles.removeBtn} onClick={clicouMenos}>
              -
            </button>
            <p id="valueDiv">1</p>
            <button className={styles.addBtn} onClick={clicouMais}>
              +
            </button>
          </div>
          <div className={styles.btnComprar}>
            <Link to='/cadastro'>
            <button>Comprar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageProduto
