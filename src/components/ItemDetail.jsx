import React from 'react';

export default function ItemDetail({ product }) {
	const { name, price, image, stock, description } = product;
	return (
		<div className='container mx-auto flex justify-between items-center gap-4'>
			<div className='col-span-1'>
				<div className=''>
					<img src={image} alt={name} className='w-full h-96 object-cover' />
				</div>
				<div className='bg-amber-300 shadow-md overflow-hidden'>
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
		</div>
	);
}
