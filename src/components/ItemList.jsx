import React from 'react';

export default function ItemList({ el }) {
	const { name, price, image, stock, description } = el;
	return (
		<div className='col-span-1'>
			<div className=''>
				<img src={image} alt={name} className='w-full h-96 object-cover' />
			</div>
			<div className='bg-amber-500 shadow-md overflow-hidden'>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl'>{name}</div>
					<p className='font-bold text-xl'>${price}</p>
					<div>
						<p className='text-gray-800'>{description}</p>
						<p className='text-gray-800'>Stock: {stock}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
