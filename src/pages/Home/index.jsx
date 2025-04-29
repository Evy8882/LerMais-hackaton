import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import style from './Home.module.css'

function Home() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default Home
