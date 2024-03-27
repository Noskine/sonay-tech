import { useParams } from "react-router";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export function Publications() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Header />
      <section id="mainStyleBlog">
        <Link to="/blog" className="back">
          Voltar ao Blog
        </Link>
        <h1>O poder que está nas mãos dos potigures</h1>
        <h2>Da economia a aquicultura potiguar</h2>
        <img
          src="https://images.pexels.com/photos/4106525/pexels-photo-4106525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="foto de um gopher"
          id="PhotoPexels"
        />
        <span className="fonte-photo">Image: Pexels</span>
      </section>
      <Footer />
    </div>
  );
}
