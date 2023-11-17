import styles from './Home.module.css'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header>
          <h1>Pink Control</h1>
        </header>
        <main>
          <div className={styles.tituloBackground}>
            <Link to="/SaibaMais">
              <button>Saiba Mais</button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
