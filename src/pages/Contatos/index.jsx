import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs'

function Contatos() {
    return (
        <section className={styles.contacts}>
            <h2>Contatos</h2>
            <h3>Entre em contato comigo</h3>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icons}>
                <a href="mailto:willianlopes20@hotmail.com" target='_blank' rel='noopener noreferrer'> <GoMail className={styles.icon} /></a>
                <a href="https://wa.me/5581988129016?text=Ol%C3%A1,%20espero%20que%20esteja%20bem!%0A%0AEm%20breve%20responderei." target='_blank' rel='noopener noreferrer'><BsWhatsapp className={styles.icon} /></a>
                <a href="https://github.com/williangabriell" target='_blank' rel='noopener noreferrer'> <BsGithub className={styles.icon} /></a>
                <a href="https://www.linkedin.com/in/williangabriell/" target='_blank' rel='noopener noreferrer'>   <BsLinkedin className={styles.icon} /></a>
            </div>
        </section>
    )
}

export default Contatos
