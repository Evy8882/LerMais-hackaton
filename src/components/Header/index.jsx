import styles from './Header.module.css'
import Bars from '/bars.svg'
import Close from '/close.svg'
import SideBar from '../SideBar'
import Logo from '/logo-transparente.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({transp=false}) {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header className={`${styles.header} ${transp ? styles.transp : ""}`}>
      <div className={styles.leftSideHeader}>
        <img
          src={show? Close : Bars}
          alt=""
          className={styles.bar}
          onClick={toggleSidebar}
        />
        <div>Ler Mais</div>
      </div>
      <div className={styles.rightSideHeader}>
        
        {transp === false ? (<img src={Logo} alt="" className={styles.logo} />) : (
          <>
          <Link className={styles.Links}>Sobre nós</Link>
          <Link className={styles.Links}>Contato</Link>
          </>
        )}
          
        
      </div>
      <SideBar show={show} />
    </header>
  );
}

export default Header
