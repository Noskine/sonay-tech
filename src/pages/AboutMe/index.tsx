import { Link } from "react-router-dom";
import Footer from "../../componets/Footer";
import { Header } from "../../componets/Header";
import "./AboutMe.css";

export function AboutMe() {
  return (
    <>
      <div id="container">
        <Header />
        <main>
            <img src="https://avatars.githubusercontent.com/u/112139254?v=4" alt="profile enikson github" />
            <section>
              <h1>Great pleasure! I'm Enikson</h1>
              <h2>Muito prazer! Sou Enikson</h2>
              <p>Eu sou um entusiasta da programação e um programador Full Stack, Técnico pelo Instituto Metrópole Digital da UFRN e atualmente estou focado em expandir meu conhecimento em diversas áreas da tecnologia.</p>
              <p>Desde criança, sou fissurado por tecnologia. Muitas vezes, tentei criar sites para canais do YouTube que eu tentava desenvolver para mim ou para meus amigos. Isso me fez desenvolver habilidades com HTML e CSS, além de edição de vídeos e fotos, o que até hoje é um hobby e uma maneira de ganhar alguns trocados.</p>
            </section>
        </main>
        <p id="p">Com 12 anos, eu já criava páginas na web sobre Minecraft ou League of Legends, que eram meus jogos favoritos. No entanto, por não ter recursos para estudar e não compreender completamente o que estava fazendo, afastei-me da "programação" por 3 anos. Nessa idade, eu pensava que HTML e CSS eram linguagens de programação e me considerava um hacker.</p>
        
        <p>Até que, em 2021, retornei depois que um amigo mencionou que estava fazendo um curso de programação online. Foi nesse momento que realmente comecei a estudar para ajudá-lo com JavaScript. Em agosto de 2022, acabei ingressando por acaso em um curso de informática, acreditando que duraria apenas algumas semanas. No primeiro encontro, percebi que todo o conteúdo que eu estava estudando por conta própria estava lá, e o melhor, com uma sólida base matemática e informática para manutenção e redes de computadores, conceitos que, até então, eu nem sabia o que eram.</p>

        <h2>IMDTEC</h2>

        <p>O IMD abriu minha mente, permitindo-me conhecer novos mundos, mentes e pensamentos. Fiz novos amigos e colegas com quem trabalhei em projetos reais, e realmente me senti bem. Foi desafiador, o curso demandava bastante tempo e neurônios. Conciliar tudo isso com o ensino médio em reforma foi uma aventura desafiadora.</p>

        <p>Aquelas páginas simples em HTML e CSS hoje se tornaram APIs, documentações, livros e sistemas. Pensar que tudo começou como uma brincadeira é, sem dúvida, o que pretendo fazer da minha vida.</p>

        <Link to={"https://imdtec.imd.ufrn.br"} id="imdTec">Instituto Metróple Digital</Link>
        <Footer />
      </div>
    </>
  );
}
