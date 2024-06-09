import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentation}>
                <p>
                    Olá, sou <br />
                    <span>Willian Gabriel</span> <br />
                    Dev Front End
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais
                </Link>
            </div>
            <figure>
                <img className={styles.img_home} src="/developer-red.svg" alt="Homem em frente ao notebook" />
            </figure>
        </section>
    )
}

export default Home
