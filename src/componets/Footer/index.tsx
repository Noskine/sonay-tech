import { Link } from "react-router-dom";
import "./Footer.css"
export function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Enikson Sonay. All rights reserved</p>
      <nav>
        <Link to="/">Terms & Conditions</Link>
        <span>|</span>
        <Link to="/">Privacy Policy</Link>
        <span>|</span>
        <Link to="/">Sitemap</Link>
      </nav>
    </footer>
  );
}
