import Header from '../../components/Header'
import styles from './Biblioteca.module.css';

function Biblioteca() {

    return (
        <>
            <Header />
            <div className={styles.bibliotecaContainer}>
                <h1>BIBLIOTECA</h1>
                <div className={styles.searchContainer}>
                <div className={styles.searchInputContainer}>
                    <input type="search" placeholder="Pesquisar livro..." className={styles.searchInput} />
                    <img src="/lupa.svg" alt="procurar" />
                </div>
                <div className={styles.searchButtonsContainer}>
                    <a href="" className={styles.searchButton} style={{backgroundColor: "#7ed957", borderColor: "#00bf63"}}>Indígenas</a>
                    <a href="" className={styles.searchButton} style={{backgroundColor: "#ffbd59", borderColor: "#ff914d"}}>Romances</a>
                    <a href="" className={styles.searchButton} style={{backgroundColor: "#ff5757", borderColor: "#ff3131"}}>Poesias</a>
                    <a href="" className={styles.searchButton} style={{backgroundColor: "#5271ff", borderColor: "#004aad"}}>Históricos</a>
                    <a href="" className={styles.searchButton} style={{backgroundColor: "#d9d9d9", borderColor: "#a6a6a6"}}>Independentes</a>
                    <a href="" className={styles.searchButton} style={{backgroundColor: "#c1ff72", borderColor: "#7ed957"}}>Infantis</a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Biblioteca
