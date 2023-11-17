import PageProduto from '../components/PageProduto'

import imgControl from '../img/pg2-ps4ctrl.jpg'

function Produto1() {

  let numero = 1
  const valorProduto = 1100.00
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

    divValorProduto.innerText = `R$${valorTotal.toFixed(2)}`
    div.innerText = numero
  }
  return (
    <PageProduto
      produtoNome={'PS4'}
      produtoImg={imgControl}
      produtoImgDescricao={'Pink Control Ps4'}
      produtoValor={'R$1100,00'}
      produtoFrete={'Frete: R$24,00 para todo o Brasil.'}
      produtoFrete2={'Prazo de entrega: 10 a 15 dias.'}
      clicouMais={clicouMais}
      clicouMenos={clicouMenos}
    />
  )
}

export default Produto1
