// criar um button para mudar o idioma

import Head from 'next/head';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/footer';
import Navbar from './components/navbar';


const Home = () => {
	return (
		<>
			<Head>
				<title>Mauricio's Portfolio</title>
				<meta name="description" content="Mauricio's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="favicon.jpeg" />
								
			</Head>
			
			<div>
				{/* mudei aqui */}
				<Navbar/>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<Footer/>
				
			</div>
		</>
	);
};

export default Home;