import "./AboutMe.css";

export function AboutMe() {
  return (
    <>
        <main id="container-about">
          <img
            src="https://avatars.githubusercontent.com/u/112139254?v=4"
            alt="profile enikson github"
          />
          <section>
            <h3 className="style-about-h3">Sobre mim</h3>
            <h1 className="name">Enikson Sonay</h1>
            <p className="sub-about">Golang & Javascript developer</p>
            <section className="text-about">
            <p>
              Programador Full Stack técnico
              pelo Instituto Metrópole Digital da UFRN. Desde a infância,
              apaixonei-me por tecnologia, criando páginas em HTML e CSS para
              canais no YouTube. Após um breve afastamento, retornei em 2021,
              focando em JavaScript para ajudar um amigo.
            </p>
            <p>
              Em agosto de 2022, inscrevi-me por acaso em um curso de
              informática, surpreendendo-me com a sólida base em matemática e
              informática. O IMD ampliou meus horizontes, proporcionando
              desafios e amizades.
            </p>
            <p>
              De páginas simples em HTML e CSS na infância, evolui para
              programação Full Stack. A jornada começou como uma brincadeira,
              agora é minha vida.
            </p>
            </section>
          </section>
        </main>
    </>
  );
}
