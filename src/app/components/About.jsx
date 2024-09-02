// aqui seria o import da imagem
// mudar o about text
import Image from "next/image";
import foto from "@/app/images/Praia-sentado.jpeg";
import styles from "@/app/styles/About.modules.css";
const About = () => {
  return (
    <div id="About" className="about-container">
      <h2>Sobre mim:</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            {/* Como desenvolvedor, sempre fui apaixonado por criar soluções elegantes e eficazes para problemas complexos. Tenho uma base sólida em desenvolvimento de software, com foco em tecnologias da Web, como HTML, CSS e JavaScript. Gosto de trabalhar tanto no front-end quanto no back-end de aplicativos e estou sempre procurando maneiras de otimizar o desempenho, melhorar a experiência do usuário e garantir o mais alto nível de qualidade de código. */}
            Como aspirante a desenvolvedor, sou apaixonado por criar soluções
            elegantes e eficazes para problemas complexos. Estou construindo uma
            base sólida em desenvolvimento de software, com foco em tecnologias
            da Web, como HTML, CSS e JavaScript. Tenho um grande interesse em
            trabalhar no front-end de aplicativos e estou sempre procurando
            maneiras de otimizar o desempenho, melhorar a experiência do usuário
            e garantir a qualidade do código.
          </p>
          <p>
            {/* Ao longo da minha carreira, trabalhei em uma ampla gama de projetos, desde sites estáticos simples até aplicativos complexos de nível empresarial. Tenho experiência em trabalhar com uma variedade de ferramentas e estruturas de desenvolvimento, incluindo React, Angular, Vue.js, Node.js e Laravel. Estou sempre ansioso para aprender e explorar novas tecnologias e busco constantemente oportunidades para aprimorar minhas habilidades e conhecimentos. */}
            Apesar de estar no início da minha carreira, estou dedicando meu
            tempo para aprender e praticar com diversos projetos pessoais. Estou
            explorando ferramentas e estruturas de desenvolvimento, incluindo
            React e Next.js. Sou motivado pelo desejo de aprender e explorar
            novas tecnologias, e busco constantemente oportunidades para
            aprimorar minhas habilidades e conhecimentos.
          </p>
        </div>
        <div className="about-img">
          <Image src={foto} className="profile-img" width={300} height={500} />
        </div>
      </div>
    </div>
  );
};

export default About;
