import shopping from "../img/shopping.svg"
import styles from "./Header.module.css"
export default function Header() {
    return <header className={styles.header}>
        <div className={styles.phile}>
            <h2 className={styles.audiophile}>audiophile</h2>
            <ul className={styles.home}>
                <li>
                    <a className={styles.aud} href="#">Home</a>
                </li>
                <li>
                    <a className={styles.aud} href="#">HEADPHONES</a>
                </li>
                <li>
                    <a className={styles.aud} href="#">SPEAKERS</a>
                </li>
                <li>
                    <a className={styles.aud} href="#">EARPHONES</a>
                </li>
            </ul>
            <img className={styles.shop} src={shopping} alt="#" />
        </div>

        <div className={styles.chiziq}></div>

        <div className={styles.nev}>
            <h2>HEADPHONES</h2>
        </div>
    </header>
}