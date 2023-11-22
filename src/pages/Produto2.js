import { useState } from 'react'


import PageProduto from '../components/PageProduto'

import imgControlPink from '../img/ctrl-ps5-escuro.jpg'
import imgControlPinkBaby from '../img/pg1-ps5ctrl.jpg'
import imgControlBaby from '../img/pg2-ps5ctrl2.jpg'


function Produto2() {

  let numero = 1
  const valorProduto = 1550.00
  let valorTotal = 0

  const [produtoImg, setProdutoImg] = useState(imgControlBaby)

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

  function tradePink() {
    setProdutoImg(imgControlPink)
  }
  function tradeBaby() {
    setProdutoImg(imgControlBaby)
  }
  function tradePinkBaby() {
    setProdutoImg(imgControlPinkBaby)
  }

  function atualizarDiv() {
    let div = document.querySelector('#valueDiv')
    let divValorProduto = document.querySelector('#valorProduto')

    divValorProduto.innerText = `R$${valorTotal.toFixed(2)}`
    div.innerText = numero
  }

  return (
    <PageProduto
      produtoNome={'PS5'}
      produtoImg={produtoImg}
      produtoImgDescricao={'descricao produto 2'}
      produtoValor={'R$1550.00'}
      produtoFrete={'Frete: R$24,00 para todo o Brasil.'}
      produtoFrete2={'Prazo de entrega: 10 a 15 dias.'}
      clicouMais={clicouMais}
      clicouMenos={clicouMenos}
      tradePink={tradePink}
      tradeBaby={tradeBaby}
      tradePinkBaby={tradePinkBaby}
    />
  )
}

export default Produto2
