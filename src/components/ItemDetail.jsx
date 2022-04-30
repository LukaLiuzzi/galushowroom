import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
	const { name, price, img, stock } = product;

	const [quantity, setQuantity] = useState(1);
	const [totalItems, setTotalItems] = useState(0);

	function onAdd(quantity) {
		setTotalItems(quantity);
	}

	function handleAddQuantity() {
		if (quantity < stock) {
			setQuantity(quantity + 1);
		} else {
			alert(
				'No hay stock suficiente, podes agregar hasta ' + stock + ' unidades'
			);
		}
	}

	function handleRemoveQuantity() {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	return (
		<section className='text-gray-700 body-font overflow-hidden bg-white'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap'>
					<img
						alt={name}
						className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
						src={img}
					/>
					<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
						<h2 className='text-sm title-font text-gray-500 tracking-widest uppercase'>
							Rock And Dolls
						</h2>
						<h1 className='text-gray-900 text-3xl title-font font-medium mb-1 uppercase'>
							{name}
						</h1>
						<div className='flex mb-4'>
							<span className='flex items-center'>
								<svg
									fill='currentColor'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-4 h-4 text-red-500'
									viewBox='0 0 24 24'
								>
									<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
								</svg>
								<svg
									fill='currentColor'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-4 h-4 text-red-500'
									viewBox='0 0 24 24'
								>
									<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
								</svg>
								<svg
									fill='currentColor'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-4 h-4 text-red-500'
									viewBox='0 0 24 24'
								>
									<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
								</svg>
								<svg
									fill='currentColor'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-4 h-4 text-red-500'
									viewBox='0 0 24 24'
								>
									<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
								</svg>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-4 h-4 text-red-500'
									viewBox='0 0 24 24'
								>
									<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
								</svg>
								<span className='text-gray-600 ml-3'>4 Reviews</span>
							</span>
							<span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
								<svg
									fill='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
								</svg>
								<svg
									fill='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
								</svg>
								<svg
									fill='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
								</svg>
							</span>
						</div>
						<p className='leading-relaxed'>
							Fam locavore kickstarter distillery. Mixtape chillwave tumeric
							sriracha.
						</p>
						<div className='pb-5 border-b-2 border-gray-200 mb-5'>
							<span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'></span>
						</div>
						<div className='text-center'>
							<span className='title-font font-medium text-2xl text-gray-900'>
								${price}
							</span>
						</div>
						<div className='pb-5 border-b-2 border-gray-200 mb-5'>
							<span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'></span>
						</div>
						{totalItems === 0 ? (
							<ItemCount
								quantity={quantity}
								handleAddQuantity={handleAddQuantity}
								handleRemoveQuantity={handleRemoveQuantity}
								onAdd={onAdd}
								product={product}
							/>
						) : (
							<Link to='/cart'>
								<button className='bg-orange-400 rounded text-black px-2 font-bold text-xl uppercase mt-2 hover:bg-orange-600 transition-colors block mx-auto'>
									Terminar mi compra
								</button>
							</Link>
						)}
						<div className='pb-5 border-b-2 border-gray-200 mb-5'>
							<span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
