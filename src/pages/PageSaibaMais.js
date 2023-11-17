import ItensLista from '../components/ItensLista'

import imgPs4Ctrl from '../img/pg1-ps4ctrl.jpg'
import imgPs5Ctrl from '../img/pg2-ps5ctrl.jpg'

import styles from './PageSaibaMais.module.css'

function PageSaibaMais() {
  return (
    <div className={styles.container}>
      <ItensLista
        linkPage={'/produto1'}
        imgProduto={imgPs4Ctrl}
        imgDescricao={'teste descricao da img'}
        nomeProduto={'PS4'}
        descricaoProduto={
          'Contém uma mini tela full hd, o controle é tingido no tom de rosa escolhido (os acessórios correspondem juntamente a cor escolhida) tendo a opção, pink, baby e pink baby. Contém paddles para controlar a tela e protetor de analógico.'
          // 'teste'
        }
      />

      <ItensLista
        linkPage={'/produto2'}
        imgProduto={imgPs5Ctrl}
        imgDescricao={'teste descricao da img'}
        nomeProduto={'PS5'}
        descricaoProduto={
          'Contém uma mini tela full hd, o controle é tingido no tom de rosa escolhido (os acessórios correspondem juntamente a cor escolhida) tendo a opção, pink, baby e pink baby. Contém paddles para controlar a tela e protetor de analógico. Brinde especial.'
        }
      />
    </div>
  )
}

export default PageSaibaMais
