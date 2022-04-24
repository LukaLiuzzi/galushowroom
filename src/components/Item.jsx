import React from 'react';
import { Link } from 'react-router-dom';
import { TealToLime } from './Buttons';

export default function Item({ el }) {
	const { name, price, img } = el;
	const productId = el.id;
	return (
		<div className='col-span-1'>
			<div className=''>
				<img src={img} alt={name} className='w-full h-96 object-cover' />
			</div>
			<div className='bg-amber-400 shadow-md overflow-hidden'>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl'>{name}</div>
					<p className='font-bold text-xl'>${price}</p>
				</div>
				<div className='flex justify-center items-center'>
					<Link to={`/item/${productId}`}>
						<TealToLime text='Ver Producto' />
					</Link>
				</div>
			</div>
		</div>
	);
}
