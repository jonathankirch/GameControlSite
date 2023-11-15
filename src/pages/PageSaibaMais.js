import ItensLista from '../components/ItensLista'

function PageSaibaMais() {
  return (
    <div>
      <ItensLista
        linkPage={'/produto1'}
        imgProduto={'https://via.placeholder.com/150'}
        imgDescricao={'teste descricao da img'}
        nomeProduto={'Teste nome 1'}
        descricaoProduto={
          'teste descricao: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, expedita doloribus.'
        }
      />

      <ItensLista
        linkPage={'/produto2'}
        imgProduto={'https://via.placeholder.com/150'}
        imgDescricao={'teste descricao da img'}
        nomeProduto={'Teste nome 2'}
        descricaoProduto={
          'teste descricao: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, expedita doloribus.'
        }
      />
    </div>
  )
}

export default PageSaibaMais
