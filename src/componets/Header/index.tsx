import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

export function Header() {
  const [mobileMenu, setMobileMenu] = useState("");

  const mouseEventClickLinks = () => {
    if (mobileMenu === "") {
      setMobileMenu("add");
    } else {
      setMobileMenu("");
    }
  };

  return (
    <>
      <header>
        <img 
          src={logo} 
          alt="logo_fullstack_dev" 
          id="logo" 
        />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-me">About me</Link>
          <Link to="/">Articles</Link>
          <Link to="/" className="btn-contact">
            Contact
          </Link>
        </nav>
        <button
          className="bnt-menu"
          onClick={() => {
            mouseEventClickLinks();
          }}
        >
          <HiMenuAlt3 />
        </button>
      </header>
      <aside className={`${mobileMenu} hidden`}>
        <div>
          <button
            className="bnt-menu-open"
            onClick={() => {
              mouseEventClickLinks();
            }}
          >
            <HiMenuAlt2 />
          </button>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-me">About me</Link>
          <Link to="/">Articles</Link>
          <Link to="/">Contact</Link>
        </nav>
      </aside>
    </>
  );
}
