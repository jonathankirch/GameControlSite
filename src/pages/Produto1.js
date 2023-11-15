import PageProduto from '../components/PageProduto'

function Produto1() {
  return (
    <PageProduto
      produtoNome={'Produto nome 1'}
      produtoImg={'https://via.placeholder.com/150'}
      produtoImgDescricao={'descricao produto 1'}
      produtoValor={'R$999,99'}
      produtoFrete={'Entrega R$ 10,00: Sexta-feira, 99 de novembro'}
    />
  )
}

export default Produto1
