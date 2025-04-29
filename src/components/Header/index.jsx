import styles from './Header.module.css'
import Bars from '/bars.svg'
import SideBar from '../SideBar'
import Logo from '/logo-transparente.png'
import { useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSideHeader}>
        <img
          src={Bars}
          alt=""
          className={styles.bar}
          onClick={toggleSidebar}
        />
        <div>Ler Mais</div>
      </div>
      <div className={styles.rightSideHeader}>
        <img src={Logo} alt="" className={styles.logo} />
      </div>
      <SideBar show={show} />
    </header>
  );
}

export default Header
