import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
	const { name, price, image, stock, description } = product;

	const [count, setCount] = useState(1);
	const [totalItems, setTotalItems] = useState(0);

	function onAdd(quantity) {
		setTotalItems(quantity);
	}

	function handleAddCount() {
		if (count < stock) {
			setCount(count + 1);
		} else {
			alert(
				'No hay stock suficiente, podes agregar hasta ' + stock + ' unidades'
			);
		}
	}

	function handleRemoveCount() {
		if (count > 1) {
			setCount(count - 1);
		}
	}

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

						{totalItems === 0 ? (
							<ItemCount
								stock={stock}
								count={count}
								handleAddCount={handleAddCount}
								handleRemoveCount={handleRemoveCount}
								onAdd={onAdd}
							/>
						) : (
							<Link to='/cart'>
								<button className='text-3xl'>Ir al carrito</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
