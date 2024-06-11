import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"

function Card () {
    return (
        <section className={styles.card}>
            <h3>Título do projeto</h3>
            <p>texto descritivo do projeto.</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <button className={styles.button_card}>
                    <BsArrowRight/>
                </button>
            </div>
        </section>
    )
}

export default Card