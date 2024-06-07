import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentation'>
                    <p>
                        Olá, sou <br />
                        <span>Willian Gabriel</span> <br />
                        Dev Front End
                    </p>
                    <Link to="/sobre" className='btn btn-red'>
                        Saiba mais
                    </Link>
                </div>
                <figure>
                    <img className='img-home' src="/developer-red.svg" alt="Homem em frente ao notebook" />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Home
