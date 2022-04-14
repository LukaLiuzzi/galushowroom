import React from 'react';

const ItemCount = () => {
	return (
		<>
			<div className='flex justify-center items-center mt-4'>
				<div className='flex items-center'>
					<button className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'>
						-
					</button>
					<span className='px-2'>1</span>
					<button className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'>
						+
					</button>
				</div>
			</div>
			<button className='bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded block mx-auto mt-4'>
				Agregar al carrito
			</button>
		</>
	);
};

export default ItemCount;
