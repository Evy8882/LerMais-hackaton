import Header from '../../components/Header'
import styles from './pesquisar.module.css'

function Pesquisar() {

  return (
    <>
    <Header/>
      <div className={styles.pesquisaContainer}>
          <h1>PESQUISAR PESSOAS</h1>
          <div className={styles.searchInputContainer}>
            <input type="search" placeholder="Procurar pessoas..." className={styles.searchInput} />
            <img src="/lupa.svg" alt="procurar" />
          </div>
      </div>
    </>
  )
}

export default Pesquisar