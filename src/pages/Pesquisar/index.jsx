import Header from '../../components/Header'
import styles from './pesquisar.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Pesquisar() {
  const [autores, setAutores] = useState([]);
  const [biografia, data_] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/lermais/getAuthors.php')
      .then(response => {
        console.log(response.data)
        setAutores(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, [])


  return (
    <>
      <Header />
      <div className={styles.pesquisaContainer}>
        <h1>PESQUISAR PESSOAS</h1>
        <div className={styles.searchInputContainer}>
          <input
            type="search"
            placeholder="Procurar pessoas..."
            className={styles.searchInput}
          />
          <img src="/lupa.svg" alt="procurar" />
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {autores.map((autor, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.nome}>
              <strong>Nome:</strong> {autor.nome}
            </div>
            <div className={styles.data}>
              <strong>Data de nascimento:</strong> {autor.data_nascimento}
            </div>
            <div className={styles.biografia}>
              <strong>Biografia:</strong> {autor.biografia}
            </div>
          </div>
        ))}
      </div>




    </>
  )
}

export default Pesquisar