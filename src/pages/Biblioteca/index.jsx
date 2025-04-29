import Header from '../../components/Header'
import styles from './Biblioteca.module.css';

function Biblioteca() {

    return (
        <>
            <Header />
            <div className={styles.bibliotecaContainer}>
                <h1>BIBLIOTECA</h1>
                <div className={styles.searchInputContainer}>
                    <input type="search" placeholder="Pesquisar livro..." className={styles.searchInput} />
                    <img src="/lupa.svg" alt="lupa" />
                </div>
            </div>
        </>
    )
}

export default Biblioteca
