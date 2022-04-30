import React from 'react';
import { Link } from 'react-router-dom';
import { BlackAndWhiteBtn } from './Buttons';

export default function Item({ el }) {
	const { name, price, img } = el;
	const productId = el.id;
	return (
		<>
			<Link to={`/item/${productId}`}>
				<div>
					<div>
						<img src={img} alt={name} className='w-full h-96 object-cover' />
					</div>
					<div className='shadow-md overflow-hidden'>
						<div className='px-6 py-4'>
							<div className='font-bold text-xl uppercase'>{name}</div>
							<p className='font-bold text-xl'>${price}</p>
						</div>
						<div className='flex justify-center items-center'>
							<BlackAndWhiteBtn text='Ver producto' />
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
