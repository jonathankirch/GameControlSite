import styles from './Footer.module.css'

import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <div className={styles.container}>
      <footer>
        <h2>Pink Control</h2>
        <div className={styles.lista}>
          <div className={styles.div1}>
            <h3>Serviços Online</h3>
            <ul>
              <li>
                <a href="https://instagram.com/ppinkv.ideo?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer">
                  <GrInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ImWhatsapp />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Control</h3>
            <ul>
              <li>Trabalhar na Pink Control</li>
              <li>Legal</li>
              <li>Privacidade</li>
              <li>Combate a falsificação</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
