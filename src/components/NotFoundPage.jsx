import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/pageNotFound.json';

const options = {
	animationData: pageNotFound,
	loop: true,
	autoplay: true,
	style: {
		width: '100%',
		height: '800px',
	},
};

export default function NotFoundPage() {
	return (
		<>
			<div className='flex justify-center flex-col items-center'>
				<h1>Pagina no encontrada</h1>
				<Link to='/'>
					<button>Ir al inicio</button>
				</Link>
			</div>
			<Lottie {...options} />
		</>
	);
}
