import './app.css'
import { Header } from './components/Header/index'

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
        </div>
      </section>
    </>
  )
}

export default App
