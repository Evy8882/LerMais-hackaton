import styles from './Header.module.css'
import Bars from '/bars.svg'

function Header() {

  return (
    <header className={styles.header}>
    <div className={styles['left-side-header']}>
        <img src={Bars} alt="" className={styles.bar}/>
        <div>Ler Mais</div> 
      </div>
    </header>
  )
}

export default Header
