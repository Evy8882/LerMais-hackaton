import Header from '../../components/Header';
import styles from './Biblioteca.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Biblioteca() {
    const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     axios.get('localhost/lermais/getBooks.php')
    //         .then(response => {
    //             setBooks(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching books:', error);
    //         });
    // }, []);

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
                <section>
                    <div className={styles.booksContainer}>
                        {books.map(book => (
                            <div key={book.id} className={styles.bookCard}>
                                <img src={book.cover} alt={book.title} className={styles.bookCover} />
                                <h3 className={styles.bookTitle}>{book.title}</h3>
                                <p className={styles.bookAuthor}>{book.author}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
    }


export default Biblioteca;
