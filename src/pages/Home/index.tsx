import { Header } from "../../componets/Header";
import { AboutMe } from "../../componets/AboutMe";
import { Readline } from "../../componets/Readline";
import { Footer } from "../../componets/Footer";
import "./Home.css";
import { Container } from "../../componets/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Readline />
        <AboutMe />
        <Footer />
      </Container>
    </>
  );
}
