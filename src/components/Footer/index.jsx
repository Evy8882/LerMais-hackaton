import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer>
      <section className={styles.footerMainSection}>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">SOBRE NÓS</Link></li>
        <li><Link to="/">CONTATO</Link></li>
        <li><Link to="/">PERFIL</Link></li>
      </ul>
      <ul>
        <li><Link to="/">AUTORES POPULARES</Link></li>
        <li><Link to="/">BIBLIOTECA</Link></li>
        <li><Link to="/">PESQUISAR</Link></li>
        <li><Link to="/">PONTOS</Link></li>
      </ul>
      <ul>
        <li><Link to="/">LIVROS</Link></li>
        <li><Link to="/">ROMANCE</Link></li>
        <li><Link to="/">COMÉDIA</Link></li>
        <li><Link to="/">TERROR</Link></li>
        <li><Link to="/">SUSPENSE</Link></li>
      </ul>
      <ul>
        <li><Link to="/">FILOSOFOS</Link></li>
        <li><Link to="/">INDÍGENAS</Link></li>
        <li><Link to="/">INFANTIS</Link></li>
      </ul>
      <img className={styles.footerLogo} src="/logo-aberta.png" alt="Ler Mais" />
      <a className={styles.inicioLink} href="#homeSection">Voltar ao início</a>

      </section>
      <section className={styles.footerSecondarySection}>
        <ul>
          <li>
              <a href="https://www.instagram.com/__lermais"><img src="/instagram.svg" alt="Instagram" />   __lermais </a>
          </li>
          <li>
              <a href=""><img src="/email.svg" alt="Email" />   lermais@gmail.com </a>
          </li>
          <li>
            
          </li>
          <li>
              <a href="">Suporte </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;