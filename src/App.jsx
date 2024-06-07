import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

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
          <button className='btn btn-red'>
            Saiba mais
          </button>
        </div>
        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Homem em frente ao notebook" />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App
