import React from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({
	stock,
	count,
	handleAddCount,
	handleRemoveCount,
	onAdd,
	onCart,
}) => {
	return (
		<>
			{onCart ? (
				<Link to='/cart'>
					<button className='text-3xl'>Ir al carrito</button>
				</Link>
			) : (
				<>
					<div className='flex justify-center items-center mt-4'>
						<div className='flex items-center'>
							<button
								onClick={() => handleRemoveCount()}
								className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
							>
								-
							</button>
							<span className='px-2'>{count}</span>
							<button
								onClick={() => handleAddCount()}
								className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
							>
								+
							</button>
						</div>
					</div>
					<button
						onClick={() => onAdd(count)}
						className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded block mx-auto mt-4'
					>
						Agregar al carrito
					</button>
				</>
			)}
		</>
	);
};

export default ItemCount;
