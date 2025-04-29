import React from 'react';
import styles from './SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faSearch, faEllipsisH, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = ({show}) => {
    return (
        <div>
            <div className={`${styles.sideBar} ${show ? styles.show : ''}`}>
                <Link to="/" className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <Link to="/biblioteca" className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faBook} /> Biblioteca
                </Link>
                <Link to="/pesquisar" className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faSearch} /> Pesquisar
                </Link>
                <Link to="/pontos" className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faEllipsisH} /> Pontos
                </Link>
                <Link to="/perfil" className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faUser} /> Usuário
                </Link>
            </div>
        </div>
    );
};

export default SideBar;