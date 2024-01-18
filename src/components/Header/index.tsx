import { StyleHeader } from './styles';
import logo from '../../assets/sonaytechlogo.svg';
import { FaGithub, FaAlignJustify } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Header() {
  return (
    <StyleHeader>
      <section id="container-header">
        <section className='header-logotipo'>
          <img src={logo} alt="logotipo sonay tech" id='logo-header' />
          <section>
            <p id='sonay' >Sonay</p>
            <p id='webD'>Web developer</p>
          </section>
        </section>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <a href="#">Experiência</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <hr />
            <li>
              <a href="#">
                <i>
                  <FaGithub />
                </i>
              </a>
            </li>
            <hr />
            <li>
              <a href="#">
                <i>
                  <FaXTwitter />
                </i>
              </a>
            </li>
          </ul>
        </nav>
        <button id='menu'>
          <FaAlignJustify />
        </button>
      </section>
    </StyleHeader>
  );
}
