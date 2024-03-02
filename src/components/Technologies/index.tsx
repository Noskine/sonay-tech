import {Container} from "./styles.ts";
import {SiJquery, SiMongodb, SiSvelte, SiTailwindcss, SiVite} from "react-icons/si";
import {FaCss3, FaDocker, FaGolang, FaNodeJs, FaReact} from "react-icons/fa6";
import {BiLogoPostgresql, BiLogoTypescript} from "react-icons/bi";
import React, {useState} from "react";

const valuesDescriptions = [
    {
      title: "vite",
      description: "Vite é uma poderosa ferramenta de desenvolvimento de front-end que oferece uma experiência de desenvolvimento rápida e eficiente. Sua arquitetura de construção de pacotes baseada em ES Module permite tempos de inicialização ultra-rápidos durante o desenvolvimento, enquanto sua integração perfeita com frameworks como Vue.js, React e Svelte oferece suporte completo para o desenvolvimento moderno de aplicativos da web. Com recursos como Hot Module Replacement, suporte a TypeScript, pré-processadores CSS e otimização de produção, o Vite simplifica o processo de desenvolvimento e ajuda os desenvolvedores a criar aplicativos da web de alto desempenho de maneira mais eficaz.",
    },
    {
        title: "react",
        description: "O React é uma biblioteca JavaScript criada inicialmente pela equipe do facebook, usada para criar interfaces de usuário interativas em aplicativos da web. Ele destaca-se por sua abordagem de componentização, onde as partes da interface são construídas como componentes reutilizáveis. O React utiliza um Virtual DOM para otimizar as atualizações de UI, e sua sintaxe JSX torna a escrita de código mais legível. A unidirecionalidade de dados e um ecossistema robusto de ferramentas são outros aspectos que contribuem para sua popularidade. Em resumo, o ReactJS simplifica o desenvolvimento de interfaces dinâmicas e modernas na web.",
    },
    {
        title: "svelte",
        description: "O Svelte é uma estrutura front-end que se destaca por sua abordagem de compilação eficiente. Ao contrário de outros frameworks, o Svelte converte código fonte em JavaScript otimizado durante a compilação, resultando em aplicativos mais leves e rápidos. Sua sintaxe simples e familiar, inspirada no HTML, CSS e JavaScript padrão, facilita o aprendizado e o uso. Em suma, o Svelte simplifica o desenvolvimento de interfaces de usuário reativas em aplicações da web, oferecendo uma abordagem inovadora e eficaz."
    },
    {
        title: "CSS - Version 3",
        description: "CSS3 é a terceira versão do Cascading Style Sheets, introduzindo recursos avançados como seletores, Media Queries para layouts responsivos, Flexbox e Grid Layout para layouts flexíveis e precisos, transições e animações para efeitos visuais suaves, e transformações 2D/3D para criar elementos com aparência mais dinâmica. Esses recursos ampliam as capacidades de estilização e layout na web, permitindo experiências mais ricas e interativas para os usuários."
    },
    {
        title: "Tailwindcss",
        description: "Tailwind CSS é um framework de estilo utilitário que simplifica a criação de interfaces de usuário (UI) personalizadas em aplicativos da web. Em vez de fornecer componentes pré-projetados, o Tailwind CSS oferece uma coleção extensa de classes CSS de baixo nível, cada uma representando uma única propriedade de estilo. Isso permite que os desenvolvedores criem estilos personalizados rapidamente, aplicando classes diretamente aos elementos HTML em seus projetos. O Tailwind CSS é altamente configurável, permitindo que os desenvolvedores personalizem facilmente seu conjunto de classes para atender às necessidades específicas de seus projetos. Com sua abordagem de estilo utilitário, o Tailwind CSS oferece uma maneira eficiente e flexível de desenvolver interfaces de usuário exclusivas e responsivas."
    },
    {
        title: "jquery",
        description: "jQuery é uma popular biblioteca de JavaScript que simplifica a manipulação do DOM, eventos, animações e requisições Ajax em páginas web. Com uma sintaxe simplificada e uma ampla gama de funcionalidades, o jQuery foi amplamente utilizado para lidar com inconsistências entre navegadores e facilitar tarefas comuns de desenvolvimento web. Embora seu uso tenha diminuído com o avanço de tecnologias nativas do navegador, ainda é uma ferramenta útil para suporte a navegadores mais antigos e desenvolvimento rápido de aplicações web."
    },
    {
        title: "typescript",
        description: "TypeScript é um superset de JavaScript que adiciona tipagem estática opcional e outros recursos de linguagem para tornar o desenvolvimento de aplicativos JavaScript mais seguro e escalável. Ele suporta interfaces, tipos avançados, e é totalmente compatível com JavaScript, o que o torna uma escolha popular para projetos grandes e complexos. Com uma integração sólida com ferramentas de desenvolvimento e melhorias na manutenção do código, o TypeScript é amplamente utilizado na comunidade de desenvolvimento web"
    },
    {
        title: "docker",
        description: "Docker é uma plataforma que utiliza contêineres para empacotar aplicativos com suas dependências, garantindo consistência e portabilidade. O Dockerfile é usado para criar imagens Docker, e ferramentas como Docker Swarm e Kubernetes facilitam a orquestração em ambientes de produção. Com uma interface simples, o Docker simplifica o desenvolvimento, teste e implantação de aplicativos."
    },
    {
        title: "Go - Golang",
        description: "Go, também conhecido como Golang, é uma linguagem de programação open-source desenvolvida pela Google, lançada em 2009. Destaca-se por sua eficiência, desempenho e suporte nativo à concorrência. Sua sintaxe é simples e legível, facilitando o desenvolvimento e manutenção do código. Com o suporte a goroutines e canais, Go é ideal para construir sistemas concorrentes e distribuídos. Além disso, a linguagem possui um conjunto de padrões de codificação bem definidos, promovendo a consistência e legibilidade do código. O compilador Go é rápido e eficiente, gerando binários independentes que facilitam a implantação do software em diferentes ambientes. O ecossistema de ferramentas e bibliotecas em constante crescimento oferece suporte para uma variedade de casos de uso, desde desenvolvimento web até computação de alto desempenho. No geral, Go é uma linguagem poderosa e versátil, adequada para uma ampla gama de aplicativos, desde pequenos utilitários até sistemas distribuídos em larga escala."
    },
    {
        title: "Nodejs",
        description: "Node.js é um ambiente de execução JavaScript construído sobre o motor V8 do Google Chrome. Ele permite que os desenvolvedores usem JavaScript para criar aplicativos do lado do servidor. Destaca-se por sua arquitetura orientada a eventos e assíncrona, que permite lidar com um grande número de solicitações de forma eficiente. Node.js é conhecido por sua escalabilidade e desempenho, sendo amplamente utilizado em aplicativos web em tempo real, APIs RESTful, microsserviços e outras aplicações de alta demanda. Além disso, o Node.js possui um vasto ecossistema de pacotes npm, que oferece uma variedade de módulos e bibliotecas para facilitar o desenvolvimento de aplicativos. Sua popularidade é impulsionada pela sua capacidade de compartilhar código entre o lado do cliente e do servidor, bem como pela sua capacidade de desenvolver aplicativos de forma rápida e eficiente. Node.js é uma escolha popular entre os desenvolvedores para construir aplicativos escaláveis e em tempo real."
    },
    {
        title: "Postgresql",
        description: "O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua confiabilidade, robustez e conformidade com os padrões ANSI SQL. Ele oferece suporte a uma variedade de recursos avançados, incluindo transações ACID, replicação, indexação avançada e suporte a JSON. O PostgreSQL é altamente extensível, permitindo aos usuários criar funções e tipos de dados personalizados. Além disso, sua comunidade ativa contribui regularmente com novos recursos e melhorias. O PostgreSQL é amplamente utilizado em uma variedade de cenários, desde pequenos aplicativos até grandes empresas, devido à sua capacidade de lidar com grandes volumes de dados e oferecer desempenho consistente. Sua flexibilidade e escalabilidade o tornam uma escolha popular entre os desenvolvedores e organizações que procuram um banco de dados confiável e poderoso."
    },
    {
        title: "MongoDb",
        description: "O MongoDB é um banco de dados NoSQL de código aberto, altamente escalável e orientado a documentos. Ele armazena dados em documentos JSON flexíveis, o que permite uma modelagem de dados mais dinâmica e adaptável. O MongoDB é conhecido por sua facilidade de uso, escalabilidade horizontal e flexibilidade de esquema, tornando-o ideal para aplicativos que lidam com grandes volumes de dados semi-estruturados ou não estruturados. Ele oferece suporte a consultas ricas e poderosas, incluindo consultas geoespaciais e agregações, facilitando a análise e manipulação de dados complexos. Com uma comunidade ativa e uma vasta gama de ferramentas e recursos, o MongoDB é amplamente utilizado em uma variedade de cenários, desde aplicativos da web até análise de big data e Internet das Coisas (IoT)."
    },
]


export function Technologies() {
    const [title, setTitle] = useState("Descrição")
    const [description, setDescription] = useState("~ Ao passar o mouse por cima das tecnologias veja suas descrições e curiosidades! ~")
    
    const handlerMouseEvent: React.MouseEventHandler = (event) => {
        // @ts-ignore
        setTitle(event.target.getAttribute("data-title"))
        // @ts-ignore
        setDescription(event.target.getAttribute("data-content"))
    };
    
    return (
        <Container>
            <h2>Tecnologias</h2>
            <section id="sectionTechnologies">
                <div className="description-technologies">
                    <h3>{title}</h3>
                    <hr/>
                    <p>{description}</p>
                </div>
                <div className="tecnologies-containers">
                    <div
                        data-title={valuesDescriptions[0].title}
                        data-content={valuesDescriptions[0].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <SiVite/>
                    </div>
                    <div
                        data-title={valuesDescriptions[1].title}
                        data-content={valuesDescriptions[1].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <FaReact/>
                    </div>
                    <div
                        data-title={valuesDescriptions[2].title}
                        data-content={valuesDescriptions[2].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <SiSvelte/>
                    </div>
                    <div
                        data-title={valuesDescriptions[3].title}
                        data-content={valuesDescriptions[3].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <FaCss3/>
                    </div>
                    <div
                        data-title={valuesDescriptions[4].title}
                        data-content={valuesDescriptions[4].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <SiTailwindcss/>
                    </div>
                    <div
                        data-title={valuesDescriptions[5].title}
                        data-content={valuesDescriptions[5].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <SiJquery/>
                    </div>
                    <div
                        data-title={valuesDescriptions[6].title}
                        data-content={valuesDescriptions[6].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <BiLogoTypescript/>
                    </div>
                    <div
                        data-title={valuesDescriptions[7].title}
                        data-content={valuesDescriptions[7].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <FaDocker/>
                    </div>
                    <div
                        data-title={valuesDescriptions[8].title}
                        data-content={valuesDescriptions[8].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <FaGolang/>
                    </div>
                    <div
                        data-title={valuesDescriptions[9].title}
                        data-content={valuesDescriptions[9].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <FaNodeJs/>
                    </div>
                    <div
                        data-title={valuesDescriptions[10].title}
                        data-content={valuesDescriptions[10].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <BiLogoPostgresql/>
                    </div>
                    <div
                        data-title={valuesDescriptions[11].title}
                        data-content={valuesDescriptions[11].description}
                        onMouseEnter={handlerMouseEvent}
                        className="tecnologies-container"
                    >
                        <SiMongodb/>
                    </div>
                </div>
            </section>
        </Container>
    )
}