import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Readline.css"

export function Readline() {
  return (
    <>
      <section id="readline">
        <div className="title">
          <h1>
            I'm <span className="gradient">fullstack</span> developer
          </h1>
          <p>Go and nodejs development</p>
          <br />
          <Link to="/" className="button-contat">
            Contact
          </Link>
        </div>
        <div className="social">
          <nav>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaLinkedin />
            </Link>
            <Link to="/">
              <FaGithub />
            </Link>
          </nav>
        </div>
      </section>
      <span id="down">
        <HiOutlineChevronDown />
      </span>
    </>
  );
}
