import { Container, Social } from './styles';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
export function AboutMe() {
  return (
    <Container id='about'>
      <img src="https://avatars.githubusercontent.com/u/112139254?s=400&u=b2acf8b3094056d39100ef511158ce171516919b&v=4" alt="perfil github Enikson" />
      <section className='text-about'>
        <h3 className='about'>Quem sou eu?</h3>

        <span id="myName">Enikson Sonay</span>

        <p id="myStacks">Desenvolvedor Web e Golang</p>

        <p>E aí, pessoal! Eu sou um desenvolvedor web e técnico formado pelo Instituto Metrópole Digital - IMD/UFRN.</p>

        <p>Desde os meus 10 anos, venho tentando construir sites para espalhar a minha paixão pelos jogos. Mesmo que eu não seja um mestre no desenvolvimento de jogos, a criação de um canal no YouTube me fez mergulhar de cabeça no universo da programação, edição e motion graphics para esses meus canais de jogos que nunca decolaram.</p>

        <p>Minha jornada é marcada por tentativas, erros e, claro, muita aprendizado. Apesar dos jogos não terem ido muito longe, as habilidades que desenvolvi ao longo do caminho são meu verdadeiro tesouro. Estou sempre buscando novas formas de aprimorar minhas habilidades e trazer um toque único aos projetos digitais.</p>

        <p>Vamos continuar nessa jornada de criação e ver o que podemos construir juntos!</p>
        <Social>
          <div className='stack'>
            <FaInstagram />
          </div>
          <div className='stack'>
            <FaTwitter />
          </div>
          <div className='stack'>
            <FaGithub />
          </div>
          <div className='stack'>
            <FaLinkedin />
          </div>
        </Social>
      </section>
    </Container>
  );
}
