// mudar o title,description e githublink para os meus projetos e colocar um link para poder abrir o projeto real
import velha from '@/app/images/jogoDaVelha.png'
import calculadora from '@/app/images/calculator.png'
import todo from '@/app/images/todoApp.png'
import landingPage from '@/app/images/TechConference.png'
import darkSaas from '@/app/images/darkSaas.png'
// arrumar imagens

export const projectData = [
	{
		id: 2,
		title: 'Saas Landing page',
		description: 'UI design retirado do figma. Tecnologias usadas no projeto: Nextjs,Framer Motion e Tailwind css',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/dark-sass-landing-page',
		liveDemo: 'https://dark-sass-landing-page.vercel.app/',
		imagem: darkSaas
	},

	{
		id: 2,
		title: 'Todo App',
		description: 'Todo App utilizando React, Vite e Tailwindcss',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/TodoApp-w-tailwindcss',
		liveDemo: 'https://todo-app-w-tailwindcss.vercel.app/',
		imagem: todo

	},
	{
		id: 3,
		title: 'Landing Page',
		description:
			'Landing page criada para uma conferência Tech! O site possui um modo claro e um modo escuro, e é aplicado de acordo com a preferência do sistema do usuário , foi utilizado nesse projeto Reactjs e TailwindCss',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/ex6-websiteResponsivo',
		liveDemo: 'https://techconference-landingpage.vercel.app/',
		imagem: landingPage
	},
	{
		id: 4,
		title: 'Calculadora',
		description:
			'Calculadora simples feito em Html , Css , Javascript',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/calculadora-js',
		liveDemo: 'https://calculadora-js-lac.vercel.app/',
		imagem: calculadora


	},
	{
		id: 5,
		title: 'tic tac toe',
		description:
			'Jogo da velha com interface simples com o objetivo de estudo usando html,css e Javascript.',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/tictactoe-js',
		liveDemo: 'https://tictactoe-js-uvqf-e2dlxv8gl-mauriciochiapettas-projects.vercel.app/',
		imagem: velha
	}
];