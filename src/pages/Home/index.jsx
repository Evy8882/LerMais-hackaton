import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import style from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
      <Header transp={true} />
      <section className={style.homeSection}>
        <h1>SEJA BEM-VINDO</h1>
        <img src="/logo-aberta.png" alt="Ler Mais" />
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
              <img src="https://placehold.co/200x150" alt="Placeholder 1" />
              <p>Autor 1</p>
            </div>
            <div className={style.itemCard}>
              <img src="https://placehold.co/200x150" alt="Placeholder 2" />
              <p>Autor 2</p>
            </div>
            <div className={style.itemCard}>
              <img src="https://placehold.co/200x150" alt="Placeholder 3" />
              <p>Autor 3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home
