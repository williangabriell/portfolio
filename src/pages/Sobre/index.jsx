import styles from './Sobre.module.css'
import { SiMysql } from "react-icons/si"
import avatar from './images/avatar.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'



function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} className={styles.avatar} />
                <div className={styles.texts}>
                    <h2>Sobre</h2>
                    <p>
                        <span>Olá, sou Willian Gabriel</span> <br />
                        <strong>Dev Front End</strong>
                    </p>
                    <p>
                        Trabalho com desenvolvimento Web desde 2022.
                    </p>
                    <p>
                        Sou apaixonado por transformar ideias em realidade digital.
                    </p>
                    <p>
                        Me Especializando em criação de plataformas dinâmicas e intuitivas, <br />
                        com foco na experiência do usuário.
                    </p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icons}>
                    <img src={html} className={styles.expand} alt="Ícone do HTML" />
                    <img src={css} className={styles.expand} alt="Ícone do CSS" />
                    <img src={js} className={styles.expand} alt="Ícone do JS" />
                    <img src={react} className={styles.expand} alt="Ícone do React" />
                    <div className={styles.sql}> <SiMysql className={styles.expand}/></div>
                </div>
            </div>
            <div>
                <a href= "https://drive.google.com/uc?export=download&id=1aL_N1jt9qMHg1Xh6NjD1IW4PKl7jraJ1" download=" Currículo - Willian Gabriel" className={styles.button}>Baixe meu Currículo</a>
            </div>
        </section>
    )
}

export default Sobre
