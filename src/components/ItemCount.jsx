import React, { useContext } from 'react';
import { CartContext } from '../context/CartContexProvider';

const ItemCount = ({
	quantity,
	handleAddQuantity,
	handleRemoveQuantity,
	onAdd,
	product,
}) => {
	const { addItemToCart } = useContext(CartContext);

	return (
		<>
			<div className='flex justify-center items-center mt-4'>
				<div className='flex items-center'>
					<button
						onClick={() => handleRemoveQuantity()}
						className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
					>
						-
					</button>
					<span className='px-2'>{quantity}</span>
					<button
						onClick={() => handleAddQuantity()}
						className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
					>
						+
					</button>
				</div>
			</div>
			<button
				onClick={() => {
					onAdd(quantity);
					addItemToCart({ ...product, quantity });
				}}
				className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded block mx-auto mt-4'
			>
				Agregar al carrito
			</button>
		</>
	);
};

export default ItemCount;
