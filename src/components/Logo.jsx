import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logorockanddolls.png';

export default function Logo() {
	return (
		<Link to='/' className='flex items-center flex-col'>
			<img src={logo} className='h-6 sm:h-9' alt='RockAndDolls Logo' />
			<span className='self-center text-md font-semibold whitespace-nowrap'>
				Nos apasiona la moda
			</span>
		</Link>
	);
}
