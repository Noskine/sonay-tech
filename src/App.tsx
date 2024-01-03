import './app.css'
import { Header } from './components/Header/index'
import { FaGithub } from "react-icons/fa";
function App() {
  return (
    <>
      <Header />
      <section id="container-readline">
        <div className="text">
          <h1 className="gradient-green title">
            Desenvolvedor Web Golang e Javascript
          </h1>
          <p className='subtitle'>Desenvolvimento Web: Criando aplicações performáticas, Conectando Empresas ao Mundo com Tecnologia</p>
          <section id="readline-buttons">
            <button>
              Entrar em Contato
            </button>
            <button className='github'>
              <i>
                <FaGithub />
              </i> | Github
            </button>
          </section>
        </div>
      </section>
    </>
  )
}

export default App
