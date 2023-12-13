import { Link } from "react-router-dom";
import { Header } from "../../componets/Header";
import "./Home.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from "../../componets/Footer";

export default function Home() {
  return (
    <>
      <div className="blur1"></div>
      <div className="blur2"></div>
      <div id="container">
        <Header />
        <section id="readline">
          <div className="title">
            <h1>I'm <span className="gradient">fullstack</span> developer</h1>
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
        <Link id="down" to="#stacks"><HiOutlineChevronDown/></Link>
        <section id="stacks">
          
        </section>
        <Footer />
      </div>
    </>
  );
}
