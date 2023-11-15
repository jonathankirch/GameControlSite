import PageProduto from '../components/PageProduto'

function Produto2() {
  return (
    <PageProduto
      produtoNome={'Produto nome 2'}
      produtoImg={'https://via.placeholder.com/150'}
      produtoImgDescricao={'descricao produto 2'}
      produtoValor={'R$999,99'}
      produtoFrete={'Entrega R$ 10,00: Sexta-feira, 99 de novembro'}
    />
  )
}

export default Produto2
