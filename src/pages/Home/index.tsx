import { Container, Readline } from './styles'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header'
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Readline>
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
        </Readline>
        <Footer />
      </main>
    </Container>
  )
}

