import {Aside, StyleHeader} from './styles';
import logo from '../../assets/sonaytechlogo.svg';
import {FaGithub} from 'react-icons/fa';
import {FaAlignLeft, FaXTwitter} from 'react-icons/fa6';
import {Link} from "react-router-dom";
import {Footer} from "../Footer";
import {useRef} from "react";

export function Header() {
  const Menu = useRef(null);
  
  const handleClick = () => {
    // @ts-ignore
    Menu.current.classList.toggle('active');
  }
  
  return (
      <StyleHeader>
        <section id="container-header">
          <section className='header-logotipo'>
            <Link to="/">
              <img src={logo} alt="logotipo sonay tech" id='logo-header'/>
            </Link>
            <section>
              <p id='sonay'>Sonay</p>
              <p id='webD'>Web developer</p>
            </section>
          </section>
          <nav>
            <ul>
              <li>
                <a href="#about">Sobre mim</a>
              </li>
              <li>
                <a href="#technologies">Tecnologias</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <hr />
              <li>
                <Link to="https://github.com/Noskine" target="_blank">
                  <i>
                    <FaGithub/>
                  </i>
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="https://twitter.com/hey_sonay_" target="-blank">
                  <i>
                    <FaXTwitter/>
                  </i>
                </Link>
              </li>
            </ul>
          </nav>
          <button id='menu' onClick={handleClick}>
            <FaAlignLeft />
          </button>
          <Aside ref={Menu}>
            <menu>
              <ul>
                <li>
                  <a href="#about">Sobre mim</a>
                </li>
                <li>
                  <a href="#technologies">Tecnologias</a>
                </li>
                <li>
                  <a href="#">Projetos</a>
                </li>
                <hr/>
                <li className="buttons-social">
                  <Link to="https://github.com/Noskine" target="_blank">
                    <i>
                      <FaGithub/>
                    </i>
                    Github
                  </Link>
                </li>
                <li className="buttons-social">
                  <Link to="https://twitter.com/hey_sonay_" target="-blank">
                    <i>
                      <FaXTwitter/>
                    </i>
                    Twitter
                  </Link>
                </li>
              </ul>
            </menu>
            <Footer/>
          </Aside>
        </section>
      </StyleHeader>
  );
}
