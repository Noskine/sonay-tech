import './header.css'
import logo from '../../assets/sonaytechlogo.svg'
import { FaGithub, FaAlignJustify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Header() {
  return (
    <header>
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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Projects</a>
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
    </header>
  );
}
