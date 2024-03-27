import { useParams } from "react-router";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface RequestTypeLayout {
  ID: string;
  Title: string;
  Text: string;
  Author: string;
  Image: string;
  Like: number;
  Create_at: string;
}

export function Publications() {
  const { id } = useParams<{ id: string }>();
  const [render, setRender] = useState<RequestTypeLayout>([]);

  useEffect(() => {
    axios
      .get(`https://pilot-portfolio.onrender.com/api/publications/by?id=${id}`)
      .then((res) => {
        setRender(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div key={render.ID}>
      <Header />
      <section id="mainStyleBlog">
        <Link to="/blog" className="back">
          Voltar ao Blog
        </Link>
        <h1>{render.Title}</h1>
        <h2>Da economia a aquicultura potiguar</h2>
        <img src={render.Image} alt="foto de um gopher" id="PhotoPexels" />
        <span className="fonte-photo">Image: Pexels</span>
        <p>{render.Text}</p>
      </section>
      <Footer />
    </div>
  );
}
