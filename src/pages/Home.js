import styles from './Home.module.css'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

function Home(){
  return (
    <div className={styles.container}>
      <header>
        <h1>Titulo</h1>
      </header>
      <main>
        <div className={styles.tituloBackground}>
          <h2>Titulo titulo</h2>
          <p>bla bla bla bla</p>
          <Link to='/SaibaMais'>
          <button>Saiba mais</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home