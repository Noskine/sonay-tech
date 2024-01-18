import { Credits } from "./styles";

export function Footer() {
  return (
    <footer>
      <Credits>
        <p>&copy; 2024 Enikson Sonay. All rights reserved</p>
        <nav>
          <a href="/">Terms & Conditions</a>
          <span> | </span>
          <a href="/">Privacy Policy</a>
          <span> | </span>
          <a href="https://github.com/Noskine/sonay-tech">Source Code</a>
        </nav>
      </Credits>
    </footer>
  );
}
