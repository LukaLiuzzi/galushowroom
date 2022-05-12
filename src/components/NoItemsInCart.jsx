import React from 'react';
import { Link } from 'react-router-dom';
import { GoToCatalogue } from './Buttons';

export default function NoItemsInCart() {
	return (
		<div className='flex items-center flex-col min-height-100 px-2'>
			<h3 className='text-4xl font-bold text-secondary'>
				No hay items en el carrito
			</h3>
			<p className='my-4 font-bold text-2xl text-secondary'>
				Que estas esperando para comprar?
			</p>
			<Link to='/'>
				<GoToCatalogue text='Ir al catalogo' />
			</Link>
		</div>
	);
}
