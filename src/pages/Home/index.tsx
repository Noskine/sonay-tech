import {  Readline, Text, ContainerButtons } from './styles'
import { FaGithub } from 'react-icons/fa6';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Readline>
          <Text>
            <span className='impact'>Criando soluções web de ponta a ponta</span>
            <h1>Desenvolvedor web Golang e javascript</h1>
            <ContainerButtons>
              <button className='button-readline button-hover'>
                Entre em contato comigo!
              </button>
              <button className='button-github button-readline'>
                <FaGithub />
                Github
              </button>
            </ContainerButtons>
          </Text>
        </Readline>
        <Footer />
      </main>
    </div>
  )
}

