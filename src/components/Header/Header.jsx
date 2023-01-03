import styles from './Headaer.module.css'
import logoImg from '../../assets/img/logo.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
          <img src={logoImg} alt="" />
           <strong>Ignite Feed</strong>
        </header>
    )
}