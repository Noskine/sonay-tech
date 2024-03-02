import {Container} from "./styles.ts";
import {Header} from "../../components/Header";
import {Link} from "react-router-dom";
import {FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp} from "react-icons/fa6";
import {Footer} from "../../components/Footer";
import {useLayoutEffect} from "react";

import {gsap} from "gsap";

export function Linktree() {
    
    useLayoutEffect(() => {
        gsap.fromTo(".profile_image", {opacity:0.5, duration: 1}, {opacity: 1, duration: 1});
        gsap.fromTo(".texts", {x:-50, opacity:0.5 }, {x: 0, opacity: 1});
        gsap.fromTo("header", {y:-50, duration: 1}, {y: 0, duration: 1})
    }, []);
    
    return (
        <Container>
            <Header />
            <main>
                <section id="waysMain">
                    <section className="profile">
                        <img src="https://pbs.twimg.com/profile_images/1536439122071543809/te3tUMT0_400x400.jpg"
                             alt="twitter_hey_sonay_photo" className="profile_image" />
                        <div className="texts">
                            <h2>Enikson Sonay</h2>
                            <h3>Desenvolvedor web & Golang</h3>
                            <p>Enikson Sonay é um desenvolvedor web e especialista em Golang, graduado pelo Instituto Metrópole Digital - IMD/UFRN. Desde os 10 anos, sua paixão pelos jogos o inspirou a criar sites e canais no YouTube. Embora sua carreira como criador de jogos não tenha decolado, sua jornada é marcada por aprendizado constante e aprimoramento de habilidades em programação, edição e motion graphics. Determinado a trazer um toque único aos projetos digitais, ele continua sua jornada de criação, buscando novas formas de inovar e colaborar.</p>
                        </div>
                    </section>
                    <nav>
                        <ul>
                            <li>
                                <Link to="">
                                    <button className="button-icon">
                                        <i>
                                            <FaWhatsapp/>
                                        </i>
                                        WhatsApp
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className="button-icon">
                                        <i>
                                            <FaLinkedin/>
                                        </i>
                                        Linkedin
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className="button-icon">
                                        <i>
                                            <FaInstagram/>
                                        </i>
                                        Instagram
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className="button-icon">
                                        <i>
                                            <FaTwitter/>
                                        </i>
                                        Twitter
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </main>
            <Footer/>
</Container>
)
}