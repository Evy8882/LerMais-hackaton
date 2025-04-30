import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Livro.module.css';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faReply, faFlag } from '@fortawesome/free-solid-svg-icons';

const Livro = () => {
    const { id } = useParams();
    const [livro, setLivro] = useState({});
    const [categorias, setCategorias] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchLivro = async () => {
            try {
                const response = await axios.get(`http://localhost/lermais/getBook.php?id=${id}`);
                setLivro(response.data);
            } catch (err) {
                setError('Erro ao carregar as informações do livro.');
            }
            try {
                const response = await axios.get('http://localhost/lermais/getCateg.php?id=' + id);
                setCategorias(response.data);
            } catch (error) {
                console.error('Fetching error:', error);
            }
            try {
                const response = await axios.get(`http://localhost/lermais/getComments.php?id=${id}`);
                setComentarios(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLivro();

    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />
            <div className={styles.livroContainer}>
                <div className={styles.livroCapaContainer}>
                    <img src={livro.capa} alt={livro.titulo} className={styles.livroCapa} />
                    <a href={livro.url_pdf} className={styles.downloadButton}>
                        <FontAwesomeIcon icon={faDownload} /> PDF
                    </a>
                </div>
                <div className={styles.livroInfo}>
                    <h1>{livro.titulo}</h1>
                    <h2>Por: <u>{livro.nome}</u> (Autor) | Formato: pdf</h2>
                    <div className={styles.categoriasContainer}>
                        Categorias: <ul>{categorias.map((categ, index) => (<li key={index}>{categ["nome_categoria"]}</li>))}</ul>
                    </div>
                    <p>Acesso: {livro.acesso === "dominio_publico" ? "Domínio público" : "Privado"}</p>
                </div>
            </div>
            <div className={styles.comentariosContainer}>
                <h2>Comentários</h2>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const texto_comentario = e.target.elements.comentario.value;
                        if (!texto_comentario.trim()) return;

                        try {
                            await axios.post('http://localhost/lermais/addComment.php', {
                                id_livro: id,
                                texto_comentario,
                            });
                            setComentarios((prevComentarios) => [
                                ...prevComentarios,
                                { nome_usuario: 'Você', texto_comentario, data_comentario: new Date().toISOString() },
                            ]);
                            e.target.reset();
                        } catch (error) {
                            console.error('Erro ao enviar comentário:', error);
                        }
                    }}
                    className={styles.formComentario}
                >
                    <textarea
                        name="comentario"
                        placeholder="Escreva seu comentário..."
                        className={styles.textareaComentario}
                    ></textarea>
                    <button type="submit" className={styles.botaoComentario}>
                        Enviar
                    </button>
                </form>
                {comentarios.map((comentario) => (
                    <div key={comentario.id_comentario} className={styles.comentario}>
                        <p><strong>{comentario.nome_usuario}</strong> disse:</p>
                        <p>{comentario.texto_comentario}</p>
                        <p className={styles.dataComentario}>{new Date(comentario.data_comentario).toLocaleString()}</p>
                        <div className={styles.actionButtonsContainer}>
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                className={styles.actionButton}
                                title="Curtir"
                            />
                            <FontAwesomeIcon
                                icon={faReply}
                                className={styles.actionButton}
                                title="Responder"
                            />
                            <FontAwesomeIcon
                                icon={faFlag}
                                className={styles.actionButton}
                                title="Denunciar"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Livro;