import styles from './PageProduto.module.css'

function PageProduto({
  produtoNome,
  produtoImg,
  produtoImgDescricao,
  produtoValor,
  produtoFrete,
}) {


  let numero = 1
  const valorProduto = 999.99
  let valorTotal = 0

  function clicouMenos() {

    if( numero <= 1 ) {
      alert("[ERRO] Adicione um valor válido")
    } else {
      numero--
      valorTotal = valorProduto * numero
      atualizarDiv()
    }
  }

  function clicouMais() {
    if (numero < 1 ) {
      alert('[ERRO] Adicione um valor válido')
    } else {
      numero++
      valorTotal = valorProduto * numero
      atualizarDiv()
    }
  }

  function atualizarDiv() {
    let div = document.querySelector('#valueDiv')
    let divValorProduto = document.querySelector('#valorProduto')

    divValorProduto.innerText = valorTotal.toFixed(2)
    div.innerText = numero
  }

  return (
    <div className={styles.container}>
      <h1>{produtoNome}</h1>
      <div className={styles.divImg}>
        <img src={produtoImg} alt={produtoImgDescricao} />
      </div>
      <div className={styles.divInformacoes}>
        <div>
          <h3 id='valorProduto'>{produtoValor}</h3>
          <p>{produtoFrete}</p>
        </div>
        <div className={styles.quantidadeProduto}>
          <button className={styles.removeBtn} onClick={clicouMenos}>-</button>
          <p id="valueDiv">1</p>
          <button className={styles.addBtn} onClick={clicouMais}>+</button>
        </div>
        <div className={styles.btnComprar}>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default PageProduto
