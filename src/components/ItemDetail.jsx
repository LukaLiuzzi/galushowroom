import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
	const { name, price, image, stock, description } = product;

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
								quantity={quantity}
								handleAddQuantity={handleAddQuantity}
								handleRemoveQuantity={handleRemoveQuantity}
								onAdd={onAdd}
								product={product}
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
