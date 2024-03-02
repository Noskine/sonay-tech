import {ContainerButtons, Readline, Text} from './styles'
import {FaGithub} from "react-icons/fa6";
import Element from "../../assets/SVG/el1.svg";
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header'
import {AboutMe} from '../../components/AboutMe';
import {Technologies} from "../../components/Technologies";

import {useLayoutEffect} from "react";
import * as gsap from "gsap";
import {Link} from "react-router-dom";

export default function Home() {
  
  useLayoutEffect(() => {
    const g =  gsap;
    
    g.gsap.fromTo(".impact", {opacity:0, duration: 1 }, {opacity: 1, duration: 1})
    
    g.gsap.fromTo(".element", {x: 100, opacity: 0, duration: 1.5}, {x: 0, opacity: 1, duration: 1})
    
    g.gsap.fromTo("header", {y:-50, duration: 1}, {y: 0, duration: 1})
  }, []);
  
  return (
    <div>
      <Header />
      <main>
        <Readline>
          <Text>
            <span className='impact'>Criando soluções web de ponta a ponta</span>
            <h1>Desenvolvedor web Golang & javascript</h1>
            <p id='descript'>Construindo aplicações web, um código por vez: Explorando & Excedendo!</p>
            <ContainerButtons>
              <Link to="/ways">
                <button className='button-readline button-hover'>
                  Entre em contato comigo!
                </button>
              </Link>
              <Link to="https://github.com/Noskine" target="_blank">
                <button className='button-github button-readline'>
                  <FaGithub/>
                  Github
                </button>
              </Link>
            </ContainerButtons>
          </Text>
          <img src={Element} alt="" id="element-readline" className="element" />
        </Readline>
        <AboutMe />
        <Technologies />
        <Footer/>
      </main>
    </div>
  )
}

