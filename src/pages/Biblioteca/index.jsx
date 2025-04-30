import Header from '../../components/Header';
import styles from './Biblioteca.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Biblioteca() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('http://localhost/lermais/getBooks.php')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const filteredBooks = books.filter(book => 
        book.titulo.toLowerCase().includes(search.toLowerCase()) || 
        book.nome.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className={styles.bibliotecaContainer}>
                <h1>BIBLIOTECA</h1>
                <div className={styles.searchContainer}>
                <div className={styles.searchInputContainer}>
                    <input 
                        type="search" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        placeholder="Pesquisar livro..." 
                        className={styles.searchInput} 
                    />
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
                <section className={styles.booksSection}>
                        {filteredBooks.map(book => (
                            <Link key={book["id_livro"]} className={styles.bookCard} to={`/livro/${book.id_livro}`}>
                                <img src={book["capa"]} alt={book.titulo} className={styles.bookCover} />
                                <h3 className={styles.bookTitle}>{book.titulo}</h3>
                                <p className={styles.bookAuthor}>{book.nome}</p>
                                <i className={styles.bookAccess}>{book.acesso === "dominio_publico" ? "Domínio público" : ""}</i>
                            </Link>
                        ))}
                </section>
            </div>
        </>
    )
    }


export default Biblioteca;
