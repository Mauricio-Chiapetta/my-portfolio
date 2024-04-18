import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>Sobre mim:</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    Como desenvolvedor, sempre fui apaixonado por criar soluções elegantes e eficazes para problemas complexos. Tenho uma base sólida em desenvolvimento de software, com foco em tecnologias da Web, como HTML, CSS e JavaScript. Gosto de trabalhar tanto no front-end quanto no back-end de aplicativos e estou sempre procurando maneiras de otimizar o desempenho, melhorar a experiência do usuário e garantir o mais alto nível de qualidade de código.

                    </p>
                    <p>Ao longo da minha carreira, trabalhei em uma ampla gama de projetos, desde sites estáticos simples até aplicativos complexos de nível empresarial. Tenho experiência em trabalhar com uma variedade de ferramentas e estruturas de desenvolvimento, incluindo React, Angular, Vue.js, Node.js e Laravel. Estou sempre ansioso para aprender e explorar novas tecnologias e busco constantemente oportunidades para aprimorar minhas habilidades e conhecimentos.</p>
                </div>
                <div className="about-img">
                    {/* mudar imagem */}
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;