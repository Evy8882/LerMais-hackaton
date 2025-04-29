import React from 'react';
import styles from './SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faSearch, faEllipsisH, faUser } from '@fortawesome/free-solid-svg-icons';


const SideBar = ({show}) => {
    return (
        <div>
            <div className={`${styles.sideBar} ${show ? styles.show : ''}`}>
                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </div>
                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faBook} /> Biblioteca
                </div>
                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faSearch} /> Pesquisar
                </div>
                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faEllipsisH} /> Pontos
                </div>
                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon icon={faUser} /> Usuário
                </div>
            </div>
        </div>
    );
};

export default SideBar;