// mudar o title,description e githublink para os meus projetos e colocar um link para poder abrir o projeto real
import velha from '@/app/images/jogoDaVelha.png'
import calculadora from '@/app/images/calculator.png'

// arrumar imagens

export const projectData = [
	{
		id: 1,
		title: 'Calculadora',
		description:
			'Calculadora simples feito em Html , Css , Javascript',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/calculadora-js',
		liveDemo: 'https://calculadora-js-lac.vercel.app/',
		imagem: calculadora


	},
	{
		id: 2,
		title: 'tic tac toe',
		description:
			'Jogo da velha com interface simples com o objetivo de estudo usando html,css e Javascript.',
		gitHubLink: 'https://github.com/Mauricio-Chiapetta/tictactoe-js',
		liveDemo: 'https://tictactoe-js-uvqf-e2dlxv8gl-mauriciochiapettas-projects.vercel.app/',
		imagem: velha
	},
	// colocar mais projetos e imagens

];