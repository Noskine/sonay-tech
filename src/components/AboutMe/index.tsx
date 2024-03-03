import {Container, Social} from './styles';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import perfil from "../../assets/perfil.jpeg"
import {Link} from "react-router-dom";

export function AboutMe() {
  return (
   <>
     
     <Container id='about'>
       <img src={perfil} alt="perfil github Enikson" />
       <section className='text-about'>
         <h3 className='aboutTitle impact'>Sobre mim</h3>
         
         <span id="myName">Enikson Sonay</span>
         
         <p id="myStacks">Desenvolvedor Web e Golang</p>
         
         <p>E aí, pessoal! Eu sou um desenvolvedor web e técnico formado pelo Instituto Metrópole Digital - IMD/UFRN.</p>
         
         <p>Desde os meus 10 anos, venho tentando construir sites para espalhar a minha paixão pelos jogos. Mesmo que eu não seja um mestre no desenvolvimento de jogos, a criação de um canal no YouTube me fez mergulhar de cabeça no universo da programação, edição e motion graphics para esses meus canais de jogos que nunca decolaram.</p>
         
         <p>Minha jornada é marcada por tentativas, erros e, claro, muita aprendizado. Apesar dos jogos não terem ido muito longe, as habilidades que desenvolvi ao longo do caminho são meu verdadeiro tesouro. Estou sempre buscando novas formas de aprimorar minhas habilidades e trazer um toque único aos projetos digitais.</p>
         
         <p>Vamos continuar nessa jornada de criação e ver o que podemos construir juntos!</p>
         <Social>
           <Link to="https://www.instagram.com/sonay.dev" target="_blank">
             <div className='stack'>
               <FaInstagram/>
             </div>
           </Link>
           <Link to="https://twitter.com/hey_sonay_" target="_blank">
             <div className='stack'>
               <FaTwitter/>
             </div>
           </Link>
           <Link to="https://github.com/Noskine" target="_blank">
             <div className='stack'>
               <FaGithub/>
             </div>
           </Link>
           <Link to="https://www.linkedin.com/in/heys0nay/" target="_blank">
             <div className='stack'>
               <FaLinkedin/>
             </div>
           </Link>
         </Social>
       </section>
     </Container>
   </>
  );
}
