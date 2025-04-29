import Header from '../../components/Header';
import styles from './Biblioteca.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Biblioteca() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('localhost/lermais/getBooks.php')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className={styles.bibliotecaContainer}>
                <h1>BIBLIOTECA</h1>
                <div className={styles.searchContainer}>
                <div className={styles.searchInputContainer}>
                    <input type="search" placeholder="Pesquisar livro..." className={styles.searchInput} />
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
