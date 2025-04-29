import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import style from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <Header transp={true} />
      <section className={style.homeSection}>
        <h1>SEJA BEM-VINDO</h1>
        <img src="/logo-aberta.png" alt="" />
        <p>No nosso site, você lê, interage com autores e ainda ganha recompensas por cada interação!</p>
        <a href="#exploreSection">
          <FontAwesomeIcon icon={faSearch} /> Explorar
        </a>
      </section>
      <section id="exploreSection">
        <Carousel />
        <div className={style.autorsContainer}>
          <h2>Autores populares</h2>
          <div className={style.itemCardContainer}>
            <div className={style.itemCard}>
              <img src="/Clarice Lispector.png" alt="Placeholder 1" />
              <p>Clarice Lispector</p>
            </div>
            <div className={style.itemCard}>
              <img src="/Machado de Assis.png" alt="Placeholder 2" />
              <p>Machado de Assis</p>
            </div>
            <div className={style.itemCard}>
              <img src="/Carlos Drummond.png" alt="Placeholder 3" />
              <p>Carlos Drummond</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
