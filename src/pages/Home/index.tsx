import { Readline, Text, ContainerButtons } from './styles'
import Element from "../../assets/SVG/el1.svg";
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
            <p id='descript'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dicta consectetur maiores omnis eveniet culpa ducimus repellat velit. Aut, minima deserunt dolorem sed iusto obcaecati. Temporibus vitae quam deserunt? Exercitationem?</p>
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
          <img src={ Element } alt="" id="element-readline"/>
        </Readline>
        <Footer />
      </main>
    </div>
  )
}

